import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser, getUsers } from "../../utils/userApis";
import { checkFormFields } from "./checkFormFields";

function Register() {
  const history = useHistory();

  const [registerState, setRegisterState] = useState({
    email: "",
    password: "",
    errors: {},
    formIsValid: true,
  });

  const handleValidation = () => {
    const [errors, formIsValid] = checkFormFields(registerState);
    setRegisterState({ ...registerState, errors, formIsValid });
  };

  const onChange = (event) => {
    setRegisterState({
      ...registerState,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    let errors = {};
    handleValidation();
    event.preventDefault();
    const userData = {
      email: registerState.email,
      password: registerState.password,
    };
    if (registerState.formIsValid) {
      try {
        const res = await registerUser(userData);
        history.push("/login");
        console.log("Form submitted");
      } catch (error) {
        errors["email"] = "Email already exists";
        setRegisterState({ ...registerState, errors });
      }
    } else {
      console.log("Form has errors.");
    }
  };

  // Render Signup form
  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto mt-5 col-md-6">
          <form noValidate onSubmit={onSubmit}>
            <h1 className="mb-3 h3 title-text font-weight normal">
              Sign up to use this app
            </h1>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                refs="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                value={registerState.email}
                onChange={onChange}
              />
              <span style={{ color: "red" }}>
                {registerState.errors["email"]}
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                refs="password"
                className="form-control"
                name="password"
                placeholder="Enter Password"
                value={registerState.password}
                onChange={onChange}
              />
              <span style={{ color: "red" }}>
                {registerState.errors["password"]}
              </span>
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
