import React, { useState, useEffect } from "react";
import "./CertSummaryList.css";
import axios from 'axios';

function CertSummaryList() {


  const [records, setRecords] = useState([]);

  function fetchRecords(){
    return axios.get('/api/records')
      .then((response) => response.data)
  }

  useEffect(() => {
    fetchRecords()
      .then((records) => setRecords(records) );


  }, []);

  function parseDate(expiry) {
    const date = new Date(expiry)
    // date.format("dd MMMM YYYY");
    // return (date.getDate() + "/" + (date.getMonth() + 1).format(MMM) + "/" + date.getFullYear()) 
    return (date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear())
  };

  // Render cert list
  return (
    <div className="menu-list">
      <h2>Certificate Name</h2>  

      {records.map((record, i) => {
        console.log(record);
        return (
          <ul key={i} >
            <button className="text-button" > {record.firstname} {record.lastname} <br></br> {record.certname} <br></br> Expiry: {parseDate(record.expiry)}</button>
            {/* <button className="text-button" >{record.id} {record.member_id} - {record.cert_id} expires on {record.expiry}</button> */}

          </ul>
        )

      })}

    </div>
  );
}


// {
//   return (
       
//  <div >
//       <ul>
//         <h2>(selected cert)</h2>  
//       </ul>

//       <li>
//         <button className="text-button">John Smith expires DD-MM-YYYY</button>
//       </li>
//       <li>
//         <button className="text-button">Julie Smit expires DD-MM-YYYY</button>
//       </li>
//       <li>
//         <button className="text-button">James Smyth expires DD-MM-YYYY</button>
//       </li>
//       <li>
//         <button className="text-button">Jim Schmidt expires DD-MM-YYYY</button>
//       </li>
//       <li>
//         <button className="text-button">Juliette Szmidt expires DD-MM-YYYY</button>
//       </li>
//       <li>
//         <button className="text-button">Jasmine Smit expires DD-MM-YYYY</button>
//       </li>
//     </div>
//   );
// }

export default CertSummaryList;
