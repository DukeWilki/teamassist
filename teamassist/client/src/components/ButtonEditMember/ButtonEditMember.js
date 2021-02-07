import React from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./../button.css";

function ButtonEditMember() {
  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log("Edit Member clicked.");
  // }

  return (
    <div className="control">
      {/* <a href="#" className="button-text" onClick={handleClick}>
        Edit Member
      </a> */}
      <Link className="button-text" to={"/editmember"}>Edit Member</Link>
    </div>
  );
}

export default ButtonEditMember;
