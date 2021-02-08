import React from "react";
import "./MemberSummary.css";
import MemberSummaryList from "./MemberSummaryList/MemberSummaryList";
// import AddRecord from "./MemberSummaryList/AddRecord/AddRecord";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Test from "./../Test/Test";

function MemberSummary() {
  const { id } = useParams();  
  return (
    <div>    
      <h2>id on MemberSummary: {id} </h2>
      <Router>
        <Switch>
      <Route exact path="/test" component={Test} />
      <MemberSummaryList id={id} />
      {/* <AddRecord id={id} /> */}
      {/* <Route exact path="/addrecord" id={id} component={AddRecord} /> */}
      
      

      <button className="button is-primary">New Record</button>
      <button className="button is-primary">Edit Member</button>

      </Switch>
      </Router>
    </div>
  );
}
export default MemberSummary;
