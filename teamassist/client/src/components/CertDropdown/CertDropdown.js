import React, { useState, useEffect } from "react";
import axios from "axios";

function CertDropdown() {
  const [certs, setCerts] = useState([]);

  function fetchCerts() {
    return axios.get("/api/certs").then((response) => response.data);
  }

  useEffect(() => {
    fetchCerts().then((certs) => setCerts(certs));
  }, []);

  // Render cert list
  return (  
    <select
      className="input"
      // type="date"
      name="certname"
      value={certname}
      onChange={(e) => setCertname(e.target.value)}
    >
      {certs.map((cert) => {
        return <option key={cert.id}> {cert.certname} </option>;
      })}
    </select>
  );
}

export default CertDropdown;
