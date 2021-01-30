import React, { useState, useEffect } from "react";
import "./CertList.css";
import axios from 'axios';

function CertList() {


  const [certs, setCerts] = useState([]);

  function fetchCerts(){
    return axios.get('/api/certs')
      .then((response) => response.data)
  }

  useEffect(() => {
    fetchCerts()
      .then((certs) => setCerts(certs) );


  }, []);


  // Render Login form
  return (
    <div className="menu-list">


      {certs.map((cert) => {

        return (
          <ul>
            <button className="text-button">{cert.certname}</button>
          </ul>
        )

      })}
{/* 
      <ul>
        <button className="text-button">Membedr Fees</button>
      </ul>
      <ul>
        <button className="text-button">AOCRA Membrship</button>
      </ul>
      <ul>
        <button className="text-button">YBSC Membership</button>
      </ul>
      <ul>
        <button className="text-button">Huli Test</button>
      </ul>
      <ul>
        <button className="text-button">Swim Test</button>
      </ul>
      <ul>
        <button className="text-button">Working With Children Check</button>
      </ul>
      <ul>
        <button className="text-button">First Aid Certificate</button>
      </ul> */}
    </div>
  );
}

export default CertList;
