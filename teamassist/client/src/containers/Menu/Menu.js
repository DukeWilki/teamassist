import React from "react";
import { Link } from "react-router-dom";



function Menu() {
  return (
    <div>
      <ul>
          <Link to="/members" >Member Lookup</Link>
        </ul>
        <ul>
          <Link to="/certs" >Certificate Check</Link>
        </ul>
        <ul>
          <Link to="/new"  >New Member</Link>
        </ul>
        <ul>
          <Link to="/edit"  >Edit Member</Link>
        </ul>
    </div>
  );
}

export default Menu;
