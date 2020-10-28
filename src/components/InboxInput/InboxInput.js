import React from "react";

import "./InboxInput.scss";
import AddIcon from "@material-ui/icons/Add";
import MoodOutlinedIcon from "@material-ui/icons/MoodOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

function InboxInput() {
  return (
    <div className="inboxInput">
      <div className="inboxInput_left">
        <div className="inboxInput_icon">
          <AddIcon />
        </div>

        <input placeholder="Type a message here"></input>
      </div>

      <div className="inboxInput_right">
        <MoodOutlinedIcon style={{ marginRight: "10px", color: "#707c97" }} />
        <div className="inboxInput_icon">
          <SendOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default InboxInput;
