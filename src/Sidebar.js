import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";


function Sidebar() {

  return (
    <div className="sidebar">
      <SidebarOption text="Twitter" />
      <SidebarOption text="Home" />
      <SidebarOption text="Explore" />
      <SidebarOption text="Notifications" />
      <SidebarOption text="Messages" />
      <SidebarOption text="Bookmarks" />
      <SidebarOption text="Lists"/>
      <SidebarOption text="Profile"/>
      <SidebarOption text="More" />

      <button className="sidebar__tweet">
        Tweet
      </button>
    </div>
  );
}

export default Sidebar;