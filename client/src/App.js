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
// import AddRecord from "./containers/MemberSummary/MemberSummaryList/AddRecord/AddRecord";
import UpdateRecord from "./containers/UpdateRecord/UpdateRecord";
import MemberSelection from "./containers/MemberSelection/MemberSelection";
import CertSelection from "./containers/CertSelection/CertSelection";
import EditMember from "./containers/EditMember/EditMember";
import FullTable from "./containers/FullTable/FullTable";
import ChangePassword from "./containers/ChangePassword/ChangePassword";
import Landing from "./containers/Landing/Landing";
// import PostForm from "./components/PostForm";


function App() {
  return (
    <div className="App">
      <div className="container-section">
      <Router>
      <Navbar />
      <Header />
      {/* <PostForm /> */}

        <Switch>
        <Route exact path="/" component={Menu} />                     {/* routing complete to all 4 options */}
        <Route exact path="/landing" component={Landing} />               {/*  */}
        <Route exact path="/login" component={Login} />               {/*  */}
        <Route exact path="/register" component={Register} />               
        <Route exact path="/members" component={MemberSelection} />   {/* routing complete member profile */}
        <Route path="/members/:id" component={MemberSummary} />    {/* routing complete to edit record | buttons to be completed*/}
        <Route exact path="/certs" component={CertSelection} />       {/* routing complete cert summary */}
        <Route path="/certs/:id" component={CertSummary} />        {/* routes to Test.js */}
        <Route path="/addrecord/:id" component={AddRecord} />             {/* routing complete to edit record */}
        <Route path="/updaterecord/:id" component={UpdateRecord} />   {/* API READ to be done | Save/API UPDATE to be done */}
        <Route path="/newmember" component={NewMember} />             {/* Submit/API POST to be done */}
        <Route path="/editmember/:id" component={EditMember} />           {/*  */}
        <Route path="/confirmation" component={Confirmation} />       {/* buttons to be completed */}
        <Route path="/fulltable" component={FullTable} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route component={Error} /> 
        </Switch>

        <Footer />
        </Router>
      </div>
      {/* <CertSummary /> */}
      {/* <NewMember /> */} 
    </div>
  );
}

export default App;
