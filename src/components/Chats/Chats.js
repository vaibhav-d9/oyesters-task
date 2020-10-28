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
        userName="Luy Robin"
        avatar={
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
        content="Most of it is made up from sections 1.10.32-3 of Cicero's De finibus
          Borornum et malorum (On the boundaries pf Goods and Evils; finibus may
          also be translated as purposes)."
        number="2"
        timestamp="1 minute ago"
        activity="...writes"
      />

      <MessageBox
        userName="Jared Sunn"
        avatar={
          "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
        number="1"
        timestamp="1 minute ago"
        activity="records voice message"
        voice={true}
        files={true}
        fileCount="x2"
        photo={true}
      />
      <MessageBox
        userName="Nika Jerrardo"
        avatar={
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
        timestamp="3 days ago"
        activity="last online 5 hours ago"
        content="Cicero famously orated against his political opponent Lucius Sergius Catilina"
        active={true}
      />
      <MessageBox
        userName="Jared Sunn"
        avatar={
          "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
        number="1"
        timestamp="1 minute ago"
        activity="records voice message"
        voice={true}
        files={true}
        fileCount="x2"
        photo={true}
      />
    </div>
  );
}

export default Chats;
