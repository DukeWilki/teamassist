import React, { useState, useEffect } from "react";
import "./MemberList.css";
import axios from 'axios';

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


  // Render Login form
  return (
    <div className="menu-list">


      {members.map((member) => {

        return (
          <ul>
            <button className="text-button">{member.firstname}</button>
          </ul>
        )

      })}

    </div>
  );
}

export default MemberList;
