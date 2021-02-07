import React, { useState, useEffect } from "react";
import "./MemberSummaryList.css";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import ButtonAddRecord from "./../../../components/ButtonAddRecord/ButtonAddRecord";
import ButtonEditMember from "./../../../components/ButtonEditMember/ButtonEditMember";

function MemberSummaryList(props) {
  const params = useParams();
  console.log(props.id);

  const [profiles, setRecords] = useState([]);

  function fetchRecords(){
    return axios.get('/api/members/' + props.id )
      .then((response) => response.data)
  }

  useEffect(() => {
    fetchRecords()
      .then((profiles) => setRecords(profiles) );
  }, []);

  function parseDate(expiry) {
    const date = new Date(expiry)
    return (date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear())
  };

  // Render cert list
  return (
    <div className="menu-list">
      <h2>Member Profile</h2>  
      <h3>~membername~</h3>  

      {profiles.map((record, i) => {
        console.log(record);
        return (
          <p key={record.id} >
            <Link to={"/updaterecord/" + record.id}> {record.certname} <br></br> Expiry: {parseDate(record.expiry)}</Link>
          </p>          
        )    

      })}
      < ButtonAddRecord />< ButtonEditMember />
    </div>
  );
}

export default MemberSummaryList;
