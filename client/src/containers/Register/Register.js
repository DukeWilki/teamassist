import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { registerUser, getUsers } from '../../utils/userApis';
import { checkFormFields } from './checkFormFields';


function Register() {

    const history = useHistory();

    const [registerState, setRegisterState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        errors: {},
        formIsValid: true,
    });

    const handleValidation = () => {
        const [errors, formIsValid] = checkFormFields(registerState);
        setRegisterState({ ...registerState, errors, formIsValid });
    };

    const onChange = (event) => {
        setRegisterState({ ...registerState, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event) => {
        let errors = {};
        handleValidation();
        event.preventDefault();
        const userData = {
            first_name: registerState.first_name,
            last_name: registerState.last_name,
            email: registerState.email,
            password: registerState.password,
        };
        if (registerState.formIsValid) {
            try {
                const res = await registerUser(userData)
                console.log(res.data);
                history.push('/login');
                console.log('Form submitted');
            } catch (error) {
                errors['email'] = 'Email already exists';
                setRegisterState({ ...registerState, errors })
            }
        } else {
            console.log('Form has errors.');
        }
    };

//   const [formState, setFormState] = React.useState({
//     email: "",
//     password: ""
//   })

  // Render Signup form
  return (
    <div className="container">
        <div className="row">
            <div className="mx-auto mt-5 col-md-6">
                <form noValidate 
                onSubmit={onSubmit}
                >
                    <h1 className="mb-3 h3 font-weight normal">Please Sign in</h1>
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type="text"
                            refs="first_name"
                            className="form-control"
                            name="first_name"
                            placeholder="Enter First Name"
                            value={registerState.first_name}
                            onChange={onChange}
                        />
                        <span style={{ color: 'red' }}>
                            {registerState.errors['first_name']}
                            </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            refs="last_name"
                            className="form-control"
                            name="last_name"
                            placeholder="Enter Last Name"
                            value={registerState.last_name}
                            onChange={onChange}
                        />
                        <span style={{ color: 'red' }}>
                            {registerState.errors['last_name']}
                            </span>
                    </div>
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
                        <span style={{ color: 'red' }}>
                            {registerState.errors['email']}
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
                        <span style={{ color: 'red' }}>
                            {registerState.errors['password']}
                            </span>
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                        Register
                    </button>
                </form>
            </div>
        </div>
    </div>





                        
    /* <div>

      <form action="" className="box" onSubmit= {(e)=> {
        e.preventDefault()
        // validation
        console.log(formState);
        axios({
          method: 'post',
          url: "http://localhost:3001/api/signup",
          data: {
            username: formState.email,
          },headers: {
            "Access-Control-Allow-Origin": true 
          }
        });

        //   function fetchAdmins() {
        //     return axios.get("/api/validate").then((response) => response.data);
        //   }
        
        //   useEffect(() => {
        //     fetchAdmins().then((admins) => setAdmins(admins));
        //   }, []);
      }}>
        <div className="field">
          <div className="control has-icons-left">
            <input
              type="email"
              placeholder="Email address"
              className="input"
              required
              value= {formState.email}
              // onChange= {(e)=> {
              //   setFormState({
              //     ...formState,
              //     email: e.target.value
              //   })
              // }} 
            ></input>
          </div>
        </div>

        <button type="submit" className="btn btn-secondary">Validate</button>
      </form>

      <br></br>
    </div> */
  );
}
console.log("hello");
export default Register;
