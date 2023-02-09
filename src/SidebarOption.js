import React from "react";
import "./Sidebar.css";

function SidebarOption({text}) {

  return (
    <div className="sidebarOption">
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;