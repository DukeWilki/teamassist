import React, { useState, useEffect } from "react";
import axios from "axios";

function RecordList() {
  const [records, setRecords] = useState([]);

  function fetchRecords() {
    return axios.get("/api/fulltable").then((response) => response.data);
  }

  useEffect(() => {
    fetchRecords().then((records) => setRecords(records));
  }, []);

  function toYesNo(isactive) {
    if (isactive) {
      return "yes";
    } else {
      return "no";
    }
  }

  // Render record list
  return (
    <div>
      <h4>For best results, view table on a desktop or tablet</h4>
      <table className="menu-list center">
        <tr className="menu-text">
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Email Address</th>
          <th>Certificate</th>
          <th>Expiry</th>
          <th>Is Active?</th>
        </tr>
        {records.map((record) => {
          return (
            <tr className="menu-text" key={record.id}>
              <td>{record.firstname} </td>
              <td>{record.lastname}</td>
              <td>{record.gender} </td>
              <td>{record.dob} </td>
              <td>{record.email} </td>
              <td>{record.certname} </td>
              <td>{record.expiry} </td>
              <td>{toYesNo(record.isactive)}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default RecordList;
