import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./../button.css";

function ButtonNewMember() {
  // function handleClick(e) {
  //   e.preventDefault(); 
  //   console.log("New Member clicked.");
  // }

  return (
    <div className="control">
      {/* <a href={"http://www.google.com"} className="button-text" onClick={handleClick}>
      </a> */}
      <Link className="button-text" to={"/newmember"}>New Member</Link>
    </div>
  );
}

export default ButtonNewMember;
