"use client";
import React from "react";
import { Box, Spacer, Flex, Text, Center, IconButton } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { ArrowBackIcon } from "@chakra-ui/icons";

interface NavProps {
  name: string; // Adjust the type according to your data structure
}
const Nav: React.FC<NavProps>=({name}) =>{
  return (
    <>
      <Box fontSize="xl" p={4}>
        <Flex>
          <Flex>
            <Center>
              <ArrowBackIcon />
              <Text as="b">{name}</Text>
            </Center>
          </Flex>
          <Spacer />
          <Center>
            {/* <IconButton
              // variant="outline"
              // colorScheme="teal"
              aria-label="edit"
              icon={<FaRegEdit />}
            /> */}
            <FaRegEdit />
          </Center>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;
