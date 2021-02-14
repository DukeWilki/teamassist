import React, { useState, useEffect } from "react";
import MemberSummaryList from "./MemberSummaryList/MemberSummaryList";
import { BrowserRouter as Router, Switch, useParams } from "react-router-dom";
import axios from "axios";

function MemberSummary() {
  const { id } = useParams();
  console.log("number " + id);

  const [members, setMembers] = useState([]);
  const [firstname, setFirstname] = useState([]);
  const [lastname, setLastname] = useState([]);
  // console.log(firstname, lastname);

  function fetchMembers() {
    return axios
      .get("/api/displayname/" + id)
      .then((response) => response.data);
  }

  useEffect(() => {
    fetchMembers().then((members) => setMembers(members));
  }, []);

  return (
    <div>
      <h4 className="title-text">Member Profile:</h4>
      {members.map((member, i) => {
        console.log(member);
        return (
          //
          <h4 key={member.id} className="title-text">
            {member.firstname} {member.lastname}
          </h4>
        );
      })}

      <Router>
        <Switch>
          <MemberSummaryList id={id} />
        </Switch>
      </Router>
      <p className="gen-text">Member number #{id}</p>
    </div>
  );
}
export default MemberSummary;
