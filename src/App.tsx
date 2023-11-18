import React from "react";
import Nav from "./scenes/Nav";
import Hero from "./scenes/Hero";
import Bottom from "./scenes/Bottom";
import Loader from "./components/Loader";
import Messages from "./scenes/Messages";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

import { useGetChatsQuery } from "./redux/api";

export interface ChatData {
  name: string;
  from: string;
  to: string;
}
interface Message {
  from: string;
  text: string;
}

function App() {
  const { isLoading, data, isError } = useGetChatsQuery();
  const chatData = data as ChatData | undefined;

  const message: Message[] = [
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "Myself Ferin Patel" },
    {
      from: "computer",
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
  ];
  return (
    <Box bg="orange.50">

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {chatData && <Nav name={chatData.name} />}
          {chatData && <Hero from={chatData.from} to={chatData.to} />}
          <Messages messages={message} />
        </>
      )}

      <Bottom />
    </Box>
  );
}

export default App;
