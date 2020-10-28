import React from "react";

import "./Chats.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import ChatsSearch from "../ChatsSearch/ChatsSearch";
import MessageBox from "../MessageBox/MessageBox";

function Chats() {
  return (
    <div className="chats">
      <div className="chats_top">
        <div className="chatsTop_left">
          <h1>Chats</h1>

          <div className="recent_chats">
            <small>Recent Chats</small>
            <KeyboardArrowDownIcon />
          </div>
        </div>

        <div className="chat_create">
          <button>
            <AddRoundedIcon />
            Create New Chat
          </button>
        </div>
      </div>

      <ChatsSearch />

      <MessageBox
        avatar={
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
        content="Most of it is made up from sections 1.10.32-3 of Cicero's De finibus
          Borornum et malorum (On the boundaries pf Goods and Evils; finibus may
          also be translated as purposes)."
        number="2"
      />
    </div>
  );
}

export default Chats;
