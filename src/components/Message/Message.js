import { Avatar } from "@material-ui/core";
import React from "react";

import "./Message.scss";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import DoneIcon from "@material-ui/icons/Done";

function Message({
  avatar,
  me,
  messages,
  attachment,
  attachmentName,
  attachmentSize,
  read,
  notRead,
  days,
}) {
  return (
    <div className={me ? "myMessage" : "message"}>
      {avatar && <Avatar src={avatar} className="avatar" />}

      <div className="message_right">
        {messages?.map((message) => (
          <div className="message_text">
            {me && read && <DoneAllIcon className="read_icon" />}
            {me && notRead && <DoneIcon className="read_icon" />}

            <p className="text">
              {message}
              {attachment && (
                <InsertDriveFileOutlinedIcon className="fileIcon" />
              )}
              {attachment && (
                <div className="attachment_info">
                  <p>{attachmentName}</p>
                  <p className="attachmentSize">{attachmentSize}</p>
                </div>
              )}
            </p>
            <MoreHorizIcon />
          </div>
        ))}

        <small className="timestamp">{days} days ago</small>
      </div>
    </div>
  );
}

export default Message;
