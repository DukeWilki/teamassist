import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function UpdateRecord(props) {
  const params = useParams();
  console.log(props.id);

  const [records, setRecords] = useState([]);

  function fetchRecords() {
    return axios.get("/api/updaterecord/" + props.id)
    .then((response) => response.data);
  }

  useEffect(() => {
    fetchRecords()
    .then((records) => setRecords(records));
  }, []);

  function parseDate(expiry) {
    const date = new Date(expiry)
    return (date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear())
  };





  // Render record
  const { id } = useParams();
  console.log({id});
  return (
    <div>
      <h2>Record number #{id}</h2>


      {records.map((record, i) => {
        console.log(record);
        return (
          <p key={record.id} >
            <h4> {record.firstname} {record.lastname} </h4>
            <h4> {record.certname} </h4>
            <h4> Current Expiry: {parseDate(record.expiry)}</h4>
          </p>
        )
      })}
     
<div className="field">
          <label className="label"><h5>Select new expiry:</h5></label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="dob"
            ></input>
          </div>
        </div>
    </div>
  );
}

export default UpdateRecord;
