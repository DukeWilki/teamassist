import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function UpdateRecord() {
  const { id } = useParams();
  return (
    <div>
    <h2>{id}</h2>
      <h2>(FNAME LNAME)</h2>
      <h2>(selected cert)</h2>
      <p>(Date selection)</p>
      <p>Auth: (current user)</p>
      <button> SAVE </button>
    </div>
  );
}

export default UpdateRecord;
