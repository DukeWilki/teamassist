import React from "react";
import "./style.css";


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
        fetch("http://localhost:3001/api/login", {method: "POST", body: JSON.stringify({username: formState.email, password: formState.password})}).then(res=>{
          console.log(res);
        })
        
        
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

      {/* CONTAINER CLOSE */}
      <br></br>
    </div>
  );
}
console.log("hello");
export default Login;
