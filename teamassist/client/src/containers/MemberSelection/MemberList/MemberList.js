import React, { useState, useEffect } from "react";
import "./MemberList.css";
import axios from 'axios';
import { Link } from "react-router-dom";

function MemberList() {


  const [members, setMembers] = useState([]);

  function fetchMembers(){
    return axios.get('/api/members')
      .then((response) => response.data)
  }

  useEffect(() => {
    fetchMembers()
      .then((members) => setMembers(members) );


  }, []);


  // Render member list
  return (
    <div className="menu-list">
      {members.map((member) => {
        return (
          <ul key={member.id} >
            <Link to={"/members/" + member.id}>{member.firstname} {member.lastname}</Link>
            </ul>
        )
      })}
    </div>
  );
}

export default MemberList;
