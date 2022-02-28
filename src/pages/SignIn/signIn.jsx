/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import { Spinner, Input, Button } from "./../Components/Commom/Styles";
import PageLayout from "./../Components/Commom/PageLayout";
import PasswordInput from "./../Components/Commom/PasswordInput";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Form } from './styles';


let timeout;
export default function SignIn() {
  const { login } = useContext(AuthContext);
  const [formFields, setFormFields] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  function handleInputChange(e) {
    e.persist();
    setFormFields((state) => ({ ...state, [e.target.name]: e.target.value }));
    
    if(setFormFields !== '')
    setDisabledButton(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    login(formFields.email, formFields.password);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  // if(formFields.email === "") {
  //     setLoading(true)
  // }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Sign In</h1>
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
        <Button type="submit" disabled={loading, disabledButton}>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Link to="/signUp">
              <Button secondary type="button">
                Register
              </Button>
            </Link>
          </>
        )}
      </Form>
    </PageLayout>
  );
}
