import React, { useState } from "react";
import UserDataService from "../../../../services/net/UserDataService";
import IUserData from "../../../../services/types/users.type";
import {
  Formik,
  Field,
  Form,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import * as Yup from "yup";
import {
  FormWrapper,
  Input,
  Button,
  ErrorMessage,
  SuccessMessage,
  Label,
} from "./StyledComponents";

const initialValues: IUserData = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  comfirmPassword: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  comfirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegistrationForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = async (
    values: IUserData,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    setSubmitting(true);
    try {
      await UserDataService.postUsers(values);
      setSuccessMessage("User registered successfully!");
      resetForm();
    } catch (error) {
      console.error("Error posting user data", error);
      setSuccessMessage("");
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormWrapper>
          <Form>
            <Label htmlFor="firstName">First Name</Label>
            <Field as={Input} type="text" id="firstName" name="firstName" />
            <FormikErrorMessage name="firstName" component={ErrorMessage} />

            <Label htmlFor="lastName">Last Name</Label>
            <Field as={Input} type="text" id="lastName" name="lastName" />
            <FormikErrorMessage name="lastName" component={ErrorMessage} />

            <Label htmlFor="email">Email</Label>
            <Field as={Input} type="email" id="email" name="email" />
            <FormikErrorMessage name="email" component={ErrorMessage} />

            <Label htmlFor="password">Password</Label>
            <Field as={Input} type="password" id="password" name="password" />
            <FormikErrorMessage name="password" component={ErrorMessage} />

            <Label htmlFor="comfirmPassword">Confirm Password</Label>
            <Field
              as={Input}
              type="password"
              id="comfirmPassword"
              name="comfirmPassword"
            />
            <FormikErrorMessage
              name="comfirmPassword"
              component={ErrorMessage}
            />

            <FormikErrorMessage name="message" component={ErrorMessage} />

            <Button type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </Form>
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </FormWrapper>
      )}
    </Formik>
  );
};

export default RegistrationForm;
