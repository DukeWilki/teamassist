import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./containers/Login/Login";
import Menu from "./containers/Menu/Menu";
import CertSummary from "./containers/CertSummary/CertSummary";
import MemberSummary from "./containers/MemberSummary/MemberSummary";
import NewMember from "./containers/NewMember/NewMember";
import AddRecord from "./containers/AddRecord/AddRecord";
import UpdateRecord from "./containers/UpdateRecord/UpdateRecord";
import MemberSelection from "./containers/MemberSelection/MemberSelection";
import CertSelection from "./containers/CertSelection/CertSelection";
import EditMember from "./containers/EditMember/EditMember";


function App() {
  return (
    <div className="App">
      <div className="container-section">
        <Header />
        <Router>
        <Switch>
        <Route exact path="/" component={Menu} />                     {/* routing complete */}
        <Route exact path="/login" component={Login} />               {/*  */}
        <Route exact path="/members" component={MemberSelection} />   {/* botton needed */}
        <Route path="/members/:param" component={MemberSummary} />    {/* routes to Test.js */}
        <Route exact path="/certs" component={CertSelection} />       {/* botton needed */}
        <Route path="/certs/:param" component={CertSummary} />        {/* routes to Test.js */}
        <Route path="/addrecord" component={AddRecord} />             {/*  */}
        <Route path="/updaterecord/:id" component={UpdateRecord} />       {/*  */}
        <Route path="/new" component={NewMember} />                   {/*  */}
        <Route path="/edit" component={EditMember} />                 {/*  */}
        <Route component={Error} /> 
        </Switch>
      </Router>
        <Footer />
      </div>
      {/* <CertSummary /> */}
      {/* <NewMember /> */} 
    </div>
  );
}

export default App;
