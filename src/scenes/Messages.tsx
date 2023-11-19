import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text, AvatarBadge } from "@chakra-ui/react";
import { RiVerifiedBadgeLine } from "react-icons/ri";

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
      {chats.map((item) => {
        if (item.sender.self) {
          return (
            <Flex key={item.id} w="100%" justify="flex-end">
              <Flex
                bg="blue.500"
                color="white"
                maxW={{ base: "70%", md: "400px" }}
                my="1"
                p="3"
                borderRadius=" 20px 20px 0 20px "
              >
                <Text fontSize='md'>{item.message}</Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={item.id} w="100%">
              <Avatar src={item.sender.image} bg="blue.300">
                {item.sender.is_kyc_verified && (
                  <AvatarBadge boxSize="1.25em" bg="blue.300">
                    <RiVerifiedBadgeLine />
                  </AvatarBadge>
                )}
              </Avatar>
              <Flex
                bg="white"
                color="black"
                maxW={{ base: "70%", md: "400px" }}
                my="1"
                p="3"
                borderRadius=" 0 20px 20px 20px "
              >
                <Text fontSize='sm'>{item.message}</Text>
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
