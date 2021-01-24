import React from "react";
import Header from "../../components/Header/Header";
import CertList from "../../components/CertList/CertList";
import Footer from "../../components/Footer/Footer";

function EditCert() {
  return (
    <div>
      <Header />
      <h2>(FNAME LNAME)</h2>
      <h2>(selected cert)</h2>
      <p>(Date selection)</p>
      <p>Auth: (current user)</p>
      <button> SAVE </button>
      <Footer />
    </div>
  );
}

export default EditCert;
