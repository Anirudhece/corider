import React, { useState } from "react";
import {
  Textarea,
  Box,
  Flex,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";

const Bottom = () => {
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleSendMessage = () => {
    alert("sbfudsf");
  };

  return (
    <>
      <Box p={4}>
        <Flex w="100%" mt="5">
          <InputGroup>
            <Input
              placeholder="Type Something..."
              border="none"
              borderRadius="none"
              _focus={{
                border: "1px solid black",
              }}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />

            <InputRightElement>
              <Flex>
                <Button variant="none">
                  <GrAttachment />
                </Button>
                <Button
                  variant="none"
                  isDisabled={inputMessage.trim().length === 0}
                  onClick={handleSendMessage}
                >
                  <AiOutlineSend />
                </Button>
              </Flex>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
    </>
  );
};

export default Bottom;
