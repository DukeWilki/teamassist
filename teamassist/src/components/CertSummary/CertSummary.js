import React from "react";
import "./CertSummary.css";
import Header from "../Header/Header";
import CertList from "../CertList/CertList";
import Footer from "../Footer/Footer";

function CertSummary() {
  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default CertSummary;
