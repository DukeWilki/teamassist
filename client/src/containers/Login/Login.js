import React from "react";
import axios from "axios";
import { useAppContext } from '../../store';
import { loginUser, getUsers } from '../../utils/userApis';
import { useHistory } from 'react-router-dom';
import { setUserLoggedIn } from '../../actions';

// import { checkFormFields } from './checkFormFields';

function Login() {

  const history = useHistory();

  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
    errors: {},
    formIsValid: true,
  })

//   const handleValidation = () => {
//     const [errors, formIsValid] = checkFormFields(formState);
//     setFormState({ ...formState, errors, formIsValid });
// };

const [, appDispatch ] = useAppContext();

  const onChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
};
  

  const onSubmit = async (event) => {
    let errors = {};
    // handleValidation();
    event.preventDefault();
    const userData = {
        email: formState.email,
        password: formState.password,
    };
    if (formState.formIsValid) {
        try {
            const res = await loginUser(userData)
            console.log(res.data);
            if (res.data === "TRUE") {
              const response = await loginUser(userData);
              // Set token to localStorage
              const token = response.data;
              // Set user to logged in
              await setUserLoggedIn(token, appDispatch);
              history.push('/');
            }

            console.log('Form submitted');
        } catch (error) {
            errors['email'] = 'Email already exists';
            setFormState({ ...formState, errors })
        }
    } else {
        console.log('Form has errors.');
    }
};



  // Render Login form
  return (
    <div>
      {/* EMAIL ADDRRESS */}
      <form noValidate 
                onSubmit={onSubmit}>

        <div className="field">
          <div className="control has-icons-left">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="input"
              required
              value= {formState.email}
              onChange={onChange}
            ></input>
          </div>
        </div>
        <br></br>
        <div className="field">
          <div className="control has-icons-left">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input"
              required
              value= {formState.password}
              onChange={onChange}
            ></input>
          </div>
        </div>
        <br></br>
        <button type="submit" className="btn btn-secondary">Login</button>
      </form>

      <br></br>
    </div>
  );
}
console.log("hello");
export default Login;