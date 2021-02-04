import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function NewRecord() {
  // Render New Member form
  return (
    <div className="new-member-form">
      <Header />
      <h2>Add New Record</h2>  
      <h3>~membername~</h3>  

      <label className="label">Certificate</label>
      <div className="control">
        <div className="select">
          <select>
            <option>Club Fees</option>
            <option>AOCRA Fees</option>
            <option>YBSC Membership</option>
            <option>Code of Conduct</option>
            <option>First Aid Cert</option>
            <option>Working With Children Check</option>
            <option>Swim Test</option>
            <option>Huli Test</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label className="label">Expiry Date</label>
        <div className="control">
          <input
            className="input"
            type="date"
          ></input>
        </div>
      </div>

      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>

      <Footer />
    </div>
  );
}

export default NewRecord;
