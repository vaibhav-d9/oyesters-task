import { Avatar } from "@material-ui/core";
import React from "react";

import "./MessageBox.scss";

function MessageBox({ avatar, content, number }) {
  return (
    <div className="messageBox">
      <div className="messageBox_header">
        <div className="header_user">
          <Avatar src={avatar} />

          <div className="user_info">
            <b>Luy Robin</b>
            <small>...writes</small>
          </div>
        </div>

        <div className="timestamp">
          <small>1 minute</small>
        </div>
      </div>

      <div className="messageBox_body">
        <div className="content">
          <p>{content}</p>
        </div>
        {number && (
          <div className="number">
            <p>{number}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessageBox;
