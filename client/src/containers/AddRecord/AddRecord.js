import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";

function NewRecord(props) {
  const { id } = useParams();
  // console.log("propsID: " + props.id);
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

  const [members, setMembers] = useState([]);
  const [firstname, setFirstname] = useState([]);
  const [lastname, setLastname] = useState([]);
  console.log(firstname);
  console.log(lastname);

  function fetchMembers() {
    return axios
      .get("/api/displayname/" + id)
      .then((response) => response.data);
  }

  useEffect(() => {
    fetchMembers().then((members) => setMembers(members));
  }, []);
  // FUNCTION TO INVOKE API ROUTE AND PUT MYSQL
  function submitHandler(e) {
    // e.preventDefault();
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

      <form className="gen-text" onSubmit={submitHandler}>

      <h4 className="title-text">Add Certification to:</h4>
        {members.map((member, i) => {
        console.log(member);
        return (
          //
          <h4 key={member.id} className="title-text">
            {member.firstname} {member.lastname}
          </h4>
        );
      })}

        <div className="control">
          <div className="select">
            <select
              className="input input-box gen-text"
              name="certname"
              value={cert_id}
              onChange={(e) => setCert_id(e.target.value)}
            >
              <option value="" selected disabled>Select Certificate</option>
              {certs.map((cert) => {
                return <option key={cert.id} value={cert.id}> {cert.certname} </option>;
              })}
            </select>
          </div>
        </div>

        <div className="field">
          <p className="gen-text">Select new expiry:</p>
          <div className="control">
            <input
              className="input input-box gen-text"
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
