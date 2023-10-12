import React from "react";

// components
import MessagesLayout from "../../components/MessagesLayout/MessagesLayout.js";
import HeaderLayout from "../../components/HeaderLayout/HeaderLayout.js";
import Avatar from "../../ui/Avatar/Avatar.js";
import ChatInfo from "../../components/ChatInfo/ChatInfo.js";
import ButtonMenu from "../../ui/ButtonMenu/ButtonMenu.js";

// module
import MessagesList from "../../modules/MessagesList/index.js";
import Message from "../../modules/Message/index.js";

export default function Dialog() {
  return (
    <MessagesLayout>
      <HeaderLayout>
        <Avatar />
        <ChatInfo
          chatName={'chat name'}
        />
        <ButtonMenu
          type={'kebab'}
        />
      </HeaderLayout>
      <MessagesList />
      <Message />
    </MessagesLayout>
  )
}