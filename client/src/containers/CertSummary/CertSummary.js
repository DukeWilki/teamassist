import React, { useState, useEffect } from "react";
import CertSummaryList from "./CertSummaryList/CertSummaryList";
import { BrowserRouter as Router, Switch, useParams } from "react-router-dom";
import axios from "axios";

function CertSummary() {
  const { id } = useParams();

  const [certs, setMembers] = useState([]);


  function fetchMembers() {
    return axios
      .get("/api/displaycert/" + id)
      .then((response) => response.data);
  }

  useEffect(() => {
    fetchMembers().then((members) => setMembers(members));
  }, []);

  return (
    <div>
      <h4 className="title-text">Certification Check:</h4>
      {certs.map((cert, i) => {
        return (
          //
          <h4 key={cert.id} className="title-text">
            {cert.certname}
          </h4>
        );
      })}

      <Router>
        <Switch>
          <CertSummaryList id={id} />
        </Switch>
      </Router>
      <p className="gen-text">Cert number #{id}</p>
    </div>
  );
}
export default CertSummary;
