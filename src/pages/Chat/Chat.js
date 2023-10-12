import React from "react";
import { Outlet } from "react-router-dom";

// components
import ChatPageLayout from "../../components/ChatPageLayout/ChatPageLayout.js";
import Aside from "../../components/Aside/Aside.js";
import HeaderLayout from "../../components/HeaderLayout/HeaderLayout.js";
import Search from "../../components/Search/Search.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";

// module
import ChatList from "../../modules/ChatList/index.js";

export default function Chat() {
  return (
    <ChatPageLayout>
      <Aside>
        <HeaderLayout>
          <Sidebar />
          <Search />
        </HeaderLayout>
        <ChatList />
      </Aside>
      <Outlet />
    </ChatPageLayout>
  )
}