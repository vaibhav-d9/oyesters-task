import React from "react";

import "./ChatsSearch.scss";
import { KeyboardArrowDownRounded, SearchOutlined } from "@material-ui/icons";

function ChatsSearch() {
  return (
    <div className="chatsSearch">
      <div className="chatsSearch_left">
        <SearchOutlined />
        <input type="text" placeholder="Search" />
      </div>

      <div className="chatsSearch_right">
        <small>Messages</small>
        <KeyboardArrowDownRounded />
      </div>
    </div>
  );
}

export default ChatsSearch;
