import React, { useState, useEffect } from "react";
import "./CertSummaryList.css";
import axios from 'axios';
import { Link } from "react-router-dom";



function CertSummaryList(props) {

  console.log(props.id);

  const [records, setRecords] = useState([]);

  function fetchRecords(){
    return axios.get('/api/certs/' + props.id )
      .then((response) => response.data)
  }

  useEffect(() => {
    fetchRecords()
      .then((response) => setRecords(response) );
  }, []);

  function parseDate(expiry) {
    const date = new Date(expiry)
    return (date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear())
  };

  // Render cert summary list
  return (
    <div className="menu-list">
      {records.map((record, i) => {
        console.log(record);
        return (
          <p key={record.id} >
            <Link to={`/#/updaterecord/${record.id}`}> 
            <span className="menu-text">{record.firstname} {record.lastname} </span><br></br> 
            {/* <span className="gen-text">{record.certname}</span> <br></br>  */}
            <span className="gen-text">Expiry: {parseDate(record.expiry)}</span></Link>
                      </p>
          
        )
      })}
    </div>
  );
}



export default CertSummaryList;
