import React, { useState } from "react";
import Form from "../../../basicUi/Form";
import FormRow from "../../../basicUi/FormRow";
import Input from "../../../basicUi/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../../basicUi/SpinnerMini";
import { useLogin } from "./useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
          console.log(e);
        },
      }
    );
  }

  return (
    <Form type="auth">
      <FormRow label="Email Address*">
        <Input
          inputType="regular"
          type="email"
          id="email"
          placeholder="Email address*"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="Password*">
        <Input
          inputType="regular"
          type="password"
          id="password"
          placeholder="Password*"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        <div>
          <Button
            size="large"
            variation="login"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {!isLoading ? "Log in" : <SpinnerMini />}
          </Button>
        </div>
      </FormRow>
    </Form>
  );
};

export default LoginForm;
