import React from "react";
import "./CertSummaryList.css";

function CertSummaryList() {
  return (
    <div >
      <ul>
        <h2>(selected cert)</h2>  
      </ul>

      <li>
        
        <button className="text-button">John Smith expires DD-MM-YYYY</button>
      </li>
      <li>
        <button className="text-button">Julie Smit expires DD-MM-YYYY</button>
      </li>
      <li>
        <button className="text-button">James Smyth expires DD-MM-YYYY</button>
      </li>
      <li>
        <button className="text-button">Jim Schmidt expires DD-MM-YYYY</button>
      </li>
      <li>
        <button className="text-button">Juliette Szmidt expires DD-MM-YYYY</button>
      </li>
      <li>
        <button className="text-button">Jasmine Smit expires DD-MM-YYYY</button>
      </li>
    </div>
  );
}

export default CertSummaryList;
