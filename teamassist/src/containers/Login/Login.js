import React from "react";
import "./style.css";

function Login() {
  // Render Login form
  return (
    <div>
      {/* EMAIL ADDRRESS */}
      <form action="" class="box">
        <div class="field">
          <div class="control has-icons-left">
            <input
              type="email"
              placeholder="Email address"
              class="input"
              required
            ></input>
          </div>
        </div>
      </form>

<br></br>

      {/* PASSWORD */}
      <form action="" class="box">
        <div class="field">
          <div class="control has-icons-left">
            <input
              type="password"
              placeholder="Password"
              class="input"
              required
            ></input>
          </div>
        </div>
      </form>

      {/* CONTAINER CLOSE */}
      <br></br>
    </div>
  );
}
console.log("hello");
export default Login;
