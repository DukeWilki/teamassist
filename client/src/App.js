import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Menu from "./containers/Menu/Menu";
import CertSummary from "./containers/CertSummary/CertSummary";
import MemberSummary from "./containers/MemberSummary/MemberSummary";
import NewMember from "./containers/NewMember/NewMember";
import Confirmation from "./containers/NewMember/Confirmation/Confirmation";
import AddRecord from "./containers/AddRecord/AddRecord";
import UpdateRecord from "./containers/UpdateRecord/UpdateRecord";
import MemberSelection from "./containers/MemberSelection/MemberSelection";
import CertSelection from "./containers/CertSelection/CertSelection";
import EditMember from "./containers/EditMember/EditMember";
import FullTable from "./containers/FullTable/FullTable";
import Landing from "./containers/Landing/Landing";

function App() {
  return (
    <div className="App">
      <div className="container-section">
        <Router>
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/members" component={MemberSelection} />
            <Route path="/members/:id" component={MemberSummary} />
            <Route exact path="/certs" component={CertSelection} />
            <Route path="/certs/:id" component={CertSummary} />
            <Route path="/addrecord/:id" component={AddRecord} />
            <Route path="/updaterecord/:id" component={UpdateRecord} />
            <Route path="/newmember" component={NewMember} />
            <Route path="/editmember/:id" component={EditMember} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/fulltable" component={FullTable} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
