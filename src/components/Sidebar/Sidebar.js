import { Avatar } from "@material-ui/core";
import React from "react";

import "./Sidebar.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SidebarNav from "../SidebarNav/SidebarNav";
import HomeIcon from "@material-ui/icons/Home";
import SmsRoundedIcon from "@material-ui/icons/SmsRounded";
import PermIdentityRoundedIcon from "@material-ui/icons/PermIdentityRounded";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="user_info">
        <Avatar
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          className="avatar"
        />

        <div className="user_name">
          <b>Henry Jabbawockiez</b>
          <KeyboardArrowDownIcon />
        </div>
      </div>

      <div className="sidebar_nav">
        <SidebarNav text="HOME" Icon={<HomeIcon />} />
        <SidebarNav text="CHAT" Icon={<SmsRoundedIcon />} active={true} />
        <SidebarNav text="CONTACT" Icon={<PermIdentityRoundedIcon />} />
        <SidebarNav
          text="NOTIFICATIONS"
          Icon={<NotificationsNoneRoundedIcon />}
        />
        <SidebarNav text="CALENDAR" Icon={<DateRangeRoundedIcon />} />
        <SidebarNav text="SETTINGS" Icon={<SettingsRoundedIcon />} />
      </div>

      <div className="sidebar_bottom">
        <SidebarNav text="LOGOUT" Icon={<PowerSettingsNewRoundedIcon />} />
      </div>
    </div>
  );
}

export default Sidebar;
