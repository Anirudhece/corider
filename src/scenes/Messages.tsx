import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
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

interface ChatsProps {
  chats: Chat[];
}

const Messages: React.FC<ChatsProps> = ({ chats }) => {
  const AlwaysScrollToBottom: React.FC = () => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (elementRef.current) {
        elementRef.current.scrollIntoView();
      }
    });

    return <div ref={elementRef} />;
  };

  return (
    <Flex overflowY="scroll" flexDirection="column" p="4">
      {chats.map((item, index) => {
        if (item.sender.self) {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                bg="blue.500"
                color="white"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                borderRadius=" 20px 20px 0 20px "
              >
                <Text>{item.message}</Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%">
              <Avatar
                name="Computer"
                src={item.sender.image}
                bg="blue.300"
              ></Avatar>
              <Flex
                bg="white"
                color="black"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                borderRadius=" 0 20px 20px 20px "
              >
                 <Text>{item.message}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
