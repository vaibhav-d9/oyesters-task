import { Avatar } from "@material-ui/core";
import React from "react";

import "./MessageBox.scss";
import MicNoneIcon from "@material-ui/icons/MicNone";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";

function MessageBox({
  avatar,
  content,
  number,
  timestamp,
  activity,
  voice,
  files,
  fileCount,
  photo,
  active,
  userName,
}) {
  return (
    <div className={active ? "messageBox messageBoxInvert" : "messageBox"}>
      <div className="messageBox_header">
        <div className="header_user">
          <Avatar src={avatar} />

          <div className="user_info">
            <b>{userName}</b>

            <div className="activity">
              {voice && <MicNoneIcon />}
              <small>{activity}</small>
            </div>
          </div>
        </div>

        <div className="timestamp">
          <small>{timestamp}</small>
        </div>
      </div>

      {voice && (
        <div className="voiceMessage">
          <MicNoneIcon />
          <small>Voice message (01:15)</small>
        </div>
      )}

      <div className="messageBox_body">
        {content && (
          <div className="content">
            <p>{content}</p>
          </div>
        )}

        {files && (
          <div className="message_files">
            <div className="files">
              <InsertDriveFileOutlinedIcon />
              <p>Files ({fileCount})</p>
            </div>

            {photo && (
              <div className="photo">
                <PhotoOutlinedIcon />
                <p>Photo</p>
              </div>
            )}
          </div>
        )}
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
