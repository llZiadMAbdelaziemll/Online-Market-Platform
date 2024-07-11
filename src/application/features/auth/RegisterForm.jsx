import React from "react";
import { useSignup } from "../auth/useSignup";
import Form from "../../../basicUi/Form";
import FormRow from "../../../basicUi/FormRow";
import Input from "../../../basicUi/Input";
import Button from "../../ui/Button";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";

const Select = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-100);
  color: var(--color-grey-500) !important;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  &:focus {
    outline: 1px solid var(--color-grey-100) !important;
  }
  & option {
    color: var(--color-grey-500) !important;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.6rem 0.6rem;
  }
`;

const RegisterForm = () => {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset, control } =
    useForm();
  const { errors } = formState;
  // { name, email, password }
  function onSubmit(data) {
    signup(data, {
      onSettled: () => reset(),
    });
    console.log(data);
  }
  return (
    <Form type="auth" onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <FormRow>
          <FormRow size="half">
            <FormRow label="First Name*" error={errors?.firstName?.message}>
              <Input
                type="text"
                id="firstName"
                placeholder="First Name*"
                disabled={isLoading}
                {...register("firstName", {
                  required: "This field is required",
                })}
              />
            </FormRow>

            <FormRow label="Last Name*" error={errors?.lastName?.message}>
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name*"
                disabled={isLoading}
                {...register("lastName", {
                  required: "This field is required",
                })}
              />
            </FormRow>
          </FormRow>
          <FormRow size="half">
            <FormRow label="Email*" error={errors?.email?.message}>
              <Input
                type="email"
                id="email"
                placeholder="Email address*"
                disabled={isLoading}
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
            </FormRow>

            <FormRow label="Phone Number*" error={errors?.phone?.message}>
              <Input
                type="text"
                id="phone"
                placeholder="Phone Number*"
                disabled={isLoading}
                {...register("phone", {
                  required: "This field is required",
                })}
              />
            </FormRow>
          </FormRow>
          {/* <FormRow label="Address*" error={errors?.address?.message}>
            <Input
              type="text"
              id="address"
              placeholder="Address*"
              disabled={isLoading}
              {...register("address", {
                required: "This field is required",
              })}
            />
          </FormRow> */}
          <FormRow size="half">
            <FormRow label="City*" error={errors?.city?.message}>
              <Input
                type="text"
                id="city"
                placeholder="City*"
                disabled={isLoading}
                {...register("city", {
                  required: "This field is required",
                })}
              />
            </FormRow>

            <FormRow label="Select Role">
              <Controller
                name="role" // The name should match the key in your data object
                control={control}
                defaultValue="buyer" // Set the default value as needed
                render={({ field }) => {
                  return (
                    <Select onChange={(e) => field.onChange(e.target.value)}>
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                    </Select>
                    // <Select
                    //   options={["buyer", "seller"]}
                    //   value={field.value}
                    //   onChange={(e) => field.onChange(e.target.value)}
                    // />
                  );
                }}
              />
            </FormRow>
          </FormRow>
          <FormRow size="half">
            <FormRow label="Password*" error={errors?.password?.message}>
              <Input
                type="password"
                id="password"
                placeholder="Password (min 8 characters)"
                disabled={isLoading}
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
              />
            </FormRow>

            <FormRow
              label="Confirm Password*"
              error={errors?.passwordConfirm?.message}
            >
              <Input
                type="password"
                id="passwordConfirm"
                placeholder="Repeat password"
                disabled={isLoading}
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords need to match",
                })}
              />
            </FormRow>
          </FormRow>
        </FormRow>
      </FormRow>

      <FormRow>
        <div>
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </div>
      </FormRow>
    </Form>
  );
};

export default RegisterForm;
