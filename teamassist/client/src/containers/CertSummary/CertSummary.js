import React from "react";
import "./CertSummary.css";
import CertSummaryList from "./CertSummaryList/CertSummaryList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./../Test/Test";

function CertSummary() {
  return (
    <div>
      <Router>
        <Switch>
      <Route exact path="/test" component={Test} />
      <CertSummaryList />
      </Switch>
      </Router>
    </div>
  );
}
export default CertSummary;
