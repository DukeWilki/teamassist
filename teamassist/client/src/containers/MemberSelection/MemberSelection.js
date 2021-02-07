import React from "react";
import MemberList from "./MemberList/MemberList";
import ButtonNewMember from "../../components/ButtonAddRecord copy/ButtonNewMember";

function MemberSelection() {
  return (
    <div>
      <MemberList />
      <ButtonNewMember />      
    </div>
  );
}
export default MemberSelection;
