import React, { useState } from "react";
import {
  Textarea,
  Box,
  Flex,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";

import { MdOutlineCameraAlt } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { IoDocumentAttachOutline } from "react-icons/io5";
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
            <Flex>
              {/* <Button variant="none">
                <GrAttachment />
              </Button> */}
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<GrAttachment />}
                  variant="none"
                />
                <MenuList>
                  <Flex>
                    <MenuItem
                      icon={<MdOutlineCameraAlt />}
                      width="auto"
                      flex="1"
                    />
                    <MenuItem icon={<CiVideoOn />} width="auto" flex="1" />
                    <MenuItem
                      icon={<IoDocumentAttachOutline />}
                      width="auto"
                      flex="1"
                    />
                  </Flex>
                </MenuList>
              </Menu>
              <Button
                variant="none"
                isDisabled={inputMessage.trim().length === 0}
                onClick={handleSendMessage}
              >
                <AiOutlineSend />
              </Button>
            </Flex>
          </InputGroup>
        </Flex>
      </Box>
    </>
  );
};

export default Bottom;
