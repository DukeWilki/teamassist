import React from "react";
import "./CertSummary.css";
import CertSummaryList from "./CertSummaryList/CertSummaryList";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Test from "./../Test/Test";

function CertSummary() {
  const { id } = useParams();
  return (
    <div>
      <h2>id: {id}</h2>
      <Router>
        <Switch>
      <Route exact path="/test" component={Test} />
      <CertSummaryList id={id} />
      </Switch>
      </Router>
    </div>
  );
}
export default CertSummary;
