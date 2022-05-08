import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

export const RegisterPage = () => {
  const { name, email, password1, password2, onChange, formData, resetForm } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  );
};
