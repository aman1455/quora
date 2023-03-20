import React from 'react'
import {
    Box,
    IconButton,
    Menu,
    MenuButton,Button,MenuList,MenuItem, Text,MenuDivider, Center,useColorModeValue
  } from '@chakra-ui/react';
  import { FiGlobe } from 'react-icons/fi';
function NavGlobComp() {
  return (
    <>
    <Menu>
   
         <Box
                w="40px"
                h="45px"
              >
              <MenuButton   w="100%"  as={Button} bg={useColorModeValue('white', "rgb(38,38,38)") }>
              <Center>

                <IconButton
                  colorScheme="white"
                  color={"rgb(99,100,102)"}
                  fontSize="25"
                  aria-label="Search database"
                  icon={<FiGlobe color={useColorModeValue('#666666', "rgb(177,179,182)") }/>}
                  
                />
              </Center>
              </MenuButton>
              </Box>

            <MenuList>
            <Text fontSize={"20px"} ml={3} fontWeight={"500"}>Languages</Text>
            <MenuDivider />
            <MenuItem minH="48px">
           
            <Box as='div' p={"2px"} borderRadius={"20px"} w={"30px"} h={"30px"} color={"white"} background={"#2B93EC"} textAlign={"center"}> EN</Box>
            <Text pl={2.5}>English</Text>
          </MenuItem>
          <MenuDivider/>

          <MenuItem h="30px">

          <Text >Add language</Text>
          </MenuItem>

          <MenuItem h="30px">
          <Text >See all languages</Text>
          </MenuItem>

            </MenuList>
    </Menu>
    </>
  )
}

export default NavGlobComp