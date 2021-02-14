import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {
  // Render New Member form
  return (
    <div>
      <h2 className="title-text">
        Warmest welcome to the newest member of Maia Outrigger Canoe Club
      </h2>
      <h1 className="massive-text">💚</h1>
      <p>
        <Link to="/members/" className="title-text">
          Go to Member Lookup{" "}
        </Link>
      </p>
      <p>
        <Link to="/newmember/" className="title-text">
          Add another Member
        </Link>
      </p>
    </div>
  );
}

export default Confirmation;
