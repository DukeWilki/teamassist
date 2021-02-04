import React from "react";
import {useHistory} from 'react-router-dom';



// nextPath(path) {
//   this.props.history.push(path);
// }

function ButtonAddRecord() {
  // Render Login form
  return (
    <div className="control">
      {/* <button className="button is-primary" onClick={() => this.nextPath('/addrecord') }>Add Record</button> */}
      {/* <Link to={"/updaterecord/" + record.id}> {record.firstname} {record.lastname} <br></br> {record.certname} <br></br> Expiry: {parseDate(record.expiry)}</Link> */}
    </div>
  );
}

export default withRouter(ButtonAddRecord);
