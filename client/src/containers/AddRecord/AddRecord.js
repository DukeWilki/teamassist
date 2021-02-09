import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";

function NewRecord(props) {
  const { id } = useParams();
  console.log("propsID: " + props.id);
  console.log("{ ID }: " + id);
  const [cert_id, setCert_id] = useState([]);
  const [expiry, setExpiry] = useState([]);
  console.log(cert_id)
  console.log(expiry);

  // LOOK UP CERTS
  const [certs, setCerts] = useState([]);
  function fetchCerts() {
    return axios.get("/api/certs").then((response) => response.data);
  }
  useEffect(() => {
    fetchCerts().then((certs) => setCerts(certs));
  }, []);


  // FUNCTION TO INVOKE API ROUTE AND PUT MYSQL
  function submitHandler(e) {
    e.preventDefault();
    console.log([]);
    axios
      .post("/api/addrecord", {
        // member_id: member_id,
        member_id: id,
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
        <h3>~membername~</h3>

        <label className="label">Certificate</label>
        <div className="control">
          <div className="select">
            <select
              className="input input-box"
              name="certname"
              value={cert_id}
              onChange={(e) => setCert_id(e.target.value)}
            >
              <option value="" selected disabled>Please select</option>
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
              className="input input-box"
              type="date"
              name="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="control">
          <button type="submit" className="button is-primary button-text">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewRecord;
