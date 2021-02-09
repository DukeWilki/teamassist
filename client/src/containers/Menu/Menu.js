import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-text">
      <p>
        <Link to="/members">Member Lookup</Link>
      </p>
      <p>
        <Link to="/certs">Certificate Check</Link>
      </p>
      <p>
        <Link to="/newmember">New Member</Link>
      </p>
    </div>
  );
}

export default Menu;
