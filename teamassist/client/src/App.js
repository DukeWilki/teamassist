import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Members from "./containers/MemberSelection/MemberSelection";
import Certs from "./containers/CertSelection/CertSelection";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./containers/Login/Login";
import Menu from "./containers/Menu/Menu";
import CertSelection from "./containers/CertSelection/CertSelection";
import CertSummary from "./containers/CertSummary/CertSummary";
import MemberSelection from "./containers/MemberSelection/MemberSelection";
import NewMember from "./containers/NewMember/NewMember";
import EditMember from "./containers/EditMember/EditMember";
// import MemberSummary from "./containers/MemberSummary/MemberSummary";
import EditCert from "./containers/EditCert/EditCert";

function App() {
  return (
    <div className="App">
      <div className="container-section">
        <Header />
        <Router>
        <Login />
        <Footer />
        <Switch>
          <Route path="/" component={Menu} />
          <Route component={Error} /> 
        </Switch>
      </Router>

        <Footer />
      </div>



      {/* <CertSelection /> */}
      <CertSummary />
      <NewMember />
      {/* <MemberSelection /> */}
      {/* <MemberSummary /> */}
      {/* <EditCert /> */}
      {/* <NewMember /> */}
    </div>
  );
}

export default App;
