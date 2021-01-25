import React from "react";
import "./MenuItems.css";

function MenuItems() {
  // Render Login form
  return (
    <div className="menu-list">
      <ul>
        <button className="text-button">Member Lookup</button>
      </ul>
      <ul>
        <button className="text-button">Cert Checker</button>
      </ul>
      <ul>
        <button className="text-button">New Member</button>
      </ul>
      <ul>
        <button className="text-button">Edit Permissions</button>
      </ul>
    </div>
  );
}

export default MenuItems;
