import React from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./../button.css";

function ButtonAddRecord() {
  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log("Add Record clicked.");
  // }

  return (
    <div className="control">
      {/* <a href="#" className="button-text" onClick={handleClick}>
        Add Record
      </a> */}
      <Link className="button-text" to={"/addrecord"}>Add Record</Link>
    </div>
  );
}

export default ButtonAddRecord;
