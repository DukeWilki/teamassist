import React, { useState, useEffect } from "react";
import "./MemberSummaryList.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import ButtonAddRecord from "./../../../components/ButtonAddRecord/ButtonAddRecord";
import ButtonEditMember from "./../../../components/ButtonEditMember/ButtonEditMember";

function MemberSummaryList() {


  const [profiles, setRecords] = useState([]);

  function fetchRecords(){
    return axios.get('/api/profiles')
      .then((response) => response.data)
  }

  useEffect(() => {
    fetchRecords()
      .then((profiles) => setRecords(profiles) );


  }, []);

  function parseDate(expiry) {
    const date = new Date(expiry)
    // date.format("dd MMMM YYYY");
    // return (date.getDate() + "/" + (date.getMonth() + 1).format(MMM) + "/" + date.getFullYear()) 
    return (date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear())
  };

  // Render cert list
  return (
    <div className="menu-list">
      <h2>Member Profile</h2>  
      <h3>~membername~</h3>  
      {profiles.map((record, i) => {
        console.log(record);
        return (
          // <ul key={i} >
          <ul key={record.id} >
            {/* <button className="text-button" > {record.certname} <br></br> Expiry: {parseDate(record.expiry)}</button> */}
            {/* <Link to="/test" > {record.certname} <br></br> Expiry: {parseDate(record.expiry)}</Link> */}
            <Link to={"/updaterecord/" + record.id}> {record.certname} <br></br> Expiry: {parseDate(record.expiry)}</Link>
          </ul>          
        )    

      })}
      < ButtonAddRecord />< ButtonEditMember />
    </div>
  );
}

export default MemberSummaryList;
