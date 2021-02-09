import React, { useState } from "react";
import axios from "axios";


function NewMember() {
  const [firstname, setFirstname] = useState([]);
  const [lastname, setLastname] = useState([]);
  const [email, setEmail] = useState([]);
  const [dob, setDob] = useState([]);
  const [gender, setGender] = useState([]);
  const [iscommittee, setIscommittee] = useState([]);
  const [iscoach, setIscoach] = useState([]);

  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(dob);
  console.log(gender);
  console.log(iscommittee);
  console.log(iscoach);

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
  }

  // Render New Member form
  return (
    <div className="new-member-form">
      <form onSubmit={submitHandler}>
        {/* <Header /> */}
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="firstname"
              value={firstname}
              placeholder="First name"
              // onChange={changeHandler}
              onChange={(e) => setFirstname(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
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
              className="input"
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
              className="input"
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
              className="input"
              // type="date"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
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
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>

        {/* <Footer /> */}
      </form>
    </div>
  );
}

export default NewMember;
