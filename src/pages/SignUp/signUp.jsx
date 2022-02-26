import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import styled from "styled-components";
import { registerUser } from "../../services/api";
import { Spinner, Input, Button } from "./../Components/Commom/Styles";
import PageLayout from "./../Components/Commom/PageLayout";
import PasswordInput from "./../Components/Commom/PasswordInput";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../contexts/auth';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
  .alt-text {
    text-align: center;
    margin: 10px auto;
  }
`;
let timeout;

export default function SignUp() {
  const { newUser } = useContext(AuthContext)
  const [formFields, setFormFields] = useState({ email: "", username: "",fullname: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    e.persist();
    setFormFields((state) => ({ ...state, [e.target.name]: e.target.value }));
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    registerUser(formFields.email, formFields.username, formFields.fullname, formFields.password);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              type="text"
              value={formFields.email}
            />
            <Input
              name="username"
              placeholder="Username"
              onChange={handleInputChange}
              type="text"
              value={formFields.username}
            />
            <Input
              name="fullname"
              placeholder="Full Name"
              onChange={handleInputChange}
              type="text"
              value={formFields.fullname}
            />
            <PasswordInput
              name="password"
              onChange={handleInputChange}
              value={formFields.password}
            />
          </>
        )}
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Register User"}
        </Button>
      </Form>
    </PageLayout>
  );
}
