import React, { useState, useEffect } from "react";
import "./MemberSummaryList.css";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import ButtonAddRecord from "./../../../components/ButtonAddRecord/ButtonAddRecord";
import ButtonEditMember from "./../../../components/ButtonEditMember/ButtonEditMember";

function MemberSummaryList(props) {
  const { id } = useParams();  
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

  // Render member profile list
  return (
    <div className="menu-list">
      <h2>Member Profile</h2>  
      <h2>props.id on SummaryList: {props.id} </h2>
      <h3>~membername~</h3>  

      {profiles.map((record, i) => {
        console.log(record);
        return (
          <p key={record.id} >
            <Link to={"/updaterecord/" + record.id}> {record.certname} {record.member_id} <br></br> Expiry: {parseDate(record.expiry)}</Link>
          </p>          
        )    
      })}
          <div className="control">
          <Link  to={`/addrecord/${props.id}`}>Add Record</Link>
    </div>
      {/* < ButtonAddRecord /> */}
      < ButtonEditMember />
    </div>
  );
}

export default MemberSummaryList;
