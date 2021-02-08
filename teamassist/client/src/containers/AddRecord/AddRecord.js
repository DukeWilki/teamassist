import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";

function NewRecord(props) {
  const { id } = useParams();
  console.log("propsID: " + props.id);
  console.log("{ ID }: " + id);
  // const [memberid, setMemberid] = useState([]);
  const [member_id, setMember_id] = useState([]);
  const [cert_id, setCert_id] = useState([]);
  const [expiry, setExpiry] = useState([]);
  console.log(member_id);
  console.log(cert_id)
  console.log(expiry);

  // // MEMBERS - hack only
  // const [members, setMembers] = useState([]);
  // function fetchCerts() {
  //   return axios.get("/api/members").then((response) => response.data);
  // }
  // useEffect(() => {
  //   fetchCerts().then((members) => setMembers(members));
  // }, []);


  // CERTS
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
        member_id: member_id,
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

         {/* <label className="label">Member</label>
        <div className="control">
          <div className="select">
            <select
              className="input"
              name="membername"
              value={member_id}
              onChange={(e) => setMember_id(e.target.value)}
            >
              {members.map((member) => {
                return <option key={member.id} value={member.id}> {member.firstname} {member.lastname} </option>;
              })}
            </select>
          </div>
        </div> */}

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
