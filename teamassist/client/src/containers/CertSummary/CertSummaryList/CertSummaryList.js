import React, { useState, useEffect } from "react";
import "./CertSummaryList.css";
import axios from 'axios';
import { Link } from "react-router-dom";


function CertSummaryList() {


  const [records, setRecords] = useState([]);

  function fetchRecords(){
    return axios.get('/api/records')
      .then((response) => response.data)
  }

  useEffect(() => {
    fetchRecords()
      .then((records) => setRecords(records) );


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
      <h2>Certificatation Check</h2>  
      <h3>~cert_name~</h3>  
      {records.map((record, i) => {
        console.log(record);
        return (
          // <ul key={i} >
          <ul key={record.id} >
            <Link to={`/updaterecord/${record.id}`}> {record.firstname} {record.lastname} <br></br> {record.certname} <br></br> Expiry: {parseDate(record.expiry)}</Link>
          </ul>
        )
      })}
    </div>
  );
}



export default CertSummaryList;
