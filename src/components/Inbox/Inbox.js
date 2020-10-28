import { Avatar } from "@material-ui/core";
import React from "react";

import "./Inbox.scss";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Message from "../Message/Message";

import InboxInput from "../InboxInput/InboxInput";

function Inbox() {
  return (
    <div className="inbox">
      <div className="inbox_top">
        <div className="inboxTop_left">
          <Avatar src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />

          <div className="inboxTop_user">
            <b>Nika Jerrardo</b>
            <small>last online 5 hours ago</small>
          </div>
        </div>

        <div className="inboxTop_right">
          <div className="icon">
            <AttachFileIcon />
          </div>

          <div className="icon">
            <MoreVertIcon />
          </div>
        </div>
      </div>

      <div className="inbox_chat">
        <Message
          avatar={
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          messages={[
            "Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.",
            "Can i send you files?",
          ]}
          days="4"
        />

        <Message
          messages={["Hey! Okay, send out."]}
          me={true}
          read={true}
          days="4"
        />
        <Message
          attachment={true}
          avatar={
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          attachmentName={"Style.zip"}
          attachmentSize={"41.36 Mb"}
          messages={[""]}
          days="4"
        />

        <p className="seperator">3 days ago</p>

        <Message
          messages={[
            "Hello! I tweaked everything you asked. I am sending the finished file.",
          ]}
          me={true}
          notRead={true}
          days="3"
        />
      </div>

      <div className="inbox_input">
        <InboxInput />
      </div>
    </div>
  );
}

export default Inbox;
