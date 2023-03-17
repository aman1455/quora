import React, { useRef } from "react"
import { Box, Text, Flex, Img, Icon, Heading } from "@chakra-ui/react"

function AnswerPageSideBar() {
  let foc = useRef(null)
  return (
    <Box
      position={"fixed"}
      display={"flex"}
      h={"100vh"}
      w={"25%"}
      bg={"rgb(241,242,242)"}
    >
      <Box w={"59%"}></Box>
      <Box flex="1">
        <Heading fontSize={"15px"} mb={2} mt={2} pl={"10px"} color="#282829">
          Questions
        </Heading>
        <hr />
        <Flex flexDirection={"column"} color="rgb(99,100,102)">
          <Box
            display={"flex"}
            alignItems={"center"}
            textAlign="left"
            _hover={{
              background: "rgb(228,230,230)",
            }}
            _focus={{
              color: "red",
            }}
            onClick={(event) => {
              event.target.style.color = "#b92b27"
              event.target.style.backgroundColor = "red.50"
            }}
            p={"8px"}
          >
            <Text ref={foc} fontSize={"13px"} textAlign="left">
              Question For you
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            textAlign="left"
            _hover={{
              background: "rgb(228,230,230)",
            }}
            _focus={{
              color: "red",
            }}
            onClick={(event) => {
              event.target.style.color = "#b92b27"
              event.target.style.backgroundColor = "red.50"
            }}
            p={"8px"}
          >
            <Text ref={foc} fontSize={"13px"} textAlign="left">
              Answer Requests
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            textAlign="left"
            _hover={{
              background: "rgb(228,230,230)",
            }}
            _focus={{
              color: "red",
            }}
            onClick={(event) => {
              event.target.style.color = "#b92b27"
              event.target.style.backgroundColor = "red.50"
            }}
            p={"8px"}
          >
            <Text ref={foc} fontSize={"13px"} textAlign="left">
              Drafts
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
export default AnswerPageSideBar
