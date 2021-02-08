import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";

function UpdateRecord(props) {
  const { id } = useParams();
  console.log(id);

  const [records, setRecords] = useState([]);

  function fetchRecords() {
    return axios
      .get("/api/updaterecord/" + id)
      .then((response) => response.data);
  }

  useEffect(() => {
    fetchRecords().then((records) => setRecords(records));
  }, []);

  function parseDate(expiry) {
    const date = new Date(expiry);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }

  const [expiry, setExpiry] = useState([]);
  console.log(expiry);

  function submitHandler(e) {
    // e.preventDefault();
    console.log([]);
    axios
      .patch("/api/updaterecord/" + id, {
        expiry: expiry,
        id: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  

  // Render record

  console.log({ id });
  return (
    <div>
      <h2>Record number #{id}</h2>

      {records.map((record, i) => {
        console.log(record);
        return (
          <p key={record.id}>
            <h4>
              {" "}
              {record.firstname} {record.lastname}{" "}
            </h4>
            <h4> {record.certname} </h4>
            <h4> Current Expiry: {parseDate(record.expiry)}</h4>
          </p>
        );
      })}

      <form onSubmit={submitHandler}>
        <div className="field">
          <label className="label">
            <h5>Select new expiry:</h5>
          </label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            ></input>
          </div>
          <div className="control">
            <button type="submit" className="button is-primary">
              Extend
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateRecord;
