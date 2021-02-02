import React from "react";
import "./MenuItems.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import CertSelection from "../../../containers/CertSelection/CertSelection";
import MemberSelection from "../../../containers/MemberSelection/MemberSelection";

function MenuItems() {
  // Render Login form
  return (
    <Router>
      <div className="mainmenu">
        <ul>
          <Link to="/members" ><Route path="/members" component={MemberSelection} />Member Lookup</Link>
        </ul>
        <ul>
          <Link to="/certs" ><Route path="/certs" component={CertSelection} />Certificate Check</Link>
        </ul>
      </div>
    </Router>

    // <div className="menu-list">
    //   <ul><button className="text-button">Member Lookup</button></ul>
    //   <ul><button className="text-button">Cert Checker</button></ul>
    //   <ul><button className="text-button">New Member</button></ul>
    //   <ul><button className="text-button">Edit Permissions</button></ul>
    // </div>
  );
}

export default MenuItems;
