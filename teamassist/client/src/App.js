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
import Confirmation from "./containers/NewMember/Confirmation/Confirmation";
import AddRecord from "./containers/AddRecord/AddRecord";
import UpdateRecord from "./containers/UpdateRecord/UpdateRecord";
import MemberSelection from "./containers/MemberSelection/MemberSelection";
import CertSelection from "./containers/CertSelection/CertSelection";
import EditMember from "./containers/EditMember/EditMember";
import PostForm from "./components/PostForm";


function App() {
  return (
    <div className="App">
      <div className="container-section">
      <Header />
      {/* <PostForm /> */}
        <Router>
        <Switch>
        <Route exact path="/" component={Menu} />                     {/* routing complete to all 4 options */}
        <Route exact path="/login" component={Login} />               {/*  */}
        <Route exact path="/members" component={MemberSelection} />   {/* routing complete member profile */}
        <Route path="/members/:param" component={MemberSummary} />    {/* routing complete to edit record | buttons to be completed*/}
        <Route exact path="/certs" component={CertSelection} />       {/* routing complete cert summary */}
        <Route path="/certs/:param" component={CertSummary} />        {/* routes to Test.js */}
        <Route path="/addrecord" component={AddRecord} />             {/* routing complete to edit record */}
        <Route path="/updaterecord/:id" component={UpdateRecord} />   {/* API READ to be done | Save/API UPDATE to be done */}
        <Route path="/newmember" component={NewMember} />             {/* Submit/API POST to be done */}
        <Route path="/editmember" component={EditMember} />           {/*  */}
        <Route path="/confirmation" component={Confirmation} />       {/* buttons to be completed */}
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
