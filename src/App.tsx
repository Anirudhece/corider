import React from "react";
import Nav from "./scenes/Nav";
import Hero from "./scenes/Hero";
import Bottom from "./scenes/Bottom";
import Loader from "./components/Loader";

import { useGetChatsQuery } from "./redux/api";
export interface ChatData {
  name: string;
  from: string;
  to: string;
}

function App() {
  const { isLoading, data, isError } = useGetChatsQuery();
  const chatData = data as ChatData | undefined;
  chatData && console.log(chatData);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {chatData && <Nav name={chatData.name} />}
          {chatData && <Hero from={chatData.from} to={chatData.to} />}
        </>
      )}

      <Bottom />
    </>
  );
}

export default App;
