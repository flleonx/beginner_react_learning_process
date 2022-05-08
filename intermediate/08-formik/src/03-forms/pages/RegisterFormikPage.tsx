import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "It should be at least 2 characters long")
            .max(15, "It should be 15 characters long or less")
            .required("Required"),
          email: Yup.string()
            .email("It should be a valid email")
            .required("Required"),
          password1: Yup.string()
            .min(2, "It should be at least 6 characters long")
            .required("Required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Passwords don't match")
            .required("Required"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="name" placeholder="Name" />
            <MyTextInput label="Email" name="email" placeholder="Email" />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="*****"
            />
            <MyTextInput
              label="Repeat Password"
              name="password2"
              type="password"
              placeholder="*****"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
