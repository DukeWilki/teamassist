import React from "react";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";

function NewMember() {
  // Render New Member form
  return (
    <div className="new-member-form">
      {/* <Header /> */}
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="First name"></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Last name"></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Email address"
          ></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Date of Birth</label>
        <div className="control">
          <input
            className="input"
            type="date"
          ></input>
        </div>
      </div>

      <label className="label">Gender</label>
      <div className="control">
        <div className="select">
          <select>
            <option>Unknown</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <label className="checkbox">
        <input type="checkbox"></input>
        Committee
      </label>

      <label className="checkbox">
        <input type="checkbox"></input>
        Coach
      </label>

      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default NewMember;
