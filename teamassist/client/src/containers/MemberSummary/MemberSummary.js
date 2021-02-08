import React from "react";
import "./MemberSummary.css";
import MemberSummaryList from "./MemberSummaryList/MemberSummaryList";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Test from "./../Test/Test";


function MemberSummary() {
  const { id } = useParams();  
  const { firstname } = useParams();
  return (
    <div>    
      <h2>id: {id} </h2>
      <h2>name: {firstname}</h2>
      <Router>
        <Switch>
      <Route exact path="/test" component={Test} />
      <MemberSummaryList id={id} />
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
