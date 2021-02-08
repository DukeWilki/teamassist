import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function EditMember(props) {
  const { id } = useParams();
  console.log(id);

  const [firstname, setFirstname] = useState([]);
  const [lastname, setLastname] = useState([]);
  const [email, setEmail] = useState([]);
  const [dob, setDob] = useState([]);
  const [gender, setGender] = useState([]);
  const [iscommittee, setIscommittee] = useState([]);
  const [iscoach, setIscoach] = useState([]);
  const [isactive, setIsactive] = useState([]);

  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(dob);
  console.log(gender);
  console.log(iscommittee);
  console.log(iscoach);
  console.log(isactive);

  const [members, setRecords] = useState([]);

  function fetchRecords() {
    return axios
      .get("/api/updatemember/" + id)
      .then((response) => response.data);
  }

  useEffect(() => {
    fetchRecords().then((members) => setRecords(members));
  }, []);

  function parseDate(expiry) {
    const date = new Date(expiry);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }

  // Render member
  console.log({ id });
  return (
    <div>
      <h2>Member number #{id}</h2>
      {members.map((member, i) => {
        console.log(member);
        return (
          <p key={member.id}>
            <h4>
              {member.firstname} {member.lastname}
            </h4>
            <h4> {member.certname} </h4>
            <h4> Current Expiry: {parseDate(member.expiry)}</h4>
          </p>
        );
      })}
    </div>
  );
}

export default EditMember;
