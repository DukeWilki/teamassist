import React, { useState, useEffect } from "react";
import "./CertList.css";
import axios from "axios";
import { Link } from "react-router-dom";

function CertList() {
  const [certs, setCerts] = useState([]);

  function fetchCerts() {
    return axios.get("/api/certs").then((response) => response.data);
  }

  useEffect(() => {
    fetchCerts().then((certs) => setCerts(certs));
  }, []);

  // Render cert list
  return (
    <div className="menu-list">
      {certs.map((cert) => {
        return (
          <p key={cert.id} certname={cert.certname}>
            <Link to={"/certs/" + cert.id }>{cert.certname}</Link>
          </p>
        );
      })}
    </div>
  );
}

export default CertList;
