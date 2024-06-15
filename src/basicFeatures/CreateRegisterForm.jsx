import React from "react";
import Form from "../basicUi/Form";
import FormRow from "../basicUi/FormRow";
import Input from "../basicUi/Input";
import Button from "../basicUi/Button";

const CreateRegisterForm = () => {
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
          <FormRow label="Address*">
            <Input type="text" id="mobile" />
          </FormRow>
          <FormRow label="Size">
            <Input type="text" id="email" />
          </FormRow>

          <FormRow label="Product Tags ( Type and make comma to separate tags )">
            <Input type="text" id="joiningDate" />
          </FormRow>
        </FormRow>
      </FormRow>

      <FormRow>
        <Button>Submit</Button>
      </FormRow>
    </Form>
  );
};

export default CreateRegisterForm;
