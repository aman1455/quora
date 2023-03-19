import React from "react";
import { Box, Flex, Text, Button,Divider, Center, grid} from "@chakra-ui/react";
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
        // margin="auto"
        marginTop="4"
        paddingLeft="2"
      >
        <Flex gap={4} direction="column">
        <Text fontSize="xl" fontWeight="bold">Welcome to Spaces!</Text>
        <Text>Follow Spaces to explore your interests on Quora.</Text>
        </Flex>
        <Flex gap={2} marginTop="2">
          <Button size="sm" variant="outline" borderRadius={30} color="blue" borderColor={"blue"}>
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
      <Box boxShadow={"sm"} bg={"ffffff"} width="10%" marginTop="4"  p="1">
        <Text color="#282829">Pending Invites</Text>
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
