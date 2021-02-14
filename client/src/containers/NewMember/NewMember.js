import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function NewMember() {
  const [firstname, setFirstname] = useState([]);
  const [lastname, setLastname] = useState([]);
  const [email, setEmail] = useState([]);
  const [dob, setDob] = useState([]);
  const [gender, setGender] = useState([]);
  const [iscommittee, setIscommittee] = useState([]);
  const [iscoach, setIscoach] = useState([]);

  // console.log(firstname, lastname, email, dob, gender, iscommittee, iscoach);

  // function confirmHandler() {
  //   var link = `/#/confimation`;
  //   window.location.href = link;
  // }

  function submitHandler(e) {
    e.preventDefault();
    console.log([]);
    axios
      .post("/api/new", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        dob: dob,
        gender: gender,
        iscommittee: iscommittee,
        iscoach: iscoach,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      // confirmHandler()
  }



  // Render New Member form
  return (
    <div className="new-member-form gen-text">
      <form onSubmit={submitHandler}>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input input-box gen-text"
              type="text"
              name="firstname"
              value={firstname}
              placeholder="First name"
              onChange={(e) => setFirstname(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input input-box gen-text"
              type="text"
              name="lastname"
              value={lastname}
              placeholder="Last name"
              onChange={(e) => setLastname(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input input-box gen-text"
              type="email"
              name="email"
              value={email}
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Date of Birth</label>
          <div className="control">
            <input
              className="input input-box gen-text"
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            ></input>
          </div>
        </div>

        <label className="label">Gender</label>
        <div className="control">
          <div className="select">
            <select
              className="input input-box gen-text"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" selected disabled>
                Please select
              </option>
              <option>Unknown</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <label className="checkbox">
          <input
            className="input"
            type="checkbox"
            name="iscommittee"
            value={iscommittee}
            onChange={(e) => setIscommittee(e.target.checked)}
          ></input>
          Committee
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            name="iscoach"
            value={iscoach}
            onChange={(e) => setIscoach(e.target.checked)}
          ></input>
          Coach
        </label>

        <div className="control">
            <button type="submit" className="button is-primary button-text">
              Submit
            </button>
        </div>
      </form>
    </div>
  );
}

export default NewMember;
