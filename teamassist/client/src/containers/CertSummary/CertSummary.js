import React from "react";
import "./CertSummary.css";
import Header from "../../components/Header/Header";
import CertSummaryList from "./CertSummaryList/CertSummaryList";
import Footer from "../../components/Footer/Footer";

function CertSummary() {
  return (
    <div>
      <Header />
      <CertSummaryList />
      <Footer />
    </div>
  );
}
export default CertSummary;
