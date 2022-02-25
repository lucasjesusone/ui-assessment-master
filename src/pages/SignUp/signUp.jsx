import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import styled from "styled-components";

import { Spinner, Input, Button } from "./../Components/Commom/Styles";
import PageLayout from "./../Components/Commom/PageLayout";
import PasswordInput from "./../Components/Commom/PasswordInput";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

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
    const { login } = useContext(AuthContext);
    const [formFields, setFormFields] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
  
    function handleInputChange(e) {
      e.persist();
      setFormFields((state) => ({ ...state, [e.target.name]: e.target.value }));
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setLoading(true);
      login(formFields.email, formFields.password);
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
              <PasswordInput
                name="password"
                onChange={handleInputChange}
                value={formFields.password}
              />
            </>
          )}
          <Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
          {!loading && (
            <>
              <div className="alt-text">or</div>
              <Link to="/signUp">
                <Button href="/signUp" secondary type="button">
                  Register
                </Button>
              </Link>
            </>
          )}
        </Form>
      </PageLayout>
    );
}
