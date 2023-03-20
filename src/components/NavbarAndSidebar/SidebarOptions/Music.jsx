import React from 'react';
import MusicMidContentCard from '../SidebarOptions/MusicMidContentCard';
import MidSectionMusic from '../SidebarOptions/MidSectionMusic';
import EachCard from '../SidebarOptions/EachCard';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Flex, Box, useColorModeValue,Spacer } from '@chakra-ui/react';
function Music() {
  return (
    <>
      <Navbar />

      <Flex   bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }>
        <Sidebar />
        <Box  w={'25%'}></Box> 
        <Flex  w={'75%'}>

        <MidSectionMusic />
        </Flex>
      </Flex>
    </>
  );
}

export default Music;
