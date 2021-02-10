import React from "react";
import MemberList from "./MemberList/MemberList";


function MemberSelection() {
  return (
    <div>
      <h4 className="title-text">Select member from list</h4>
      <MemberList />
      {/* <ButtonNewMember /> */}
    </div>
  );
}
export default MemberSelection;
