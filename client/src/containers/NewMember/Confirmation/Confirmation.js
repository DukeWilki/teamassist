import React from "react";
import { Link } from "react-router-dom";


function Confirmation() {
  // Render New Member form
  return (
    <div>
        Warmest welcome to the newest member of Maia OCC 💚
        <Link to="/members/">Go to Member Lookup</Link>
        <Link to="/newmember/">Add another Member</Link>
  </div>
  );
}

export default Confirmation;
