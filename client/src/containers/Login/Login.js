import React from "react";
import axios from "axios";


function Login() {
  const [formState, setFormState] = React.useState({
    email: "",
    password: ""
  })

  // Render Login form
  return (
    <div>
      {/* EMAIL ADDRRESS */}
      <form action="" className="box" onSubmit= {(e)=> {
        e.preventDefault()
        // validation
        console.log(formState);
        console.log("right before axios");
        axios({
          method: 'post',
          url: "http://localhost:3001/api/login",
          data: {
            email: formState.email,
            password: formState.password
          },headers: {
            "Access-Control-Allow-Origin": true
          }
        })
        console.log("right after axios");;


        // axios("http://localhost:3001/api/login", {method: "POST", body: JSON.stringify({username: formState.email, pass: formState.pass})}).then(res=>{
        //   console.log(res);
        // })
        
        
      }}>
        <div className="field">
          <div className="control has-icons-left">
            <input
              type="email"
              placeholder="Email address"
              className="input"
              required
              value= {formState.email}
              onChange= {(e)=> {
                setFormState({
                  ...formState,
                  email: e.target.value
                })
              }} 
            ></input>
          </div>
        </div>
        <br></br>
        <div className="field">
          <div className="control has-icons-left">
            <input
              type="password"
              placeholder="Password"
              className="input"
              required
              value= {formState.password}
              onChange= {(e)=> {
                setFormState({
                  ...formState,
                  password: e.target.value
                })
              }} 
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
