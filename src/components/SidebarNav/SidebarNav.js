import React from "react";

import "./SidebarNav.scss";

function SidebarNav({ Icon, text, active }) {
  return (
    <div className={active == true ? "sidebarNav active" : "sidebarNav"}>
      <span className="icon">{Icon}</span>
      <p>{text}</p>
    </div>
  );
}

export default SidebarNav;
