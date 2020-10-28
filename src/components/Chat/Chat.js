import React from "react";
import Chats from "../Chats/Chats";
import Inbox from "../Inbox/Inbox";

import "./Chat.scss";

function Chat() {
  return (
    <div className="chat">
      <Chats />
      <Inbox />
    </div>
  );
}

export default Chat;
