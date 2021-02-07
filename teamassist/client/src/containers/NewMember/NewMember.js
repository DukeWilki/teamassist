import React, { useState, useEffect} from "react";
import axios from "axios";



function NewMember() {
  const [firstname, setFirstname] = useState([]);
  // const [lastname, setLastname] = useState([]);
  // const [email, setEmail] = useState([]);
  // const [dob, setDob] = useState([]);
  // const [gender, setGender] = useState([]);
  // const [iscommittee, setIscommittee] = useState([]);
  // const [iscoach, setIscoach] = useState([]);

  // const [firstname, setFirstname] = "";
  const [lastname, setLastname] = "";
  const [email, setEmail] = "";
  const [dob, setDob] = "";
  const [gender, setGender] = "";
  const [iscommittee, setIscommittee] = "";
  const [iscoach, setIscoach] = "";

      function changeHandler (e) {
        // console.log(this.state);
        console.log(firstname);
          // this.setState({[value]: value})
      }


      //     function submitHandler (e) {
//         e.preventDefault()
//         console.log(this.state);
//         axios.post('/api/new', this.state)
//             .then(response => {
//                 console.log(response);
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }

  // Render New Member form
  return (
    <div className="new-member-form">
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
            onChange="{this.changeHandler}"
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
          ></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Date of Birth</label>
        <div className="control">
          <input className="input" type="date" name="dob" value={dob}></input>
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
        <input type="checkbox" name="iscommittee" value={iscommittee}></input>
        Committee
      </label>

      <label className="checkbox">
        <input type="checkbox" name="iscoach" value={iscoach}></input>
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
