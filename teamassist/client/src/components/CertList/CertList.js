import React from "react";
import "./CertList.css";

function CertList() {
  // Render Login form
  return (
    <div className="menu-list">
      <ul>
        <button className="text-button">Member Fees</button>
      </ul>
      <ul>
        <button className="text-button">AOCRA Membrship</button>
      </ul>
      <ul>
        <button className="text-button">YBSC Membership</button>
      </ul>
      <ul>
        <button className="text-button">Huli Test</button>
      </ul>
      <ul>
        <button className="text-button">Swim Test</button>
      </ul>
      <ul>
        <button className="text-button">Working With Children Check</button>
      </ul>
      <ul>
        <button className="text-button">First Aid Certificate</button>
      </ul>
    </div>
  );
}

export default CertList;
