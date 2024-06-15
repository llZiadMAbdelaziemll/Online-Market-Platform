import React from "react";
import Form from "../../../basicUi/Form";
import FormRow from "../../../basicUi/FormRow";
import Input from "../../../basicUi/Input";
import Button from "../../ui/Button";

const LoginForm = () => {
  return (
    <Form type="auth">
      <FormRow label="Email Address*">
        <Input type="text" id="specialization" />
      </FormRow>
      <FormRow label="Password*">
        <Input type="text" id="department" />
      </FormRow>

      <FormRow>
        <div>
          <Button>Submit</Button>
        </div>
      </FormRow>
    </Form>
  );
};

export default LoginForm;
