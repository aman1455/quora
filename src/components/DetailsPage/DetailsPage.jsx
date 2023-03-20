import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Button, Center, Img } from "@chakra-ui/react"
import Navbar from "../NavbarAndSidebar/Navbar"
import {
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"

import { FiChevronRight } from "react-icons/fi"
import { useDisclosure } from "@chakra-ui/react"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, Text, Box, Flex, Icon, IconButton } from "@chakra-ui/react"
function DetailsPage() {
  let { id } = useParams()
  let data = useSelector((sdata) => {
    return sdata.AnswerReducer
  })

  // console.log(id)
  let url = `http://localhost:8080/questions/${id}/?_embed=answers&_embed=acomments`
  let dispatch = useDispatch()
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/questions/${id}?_embed=answers&_embed=acomments`
      )
      .then((res) => {
        // console.log(res.data)
        dispatch({
          type: "Answers",
          payload: res.data,
        })
      })
  }, [data])

  let userReducer = useSelector((storeData) => {
    return storeData.UserReducer
  })
  let AuthData = useSelector((sData) => {
    return sData.AuthReducer
  })
  // console.log(data, "hello")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  let [tA, setTA] = useState("")
  let [tAC, setTAC] = useState("")
  function handleAnswerClick(e) {
    axios
      .post("http://localhost:8080/answers", {
        avatar: userReducer.avatar,
        name: userReducer.name,
        userId: Number(AuthData.token),
        questionId: Number(data.id),
        answer: tA,
        date: Date(),
      })
      .then((res) => {
        // console.log(res.data)
        setTA("")
      })
  }
  function handleCommentClick(e) {
    axios
      .post("http://localhost:8080/acomments", {
        userId: Number(data.userId),
        questionId: Number(data.id),
        answerId: Number(e.target.name),
        answer: tAC,
      })
      .then((res) => {
        // console.log(res.data)
        setTAC("")
        axios
          .get(
            `http://localhost:8080/questions/${id}?_embed=answers&_embed=acomments`
          )
          .then((res) => {
            dispatch({
              type: "Answers",
              payload: res.data,
            })
            // console.log(res.data)
          })
      })
  }

  return (
    <>
      <Navbar />

      <Center pt={"30px"}>
        <Card border={"1px solid rgb(222,224,225)"} w="50%" pl={"10px"}>
          <Text fontWeight={"bold"} fontSize={"25px"}>
            {data.question}
          </Text>
          <Flex justifyContent={"space-between"}>
            <Box display={"flex"}>
              <Button
                colorScheme="blackAlpha"
                variant="outline"
                borderRadius="20px"
                borderColor={"rgb(224,224,224)"}
                onClick={onOpen}
                color="rgb(99,100,102)"
              >
                <Icon boxSize={6}>
                  <g stroke-width="1.5" fill="none" fill-rule="evenodd">
                    <path
                      d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z"
                      class="icon_svg-stroke"
                      stroke="#666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      class="icon_svg-fill_as_stroke"
                      fill="#666"
                      d="m4.429 19.571 2.652-.884-1.768-1.768z"
                    ></path>
                    <path
                      d="M14.5 19.5h5v-5m-10-10h-5v5"
                      class="icon_svg-stroke"
                      stroke="#666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </Icon>
                Answer
              </Button>
              <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                size="lg"
                h="200vh"
              >
                <ModalOverlay />
                <ModalContent>
                  <Flex mt="20px" alignItems={"center"} pl="17px" w={"60%"}>
                    <Box>
                      <Img
                        borderRadius={30}
                        h={"50px"}
                        w={"50px"}
                        src={userReducer.avatar}
                      />
                    </Box>
                    <Box ml={"10px"}>
                      {" "}
                      <Text fontWeight={"bold"}>{userReducer.name}</Text>
                      <Button
                        mt={"5px"}
                        borderColor="rgb(224,224,224)"
                        borderRadius={30}
                        size="sm"
                        rightIcon={<FiChevronRight boxSize={6} />}
                        colorScheme="rgb(99,100,102)"
                        variant="outline"
                      >
                        Choose credential
                      </Button>
                    </Box>
                  </Flex>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel fontWeight={"bold"} fontSize="20px">
                        {data.question}
                      </FormLabel>
                      <Textarea
                        ref={initialRef}
                        placeholder="Write Your Answer"
                        value={tA}
                        // name={e.id}
                        onChange={(e) => {
                          setTA(e.target.value)
                          console.log(e.target.name)
                        }}
                      />
                    </FormControl>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      // name={e.id}
                      colorScheme="blue"
                      mr={3}
                      onClick={(e) => {
                        handleAnswerClick(e)
                        onClose(e)
                      }}
                      borderRadius="20px"
                      pl="20px"
                      pr="20px"
                    >
                      Post
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <Button
                leftIcon={
                  <Icon boxSize={6}>
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
                color="rgb(99,100,102)"
              >
                Follow
              </Button>

              <Button
                leftIcon={
                  <Icon boxSize={6}>
                    <g
                      class="icon_svg-stroke"
                      stroke="#666"
                      stroke-width="1.5"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M20 20.5a5 5 0 0 0-10 0m5-7.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                        class="icon_svg-fill"
                      ></path>
                      <path
                        d="m6 10 2.5 3L6 16m-3-2.976h5.495"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </Icon>
                }
                bg="#fff"
                borderRadius="20px"
                color="rgb(99,100,102)"
              >
                request
              </Button>
            </Box>

            <Box display={"flex"}>
              <Button w={"5px"} bg={"white"}>
                <Icon boxSize={6}>
                  <g fill="none" fill-rule="evenodd">
                    <circle
                      class="icon_svg-fill_as_stroke"
                      fill="#666"
                      cx="12"
                      cy="8"
                      r="1"
                    ></circle>
                    <path
                      d="M12 11.5v5M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9Z"
                      class="icon_svg-stroke"
                      stroke="#666"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                  </g>
                </Icon>
              </Button>
              <Button w={"5px"} bg={"white"}>
                <Icon boxSize={6}>
                  <path
                    d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z"
                    class="icon_svg-stroke icon_svg-fill"
                    stroke="#666"
                    stroke-width="1.5"
                    fill="none"
                  ></path>
                </Icon>
              </Button>
              <Button w={"5px"} bg={"white"}>
                <Icon boxSize={6}>
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
              <Button w={"5px"} bg={"white"}>
                <Icon boxSize={6}>
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
            </Box>
          </Flex>

          <Box>
            <Flex flexDirection={"column"}>
              <Center>
                <Img
                  mt={"20px"}
                  borderRadius={"20px"}
                  border="1px solid"
                  borderColor={"rgb(210,202,187)"}
                  w={"5%"}
                  src={userReducer.avatar}
                />
              </Center>
              <Center fontWeight={"500"}>
                {" "}
                <Text>
                  {userReducer.name}{" "}
                  <Text as={"span"}>, can you answer this question?</Text>
                </Text>
              </Center>
              <Center>
                {" "}
                <Text color={"rgb(147,149,152)"} fontSize={"15px"}>
                  People are searching for a better answer to this question.
                </Text>
              </Center>
              <Center>
                <Button
                  colorScheme="blackAlpha"
                  variant="outline"
                  borderRadius="20px"
                  borderColor={"rgb(46,105,255)"}
                  onClick={onOpen}
                  color="rgb(46,105,255)"
                  mt={"5px"}
                  mb={"15px"}
                >
                  <Icon boxSize={6}>
                    <g stroke-width="1.5" fill="none" fill-rule="evenodd">
                      <path
                        d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z"
                        class="icon_svg-stroke"
                        stroke="rgb(46,105,255)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        class="icon_svg-fill_as_stroke"
                        fill="#666"
                        d="m4.429 19.571 2.652-.884-1.768-1.768z"
                      ></path>
                      <path
                        d="M14.5 19.5h5v-5m-10-10h-5v5"
                        class="icon_svg-stroke"
                        stroke="rgb(46,105,255)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </Icon>
                  Answer
                </Button>
                <Modal
                  initialFocusRef={initialRef}
                  isOpen={isOpen}
                  onClose={onClose}
                  isCentered
                  size="lg"
                  h="200vh"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <Flex mt="20px" alignItems={"center"} pl="17px" w={"60%"}>
                      <Box>
                        <Img
                          borderRadius={30}
                          h={"50px"}
                          w={"50px"}
                          src={userReducer.avatar}
                        />
                      </Box>
                      <Box ml={"10px"}>
                        {" "}
                        <Text fontWeight={"bold"}>{userReducer.name}</Text>
                        <Button
                          mt={"5px"}
                          borderColor="rgb(224,224,224)"
                          borderRadius={30}
                          size="sm"
                          rightIcon={<FiChevronRight boxSize={6} />}
                          colorScheme="rgb(99,100,102)"
                          variant="outline"
                        >
                          Choose credential
                        </Button>
                      </Box>
                    </Flex>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel fontWeight={"bold"} fontSize="20px">
                          {data.question}
                        </FormLabel>
                        <Textarea
                          ref={initialRef}
                          placeholder="Write Your Answer"
                          value={tA}
                          // name={e.id}
                          onChange={(e) => {
                            setTA(e.target.value)
                            console.log(e.target.name)
                          }}
                        />
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        // name={e.id}
                        colorScheme="blue"
                        mr={3}
                        onClick={(e) => {
                          handleAnswerClick(e)
                          onClose(e)
                        }}
                        borderRadius="20px"
                        pl="20px"
                        pr="20px"
                      >
                        Post
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Center>
            </Flex>
          </Box>
        </Card>
      </Center>

      {/* <Center>
        <Card></Card>
      </Center> */}

      {/* <Button onClick={onOpen}>Open Modal</Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Answer</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>{data.question}</FormLabel>
              <Textarea
                ref={initialRef}
                placeholder="Enter Your Answer"
                value={tA}
                onChange={(e) => {
                  setTA(e.target.value)
                  console.log(e.target.name)
                }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={(e) => {
                handleAnswerClick(e);
                onClose(e);
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      {/* {data.answers.map((e, i) => {
        return (
          <>
            <Button onClick={onOpen}>Comment</Button>
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Enter Comment</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <Textarea
                      ref={initialRef}
                      placeholder="Enter Your Comment"
                      value={tAC}
                      onChange={(e) => {
                        setTAC(e.target.value)
                        // console.log(e.target.name)
                      }}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    name={e.id}
                    onClick={(e) => {
                      handleCommentClick(e)
                      onClose(e)
                    }}
                  >
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Button>DownVote</Button>
            <Button>Comments</Button>
          </>
        )
      })} */}
    </>
  )
}
export default DetailsPage
