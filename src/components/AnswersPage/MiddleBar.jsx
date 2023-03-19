import React, { useRef } from "react"
import {
  Box,
  Text,
  Flex,
  Img,
  Icon,
  Heading,
  Button,
  Textarea,
} from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"
import { BiEdit } from "react-icons/bi"
import RightBar from "./RightBar"
import { useDisclosure } from "@chakra-ui/react"
import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Portal,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
function MiddleBar() {
  let navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  let dispatch = useDispatch()
  let [tA, setTA] = useState("")
  let data = useSelector((storeData) => {
    return storeData.AuthReducer
  })
  let Questiondata = useSelector((storeData) => {
    return storeData.QuestionReducer
  })

  useEffect(() => {
    // `http://localhost:8080/users/${Number(data.token)}/?_embed=questions`
    axios.get(`http://localhost:8080/questions?_embed=answers`).then((res) => {
      console.log(res.data)
      dispatch({
        type: "Question_Data",
        payload: res.data,
      })
    })
  }, [])

  function handleAnswerClick(e) {
    axios
      .post("http://localhost:8080/answers", {
        userId: Number(data.token),
        questionId: Number(e.target.name),
        answer: tA,
      })
      .then((res) => {
        console.log(res.data)
        setTA("")
      })
  }
  console.log(Questiondata)
  let foc = useRef(null)
  return (
    <Box display="flex">
      <Box w="26%"></Box>
      <Box
        // ml="400px"
        pl="20px"
        pr="20px"
        display={"flex"}
        flexDirection="column"
        boxShadow="rgba(0, 0, 0, 0.04) 0px 1px 1px 0px"
        bg={"white"}
        width={"45%"}
        // h={"100vh"}
        // overflow="auto"
      >
        {/* <Box w={"59%"}></Box> */}
        <Box
          display="flex"
          alignContent="center"
          borderBottom="1px solid grey"
          w="100%"
        >
          <Box
            w="24px"
            h="24px"
            border="0px solid red"
            display="grid"
            borderRadius={4}
            bg="#b92b27"
            placeItems="center"
            mt="auto"
            mb="auto"
          >
            <Icon viewBox="0 0 24 24" boxSize={4}>
              <path
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="white"
                d="m12 16.618-4.944 2.599L8 13.71 4 9.812l5.528-.803L12 4l2.472 5.01L20 9.811l-4 3.9.944 5.505z"
              />
            </Icon>
          </Box>
          <Text
            as="span"
            fontSize={"13px"}
            mb={2}
            mt={2}
            pl={"10px"}
            color="#636466"
          >
            Questions For You
          </Text>
        </Box>
        <Box>
          <Flex flexDirection={"column"}>
            {Questiondata.map((e, i) => {
              return (
                <Box
                  key={i}
                  pt={4}
                  pb={4}
                  borderBottom="1px solid rgb(222,224,225)"
                >
                  <Flex justify="space-between" align="top">
                    <Box
                      onClick={() => {
                        navigate(`/answer/${e.id}`)
                      }}
                    >
                      <Text
                        color="#282829"
                        fontWeight="bold"
                        fontSize={"16px"}
                        _hover={{
                          textDecoration: "underline",
                        }}
                      >
                        {e.question}
                      </Text>
                    </Box>
                    <Box
                      borderRadius="100%"
                      w="40px"
                      h="40px"
                      _hover={{
                        background: "rgb(228,230,230)",
                      }}
                      display="grid"
                      placeItems="center"
                    >
                      <CloseIcon boxSize={3} />
                    </Box>
                  </Flex>
                  <Box>
                    <Box as="span" color={"#939598"} fontSize="13px">
                      <Box
                        as="span"
                        _hover={{ textDecoration: "underline" }}
                        fontWeight="bold"
                        onClick={() => {
                          navigate(`/answer/${e.id}`)
                        }}
                      >
                        {e.answers.length === 0
                          ? "No answer yet"
                          : e.answers.length + " " + " answers"}
                      </Box>{" "}
                      {"· "}
                      {e.date}
                      {/*  Last requested 31m */}
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mt={3}>
                    <Box>
                      <Button
                        leftIcon={<BiEdit />}
                        colorScheme="blackAlpha"
                        variant="outline"
                        borderRadius="20px"
                        onClick={onOpen}
                      >
                        Answer
                      </Button>
                      <Modal
                        initialFocusRef={initialRef}
                        isOpen={isOpen}
                        onClose={onClose}
                      >
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Create your account</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody pb={6}>
                            <FormControl>
                              <FormLabel>{e.question}</FormLabel>
                              <Textarea
                                ref={initialRef}
                                placeholder="Enter Your Answer"
                                value={tA}
                                name={e.id}
                                onChange={(e) => {
                                  setTA(e.target.value)
                                  console.log(e.target.name)
                                }}
                              />
                              {/* <Input
                                ref={initialRef}
                                placeholder="First name"
                              /> */}
                            </FormControl>
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              name={e.id}
                              colorScheme="blue"
                              mr={3}
                              onClick={(e) => {
                                handleAnswerClick(e)
                                onClose(e)
                              }}
                            >
                              Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                      &nbsp; &nbsp;
                      <Button
                        leftIcon={
                          <Icon viewBox="0 0 24 24">
                            <g
                              class="icon_svg-stroke"
                              stroke="#666"
                              stroke-width="1.5"
                              fill="none"
                              fill-rule="evenodd"
                              stroke-linecap="round"
                            >
                              <path d="M14.5 19c0-5.663-3.337-9-9-9m14 9c0-8.81-5.19-14-14-14"></path>
                              <circle
                                cx="7.5"
                                cy="17"
                                r="2"
                                class="icon_svg-fill"
                              ></circle>
                            </g>
                          </Icon>
                        }
                        bg="#fff"
                        borderRadius="20px"
                      >
                        Follow
                      </Button>
                      &nbsp; &nbsp;
                      <Button
                        leftIcon={
                          <Icon viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                              <path
                                d="m11.828 9.314 3.9-3.9a2 2 0 1 1 2.828 2.829l-3.9 3.9m-3.535 3.535-2.464 2.464-4.241 1.416 1.412-4.244 2.465-2.465"
                                class="icon_svg-stroke"
                                stroke="#666"
                                stroke-width="1.5"
                                stroke-linecap="square"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                class="icon_svg-fill_as_stroke"
                                fill="#666"
                                d="m4.414 19.556 2.652-.884-1.768-1.767z"
                              ></path>
                              <path
                                d="M4.636 5.636 18.5 19.5"
                                class="icon_svg-stroke"
                                stroke="#666"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </g>
                          </Icon>
                        }
                        bg="#fff"
                        borderRadius="20px"
                      >
                        Pass
                      </Button>
                      &nbsp; &nbsp;
                    </Box>
                    <Box>
                      <Button bg="#fff" borderRadius="20px">
                        <Icon viewBox="0 0 24 24">
                          <path
                            d="m12 20 9-11h-6V4H9v5H3z"
                            class="icon_svg-stroke icon_svg-fill"
                            stroke="#666"
                            fill="none"
                            stroke-width="1.5"
                            stroke-linejoin="round"
                          ></path>
                        </Icon>
                      </Button>
                      &nbsp; &nbsp;
                      <Menu>
                        <MenuButton>
                          <Button bg="#fff" borderRadius="100%">
                            <Icon viewBox="0 0 24 24">
                              <path
                                d="M11.25 11.25a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm-7 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm14 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Z"
                                class="icon_svg-stroke"
                                fill="#666"
                                stroke="#666"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </Icon>
                          </Button>
                        </MenuButton>
                        <Portal>
                          <MenuList>
                            <MenuItem>Copy Link</MenuItem>
                            <MenuItem>Answer Later</MenuItem>
                            <MenuItem>Notify me about Edits</MenuItem>
                            <MenuItem>Merge Questions</MenuItem>
                            <MenuItem>View Questions</MenuItem>
                          </MenuList>
                        </Portal>
                      </Menu>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Flex>
        </Box>
      </Box>
      <Box w="29%">
        <RightBar />
      </Box>
    </Box>
  )
}

export default MiddleBar
