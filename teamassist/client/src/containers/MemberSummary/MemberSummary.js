import React from "react";
import "./MemberSummary.css";
import MemberSummaryList from "./MemberSummaryList/MemberSummaryList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./../Test/Test";

function MemberSummary() {
  return (
    <div>
      <Router>
        <Switch>
      <Route exact path="/test" component={Test} />
      <MemberSummaryList />
      <div className="control">
        <p>Select a record to update it</p>
      <button className="button is-primary">New Record</button>
      <button className="button is-primary">Edit Member</button>
      </div>
      </Switch>
      </Router>
    </div>
  );
}
export default MemberSummary;
