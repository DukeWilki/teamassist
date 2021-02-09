import React from "react";
import MemberSummaryList from "./MemberSummaryList/MemberSummaryList";
// import AddRecord from "./MemberSummaryList/AddRecord/AddRecord";
import { BrowserRouter as Router, Switch, useParams } from "react-router-dom";


function MemberSummary() {
  const { id } = useParams();  
  return (
    <div>    
      <h2>id on MemberSummary: {id} </h2>
      <Router>
        <Switch>
      <MemberSummaryList id={id} />
      <button className="button is-primary">New Record</button>
      <button className="button is-primary">Edit Member</button>

      </Switch>
      </Router>
    </div>
  );
}
export default MemberSummary;
