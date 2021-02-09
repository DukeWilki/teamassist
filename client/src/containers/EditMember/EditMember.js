import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function EditMember(props) {
  const { id } = useParams();
  console.log(id);

  const [members, setMembers] = useState([]);
  const [firstname, setFirstname] = useState([]);
  const [lastname, setLastname] = useState([]);
  const [email, setEmail] = useState([]);
  const [dob, setDob] = useState([]);
  const [gender, setGender] = useState([]);
  const [iscommittee, setIscommittee] = useState([]);
  const [iscoach, setIscoach] = useState([]);
  const [isactive, setIsactive] = useState([]);
  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(dob);
  console.log(gender);
  console.log(iscommittee);
  console.log(iscoach);
  console.log(isactive);

  function fetchMembers() {
    return axios
      .get("/api/updatemember/" + id)
      .then((response) => response.data);
  }

  useEffect(() => {
    fetchMembers().then((members) => setMembers(members));
  }, []);

  function parseDate(dob) {
    const date = new Date(dob);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }

  // function parseBoolean(props) {
  //   const isactive = new active(props);
  //   return (
  //     "Yes"
  //   );
  // }

  const [expiry, setExpiry] = useState([]);
  console.log(expiry);

  function submitFirstnameHandler(e) {
    console.log([]);
    axios
      .patch("/api/updatemember/firstname/" + id, {
        firstname: firstname,
        id: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function submitLastnameHandler(e) {
    console.log([]);
    axios
      .patch("/api/updatemember/lastname/" + id, {
        lastname: lastname,
        id: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function submitEmailHandler(e) {
    console.log([]);
    axios
      .patch("/api/updatemember/email/" + id, {
        email: email,
        id: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function submitDobHandler(e) {
    console.log([]);
    axios
      .patch("/api/updatemember/dob/" + id, {
        dob: dob,
        id: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function submitGenderHandler(e) {
    console.log([]);
    axios
      .patch("/api/updatemember/gender/" + id, {
        gender: gender,
        id: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function submitIscommitteeHandler(e) {
    console.log([]);
    axios
      .patch("/api/updatemember/iscommittee/" + id, {
        iscommittee: iscommittee,
        id: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function submitIscoachHandler(e) {
    console.log([]);
    axios
      .patch("/api/updatemember/iscoach/" + id, {
        iscoach: iscoach,
        id: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function submitIsactiveHandler(e) {
    console.log([]);
    axios
      .patch("/api/updatemember/isactive/" + id, {
        isactive: isactive,
        id: id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Render member
  console.log({ id });
  return (
    <div>
      <h2>Member number #{id}</h2>

      {members.map((member, i) => {
        console.log(member);
        return (
          <p key={member.id}>
            <h4 className="gen-text">
              {member.firstname} {member.lastname}
            </h4>
            <p className="gen-text">
            {member.email} </p>
            <p className="gen-text"> {parseDate(member.dob)} {member.gender} 
            </p>
            <p className="gen-text">
              Committee member: {member.iscommittee} </p>
            <p className="gen-text">Coach: {member.iscoach}
            </p>
            <p className="gen-text">Member active: {member.isactive}</p>

            <form onSubmit={submitFirstnameHandler}>
              <div className="control">
                <input
                  className="input input-box"
                  type="text"
                  name="firstname"
                  value={firstname}
                  placeholder={member.firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                ></input>
                <button
                  type="submit"
                  className="button is-primary button-text"
                  disabled={firstname.length < 1}
                >
                  Update
                </button>
              </div>
            </form>

            <form onSubmit={submitLastnameHandler}>
              <div className="control">
                <input
                  className="input input-box"
                  type="text"
                  name="lastname"
                  value={lastname}
                  placeholder={member.lastname}
                  onChange={(e) => setLastname(e.target.value)}
                ></input>
                <button
                  type="submit"
                  className="button is-primary button-text"
                  disabled={lastname.length < 1}
                >
                  Update
                </button>
              </div>
            </form>

            <form onSubmit={submitEmailHandler}>
              <div className="control">
                <input
                  className="input input-box"
                  type="email"
                  name="email"
                  value={email}
                  placeholder={member.email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <button
                  type="submit"
                  className="button is-primary button-text"
                  disabled={email.length < 1}
                >
                  Update
                </button>
              </div>
            </form>

            <form onSubmit={submitDobHandler}>
              <div className="field">
                {/* <label className="label">Current DOB: {member.dob}</label> */}
                <div className="control">
                  <input
                    className="input input-box"
                    type="date"
                    name="dob"
                    value={dob}
                    data-start-date={member.dob}
                    onChange={(e) => setDob(e.target.value)}
                  ></input>
                  <button
                    type="submit"
                    className="button is-primary button-text button-text"
                    disabled={dob.length < 1}
                  >
                    Update
                  </button>
                  {console.log(dob)}
                  {console.log(member.dob)}
                </div>
              </div>
            </form>

            <form onSubmit={submitGenderHandler}>
              <div className="control">
                <div className="select">
                  <select
                    className="input input-box"
                    // type="date"
                    name="gender"
                    value={gender}
                    selection={member.gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option selected hidden>
                      {member.gender}
                    </option>
                    <option>Unknown</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                  <button
                    type="submit"
                    className="button is-primary button-text"
                    disabled={gender.length < 1}
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>

            <form onSubmit={submitIscommitteeHandler}>
              <label className="checkbox">
                <input
                  className="input"
                  type="checkbox"
                  name="iscommittee"
                  value={iscommittee}
                  defaultChecked={member.iscommittee}
                  onChange={(e) => setIscommittee(e.target.checked)}
                ></input>
                Committee
              </label>
              <button
                type="submit"
                className="button is-primary button-text"
                disabled={iscommittee.length < 1}
              >
                Update
              </button>
            </form>
            {/* <br></br> */}
            <form onSubmit={submitIscoachHandler}>
              <label className="checkbox">
                <input
                  className="input"
                  type="checkbox"
                  name="iscoach"
                  value={iscoach}
                  defaultChecked={member.iscoach}
                  onChange={(e) => setIscoach(e.target.checked)}
                ></input>
                Coach
              </label>
              <button
                type="submit"
                className="button is-primary button-text"
                disabled={iscoach.length < 1}
              >
                Update
              </button>
            </form>
            {/* <br></br> */}
            <form onSubmit={submitIsactiveHandler}>
              <label className="checkbox">
                <input
                  className="input"
                  type="checkbox"
                  name="isactive"
                  value={isactive}
                  defaultChecked={member.isactive}
                  onChange={(e) => setIsactive(e.target.checked)}
                ></input>
                Active
              </label>
              <button
                type="submit"
                className="button is-primary button-text"
                disabled={isactive.length < 1}
              >
                Update
              </button>
            </form>
            <Link to="/members/">Back to Member Lookup</Link>
           </p>
        );
        
      })}
    </div>
  );
}

export default EditMember;
