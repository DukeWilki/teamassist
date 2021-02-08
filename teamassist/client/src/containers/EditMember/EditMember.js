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
console.log(gender);
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



  const [expiry, setExpiry] = useState([]);
  console.log(expiry);

  // function submitHandler(e) {
  //   // e.preventDefault();
  //   console.log([]);
  //   axios
  //     .patch("/api/updatemember/" + id, {
  //       expiry: expiry,
  //       id: id,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // Render member
  console.log({ id });
  return (
    <div>
      <h2>Member number #{id}</h2>

      {members.map((member, i) => {
        console.log(member);
        return (
          <p key={member.id}>
            <h4>
              {member.firstname} {member.lastname}
            </h4>
            
            <div className="control">
            <input
              className="input"
              type="text"
              name="firstname"
              value={firstname}
              placeholder={member.firstname}
              onChange={(e) => setFirstname(e.target.value)}
            ></input>
          </div>

          <div className="control">
            <input
              className="input"
              type="text"
              name="lastname"
              value={lastname}
              placeholder={member.lastname}
              onChange={(e) => setLastname(e.target.value)}
            ></input>
          </div>

          <div className="control">
            <input
              className="input"
              type="text"
              name="email"
              value={email}
              placeholder={member.email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="field">
          <label className="label">Current DOB: {member.dob}</label>
          <div className="control">
            <input
              className="input"
              type="date"
              name="dob"
              value={dob}
              placeholder={member.dob}
              onChange={(e) => setDob(e.target.value)}
            ></input>
          </div>
        </div>

        <label className="label">Current Gender: {member.gender}</label>
        <div className="control">
          <div className="select">
            <select
              className="input"
              // type="date"
              name="gender"
              value={gender}
              selection={member.gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option selected hidden>{member.gender}</option>
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
            checked={member.iscommittee}
            onChange={(e) => setIscommittee(e.target.checked)}
          ></input>
          Committee {member.iscommittee}
        </label>

        <label className="checkbox">
          <input
            className="input"
            type="checkbox"
            name="iscoach"
            value={iscoach}
            checked={member.iscoach}
            onChange={(e) => setIscoach(e.target.checked)}
          ></input>
          Coach {member.iscoach}
        </label>

        <label className="checkbox">
          <input
            className="input"
            type="checkbox"
            name="isactive"
            value={isactive}
            checked={member.isactive}
            onChange={(e) => setIsactive(e.target.checked)}
          ></input>
          Active {member.isactive}
        </label>

          </p>
        );
      })}


      {/* {members.map((member, i) => {
        console.log(member);
        return <Link to="/members/">Back to Member Lookup</Link>;
      })} */}
    </div>
  );
}

export default EditMember;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, Link } from "react-router-dom";

// function EditMember(props) {
//   const { id } = useParams();
//   console.log(id);

//   const [firstname, setFirstname] = useState([]);
//   const [lastname, setLastname] = useState([]);
//   const [email, setEmail] = useState([]);
//   const [dob, setDob] = useState([]);
//   const [gender, setGender] = useState([]);
//   const [iscommittee, setIscommittee] = useState([]);
//   const [iscoach, setIscoach] = useState([]);
//   const [isactive, setIsactive] = useState([]);

//   console.log(firstname);
//   console.log(lastname);
//   console.log(email);
//   console.log(dob);
//   console.log(gender);
//   console.log(iscommittee);
//   console.log(iscoach);
//   console.log(isactive);

//   const [members, setMembers] = useState([]);

//   function fetchMembers() {
//     return axios
//       .get("/api/updatemember/" + id)
//       .then((response) => response.data);
//   }

//   useEffect(() => {
//     fetchMembers().then((members) => setMembers(members));
//   }, []);

//   function parseDate(expiry) {
//     const date = new Date(expiry);
//     return (
//       date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
//     );
//   }

//   // Render member
//   console.log({ id });
//   return (
//     <div>
//       <h2>Member number #{id}</h2>
//       {members.map((member, i) => {
//         console.log(member);
//         return (
//           <p key={member.id}>
//             <h4>
//               {member.firstname} {member.lastname}
//             </h4>
//             <h4> {member.certname} </h4>
//             <h4> Current Expiry: {parseDate(member.expiry)}</h4>
//           </p>
//         );
//       })}
//     </div>
//   );
// }

// export default EditMember;
