import React from "react";
import { Route } from "react-router-dom";
import Menu from "../Menu/Menu";
import Login from "../Login/Login";
import Register from "../Register/Register";

function Landing() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="d-flex justify-content-center backgroundImg">
        Strong, bold and confident
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Menu} />
      </div>
    </div>
  );
}

export default Landing;
