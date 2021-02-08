import React, { useState, useEffect } from "react";
import axios from "axios";
// import CertDropdown from "../../components/CertDropdown/CertDropdown";

function NewRecord() {
  // const [memberid, setMemberid] = useState([]);
  const [certname, setCertname] = useState([]);
  const [cert_id, setCert_id] = useState([]);
  const [expiry, setExpiry] = useState([]);
  console.log(certname);
  console.log(cert_id)
  console.log(expiry);

  const [certs, setCerts] = useState([]);

  function fetchCerts() {
    return axios.get("/api/certs").then((response) => response.data);
  }

  useEffect(() => {
    fetchCerts().then((certs) => setCerts(certs));
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    console.log([]);
    axios
      .post("/api/addrecord", {
        // certname: certname,
        cert_id: cert_id,
        expiry: expiry,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Render New record form
  return (
    <div className="new-member-form">
      <form onSubmit={submitHandler}>
        <h2>Add New Record</h2>
        {/* <CertDropdown /> */}
        <h3>~membername~</h3>

        <label className="label">Certificate</label>
        <div className="control">
          <div className="select">
            <select
              className="input"
              name="certname"
              value={cert_id}
              onChange={(e) => setCert_id(e.target.value)}
            >
              {certs.map((cert) => {
                return <option key={cert.id} value={cert.id}> {cert.certname} </option>;
              })}
            </select>
          </div>
        </div>

        <div className="field">
          <label className="label">Expiry Date</label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="control">
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewRecord;
