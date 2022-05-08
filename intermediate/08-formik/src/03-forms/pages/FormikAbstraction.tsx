import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { MyCheckbox } from "../components/MyCheckbox";
// import { MySelect } from "../components/MySelect";
// import { MyTextInput } from "../components/MyTextInput";
import { MyCheckbox, MyTextInput, MySelect } from "../components";
import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Should be 15 long or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Should be 15 long or less")
            .required("Required"),
          email: Yup.string()
            .email("Must be a valid email")
            .required("Required"),
          terms: Yup.boolean().oneOf([true], "Should accept the terms"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "This is not a valid option")
            .required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="Email"
              type="email"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelect>

            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
