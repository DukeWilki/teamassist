import React from "react";
import CertSummaryList from "./CertSummaryList/CertSummaryList";
import { BrowserRouter as Router, Switch, useParams } from "react-router-dom";


function CertSummary() {
  const { id } = useParams();
  return (
    <div>
      <h2>id: {id}</h2>
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
