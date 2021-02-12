import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

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
            <h4 className="title-text">Extend Certification:</h4>
      {records.map((record, i) => {
        console.log(record);
        return (
          <p key={record.id}>
            <h4 className="title-text">
              {record.firstname} {record.lastname}
            </h4>
            <h4 className="gen-text"> {record.certname} </h4>
            <h4 className="gen-text"> Current Expiry: {parseDate(record.expiry)}</h4>
          </p>
        );
      })}

      <form onSubmit={submitHandler}>
        <div className="field">
          <label className="label">
            <p className="gen-text"><strong>Select new expiry:</strong></p>
          </label>
          <div className="control">
            <input
              className="input input-box gen-text"
              type="date"
              name="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            ></input>
          </div>
          <div className="control">
            <button type="submit" className="button is-primary button-text">
              Extend
            </button>
            <p className="gen-text">Record number #{id}</p>
          </div>
        </div>
      </form>
      {records.map((record, i) => {
        console.log(record);
        return <Link to="/members/">Back to Member Lookup</Link>;
      })}
    </div>
  );
}

export default UpdateRecord;
