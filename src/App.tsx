import React from "react";
import Nav from "./scenes/Nav";
import Hero from "./scenes/Hero";
import Bottom from "./scenes/Bottom";
import Loader from "./components/Loader";
import Messages from "./scenes/Messages";
import { Box } from "@chakra-ui/react";

import { useGetChatsQuery } from "./redux/api";

interface ChatData {
  name: string;
  from: string;
  to: string;
  chats: Chat[]; 
}

interface Chat {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time: string;
}

function App() {
  const { isLoading, data } = useGetChatsQuery();
  const chatData = data as ChatData | undefined;
  console.log(chatData);

  return (
    <Box bg="orange.50">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {chatData && <Nav name={chatData.name} />}
          {chatData && <Hero from={chatData.from} to={chatData.to} />}
          {chatData && <Messages chats={chatData.chats} />}
          <Bottom />
        </>
      )}
    </Box>
  );
}

export default App;
