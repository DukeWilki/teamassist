import React, { useState, useEffect } from "react";
import "./CertList.css";
import axios from 'axios';
import { Link } from "react-router-dom";

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


  // Render cert list
  return (
    <div className="menu-list">
      {certs.map((cert) => {
        return (
          <ul key={cert.id}>
            {/* <button className="text-button"> {cert.certname}</button> */}
            {/* <a href={"/certs/" + cert.certname}>{cert.certname}</a> */}
            <Link to={"/certs/" + cert.certname + cert.id}>{cert.certname}</Link>
          </ul>
        )
      })}
    </div>
  );
}

export default CertList;
