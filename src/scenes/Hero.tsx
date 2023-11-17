"use client";
import React from "react";
import {
  Box,
  Spacer,
  Flex,
  Text,
  Center,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import { CiMenuKebab, CiPhone } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BiMessageX } from "react-icons/bi";

const IconDrop = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<CiMenuKebab />}
          variant="outline"
        />
        <MenuList>
          <MenuItem icon={<MdOutlinePeopleAlt />}>Member</MenuItem>
          <MenuItem icon={<CiPhone />}>Share Number</MenuItem>
          <MenuItem icon={<BiMessageX />}>Report</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

const Hero: React.FC = () => {
  return (
    <>
      <Box fontSize="xl" p={4}>
        <Flex>
          <Flex>
            <Center>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Box ml={4}>
                {/* <VStack> */}
                <Flex>
                  <Text>From </Text>
                  <Text as="b">IGI Aiport T3</Text>
                </Flex>
                <Flex>
                  <Text>To </Text>
                  <Text as="b">Sector 28</Text>
                </Flex>
                {/* </VStack> */}
              </Box>
            </Center>
          </Flex>
          <Spacer />
          <Center>
            <IconDrop />
          </Center>
        </Flex>
      </Box>
    </>
  );
};
export default Hero;
