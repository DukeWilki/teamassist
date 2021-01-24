import React from "react";
import "./CertSummaryList.css";

function CertSummary() {
  return (
    <div>
      <ol>
        <h2>(selected cert)</h2>
      </ol>
      <li>
        <button className="text-button">John expires DD-MM-YYYY</button>
      </li>
      <li>
        <button className="text-button">Julie expires DD-MM-YYYY</button>
      </li>
      <li>
        <button className="text-button">James expires DD-MM-YYYY</button>
      </li>
      <li>
        <button className="text-button">Jim expires DD-MM-YYYY</button>
      </li>
      <li>
        <button className="text-button">Juliette expires DD-MM-YYYY</button>
      </li>
      <li>
        <button className="text-button">Jasmine expires DD-MM-YYYY</button>
      </li>
    </div>
  );
}

export default CertSummary;
