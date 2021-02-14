import React, { useState, useEffect } from "react";
import "./MemberSummaryList.css";
import axios from "axios";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";



function MemberSummaryList(props) {
  console.log(props.id);

  const [profiles, setRecords] = useState([]);

  function fetchRecords() {
    return axios
      .get("/api/members/" + props.id)
      .then((response) => response.data);
  }

  useEffect(() => {
    fetchRecords().then((profiles) => setRecords(profiles));
  }, []);

  function parseDate(expiry) {
    const date = new Date(expiry);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }

  // const history = useHistory();
  // const refresh = useRefresh(history, redirectPath);

  // function directionHandler() {
  //   if (history.location.pathname === redirectPath) {
  //     refresh();
  //   } else {
  //     history.push(redirectPath);
  //   }
  // };


  
  function addrecordHandler(){
    var link = `/#/addrecord/${props.id}`      
    window.location.href = link;
}

function editmemberHandler(){
  var link = `/#/editmember/${props.id}`      
  window.location.href = link;
}

function updaterecordHandler(){
  var link = `/#/updaterecord/${props.id}`     
  window.location.href = link;
}

  // Render member profile list
  return (
    <div className="menu-list">
      {profiles.map((record, i) => {
        console.log(record);
        return (
          <p key={record.id}>
            <Router>
            <Link to={"/#/updaterecord/" + record.id}  onClick={updaterecordHandler}>
              <span className="menu-text">{record.certname} {record.member_id}</span>
              <br></br>
              <span className="gen-text">Expiry:{parseDate(record.expiry)}</span>
            </Link>
            </Router>
          </p>
        );
      })}
      
      <div className="control button-div">
        <Link className="button-text" to={`/#/addrecord/${props.id}`} onClick={addrecordHandler}>Add Record</Link>
      </div>
      <div className="control button-div">
      <Link className="button-text" to={`/#/editmember/${props.id}`} onClick={editmemberHandler}>Edit Member</Link>
    </div></div>
  );
}

export default MemberSummaryList;
