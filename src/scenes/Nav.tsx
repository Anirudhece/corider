"use client";
import React from "react";
import { Box, Spacer, Flex, Text, Center } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { ArrowBackIcon } from "@chakra-ui/icons";

function Nav() {
  return (
    <>
      <Box fontSize="xl" p={4}>
        <Flex>
          <Flex>
            <Center>
              <ArrowBackIcon />
              <Text as="b">Trip 1</Text>
            </Center>
          </Flex>
          <Spacer />
          <Center>
            <FaRegEdit />
          </Center>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;
