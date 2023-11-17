"use client";
import React from "react";
import { Box, Spacer, Flex, Text, Center, IconButton } from "@chakra-ui/react";
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
