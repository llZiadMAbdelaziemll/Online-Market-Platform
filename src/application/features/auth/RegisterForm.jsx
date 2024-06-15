import React from "react";
import Form from "../../../basicUi/Form";
import FormRow from "../../../basicUi/FormRow";
import Input from "../../../basicUi/Input";
import Button from "../../ui/Button";

const RegisterForm = () => {
  return (
    <Form type="auth">
      <FormRow>
        <FormRow>
          <FormRow size="half">
            <FormRow label="Firast Name*">
              <Input type="text" id="name" />
            </FormRow>

            <FormRow label="Last Name*">
              <Input type="text" id="department" />
            </FormRow>
          </FormRow>
          <FormRow size="half">
            <FormRow label="Email*">
              <Input type="text" id="name" />
            </FormRow>

            <FormRow label="Phone Number*">
              <Input type="text" id="department" />
            </FormRow>
          </FormRow>
          <FormRow label="Address*">
            <Input type="text" id="specialization" />
          </FormRow>
          <FormRow size="half">
            <FormRow label="City*">
              <Input type="text" id="name" />
            </FormRow>

            <FormRow label="Post Code">
              <Input type="text" id="department" />
            </FormRow>
          </FormRow>
          <FormRow size="half">
            <FormRow label="Country*">
              <Input type="text" id="name" />
            </FormRow>

            <FormRow label="Region State*">
              <Input type="text" id="department" />
            </FormRow>
          </FormRow>
        </FormRow>
      </FormRow>

      <FormRow>
        <div>
          <Button>Submit</Button>
        </div>
      </FormRow>
    </Form>
  );
};

export default RegisterForm;
