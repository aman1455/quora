import React from "react";
import { Box, Flex, Text, Button,Divider, useColorModeValue, grid} from "@chakra-ui/react";
import {GrAddCircle} from "react-icons/gr"
import {AiOutlineCompass,AiOutlineMail} from "react-icons/ai"
export default function SpacesPageTop() {
  return (
    <Flex margin="auto" justifyContent={"center"} gap="80px">
      <Box
        backgroundImage="url('https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.tribe_welcome_banner_full.png-26-64d500fd69494b66.png')"
        backgroundSize="contain"
      backgroundPosition="right"
      backgroundRepeat="no-repeat"
        width="40%"
        height="120px"
        boxShadow={"sm"}
        
        marginTop="4"
        h="20vh"
        p="15px" 
        border={useColorModeValue('2px solid rgb(228,229,230)', "none") }
      >
      
        <Flex gap={4} direction="column">
        <Text fontSize="xl" fontWeight="bold">Welcome to Spaces!</Text>
        <Text fontSize={"15px"} pb="10px">Follow Spaces to explore your interests on Quora.</Text>
        </Flex>
        <Flex   gap={2} marginTop="2">
          <Button p="15px"  size="sm" variant="outline" borderRadius={30} color="blue" borderColor={"blue"}>
            <Flex gap="2">
              <GrAddCircle size={"15"} color="blue"/>
              <Text fontWeight={"semibold"}>Create a Space</Text>
            </Flex>
          </Button>
          <Button size="sm" variant="outline" borderRadius={30} color="blue" borderColor={"blue"}>
            <Flex gap="2">
              <AiOutlineCompass size={"15"}/>
              <Text fontWeight={"semibold"}>Discover Spaces</Text>
            </Flex>
          </Button>
        </Flex>
      </Box>
      <Box boxShadow={"sm"} bg={useColorModeValue('white', "rgb(34,34,34)") } width="10%" marginTop="4"  p="1">
        <Text fontWeight={"bold"} color={useColorModeValue('rgb(100,100,101)', "rgb(107,108,109)") }>Pending Invites</Text>
        <Divider></Divider>
        <Box
         w="100%" 
         height={"20"}
        display="flex"
      justifyContent="center"
      alignItems="center">
          <Flex direction={"column"}>
          <Box margin={"auto"}>
          <AiOutlineMail color="#939598"/>
          </Box>
          <Text color="#939598" fontWeight={"light"}>No Invites</Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
