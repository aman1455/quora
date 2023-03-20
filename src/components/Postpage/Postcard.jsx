import { useState, useEffect } from "react"
import {
  Box,
  Text,
  Stack,
  Flex,
  Button,
  Avatar,
  Image,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,useColorModeValue
} from "@chakra-ui/react"
import ReactQuill from "react-quill"
import { useParams } from "react-router-dom"

import axios from "axios"

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
  Input,
} from "@chakra-ui/react"
import { Skeleton } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  LinkIcon,
  NotAllowedIcon,
  EditIcon,
  HamburgerIcon,
  WarningTwoIcon,
  ChatIcon,
  RepeatIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons"

export function formatDate(dateString) {
  const date = new Date(dateString)
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  }
  return date.toLocaleDateString(undefined, options)
}

export default function Postcard({
  post,
  setPosts,
  posts,
  state,
  setState,
  isLoading,
  setLoading,
}) {
  let [tAC, setTAC] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  let [upvoteCount, setUpVoteCount] = useState(0)
  let [downvoteCount, setDownVoteCount] = useState(0)
  const initialRef = React.useRef(null)
  const [upvote, setUpvote] = useState(false)
  const [downvote, setDownvote] = useState(false)
  const [expandedPost, setExpandedPost] = useState(null)
  const dispatch = useDispatch()
  let AuthData = useSelector((sData) => {
    return sData.AuthReducer
  })
  useEffect(() => {
    upvoteFinder()
    downvoteFinder()
  }, [posts])
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/pupvotes?postId=${post.id}&userId=${AuthData.token}`
      )
      .then((res) => {
        setUpvote(res.data[0].upvote || false)
      })
  }, [])
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/pdownvotes?postId=${post.id}&userId=${AuthData.token}`
      )
      .then((res) => {
        setDownvote(res.data[0].downvote || false)
      })
  }, [])

  function updatePosts() {
    axios
      .get(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts?_embed=pcomments&_embed=pupvotes&_embed=pdownvotes`
      )
      .then((res) => {
        dispatch({
          type: "post_data",
          payload: res.data,
        })
        // console.log(downvoteCount)
        setPosts(res.data)
        setState(!state)

        // console.log(res.data, "This is inside Card")
      })
  }
  function handleupvote() {
    axios
      .get(
        `http://localhost:8080/pupvotes?postId=${post.id}&userId=${AuthData.token}`
      )
      .then((res) => {
        // console.log(res.data)
        if (res.data.length === 1) {
          if (res.data[0].upvote) {
            axios
              .patch(`http://localhost:8080/pupvotes/${res.data[0].id}`, {
                // userId: Number(post.userId),
                // postId: Number(post.id),
                upvote: false,
              })
              .then(() => {
                setUpvote(false)
                updatePosts()
              })
          } else {
            axios
              .patch(`http://localhost:8080/pupvotes/${res.data[0].id}`, {
                // userId: Number(post.userId),
                // postId: Number(post.id),
                upvote: true,
              })
              .then(() => {
                setUpvote(true)
                handledownvotefalse()
                updatePosts()
              })
          }
        } else {
          axios
            .post(`http://localhost:8080/pupvotes`, {
              userId: Number(AuthData.token),
              postId: Number(post.id),
              upvote: true,
            })
            .then(() => {
              setUpvote(true)
              handledownvotefalse()
              updatePosts()
            })
        }
      })
  }
  function handledownvotefalse() {
    axios
      .get(
        `http://localhost:8080/pdownvotes?postId=${post.id}&userId=${AuthData.token}`
      )
      .then((res) => {
        if (res.data.length === 1) {
          if (res.data[0].downvote) {
            axios
              .patch(`http://localhost:8080/pdownvotes/${res.data[0].id}`, {
                // userId: Number(post.userId),
                // postId: Number(post.id),
                downvote: false,
              })
              .then(() => {
                setDownvote(false)
                updatePosts()
              })
          }
        }
      })
  }
  function handledownvote() {
    // setDownvote(!downvote)
    axios
      .get(
        `http://localhost:8080/pdownvotes?postId=${post.id}&userId=${AuthData.token}`
      )
      .then((res) => {
        // console.log(res.data)
        if (res.data.length === 1) {
          if (res.data[0].downvote) {
            axios
              .patch(`http://localhost:8080/pdownvotes/${res.data[0].id}`, {
                // userId: Number(post.userId),
                // postId: Number(post.id),
                downvote: false,
              })
              .then(() => {
                setDownvote(false)
                updatePosts()
              })
          } else {
            axios
              .patch(`http://localhost:8080/pdownvotes/${res.data[0].id}`, {
                // userId: Number(post.userId),
                // postId: Number(post.id),
                downvote: true,
              })
              .then(() => {
                setDownvote(true)
                handleupvotefalse()
                updatePosts()
              })
          }
        } else {
          axios
            .post(`http://localhost:8080/pdownvotes`, {
              userId: Number(AuthData.token),
              postId: Number(post.id),
              downvote: true,
            })
            .then(() => {
              setDownvote(true)
              handleupvotefalse()
              updatePosts()
            })
        }
      })
  }
  function handleupvotefalse() {
    axios
      .get(
        `http://localhost:8080/pupvotes?postId=${post.id}&userId=${AuthData.token}`
      )
      .then((res) => {
        if (res.data.length === 1) {
          if (res.data[0].upvote) {
            axios
              .patch(`http://localhost:8080/pupvotes/${res.data[0].id}`, {
                // userId: Number(post.userId),
                // postId: Number(post.id),
                upvote: false,
              })
              .then(() => {
                setUpvote(false)
                updatePosts()
              })
          }
        }
      })
  }
  function handleExpandClick(postId) {
    setExpandedPost((prevExpandedPostId) =>
      prevExpandedPostId === postId ? null : postId
    )
  }
  function handleCommentClick(e) {
    axios
      .post("http://localhost:8080/pcomments", {
        userId: Number(post.userId),
        postId: Number(post.id),
        commment: tAC,
      })
      .then((res) => {
        // console.log(res.data)

        setTAC("")

        axios
          .get(
            `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts?_embed=pcomments&_embed=pupvotes&_embed=pdownvotes`
          )
          .then((res) => {
            dispatch({
              type: "post_data",
              payload: res.data,
            })
            setPosts(res.data)

            // console.log(res.data, "This is inside Card")
          })
      })
  }

  function isPostExpanded(postId) {
    return expandedPost === postId
  }

  function upvoteFinder() {
    axios
      .get(`http://localhost:8080/posts/${post.id}?_embed=pupvotes`)
      .then((res) => {
        let count = 0
        // console.log(res.data, "Inside Upvote finder")
        res.data.pupvotes.forEach((e, i) => {
          if (e.upvote === true) {
            count++
            // console.log(count)
          }
        })
        setUpVoteCount(count)
        // console.log(count)
      })
  }
  function downvoteFinder() {
    axios
      .get(`http://localhost:8080/posts/${post.id}?_embed=pdownvotes`)
      .then((res) => {
        let count = 0
        // console.log(res.data, "Inside Upvote finder")
        res.data.pdownvotes.forEach((e, i) => {
          if (e.downvote === true) {
            count++
            // console.log(count)
          }
        })
        setDownVoteCount(count)
        // console.log(count)
      })
  } 
  // rgb(168,170,173)
  return (
    <Box  bg={useColorModeValue('white', "rgb(38,38,38)") } key={post.id} p="2" shadow="md" borderWidth="1px" marginTop="2">
      <Flex direction="column" gap="2">
        <Skeleton isLoaded={isLoading}>
          <Flex gap="2">
            <Avatar name={post.userName} src={post.userImage} />
            <Flex height="50px" direction="column">
              <Text fontSize="sm" fontWeight="bold">
                {post.userName}
              </Text>
              <Text fontSize="sm" color={useColorModeValue('rgb(99,100,102)', "rgb(168,170,173)") }>
                {formatDate(post.date)}
              </Text>
            </Flex>
          </Flex>
        </Skeleton>
        {!isPostExpanded(post.id) && (
          <Skeleton isLoaded={isLoading}>
            <Box overflow="hidden">
              <ReactQuill
                theme="bubble"
                value={post.post}
                readOnly={true}
                style={{ height: "35px", overflow: "hidden", width: "110%" }}
              />
            </Box>
          </Skeleton>
        )}
        {post.post.length > 150 && (
          <Button
            size="sm"
            w="20%"
            variant="ghost"
            mt="3"
            margin="0 0 auto auto"
            onClick={() => handleExpandClick(post.id)}
          >
            {isPostExpanded(post.id) ? "Read less" : "Read more"}
          </Button>
        )}
        {isPostExpanded(post.id) && (
          <ReactQuill theme="bubble" value={post.post} readOnly={true} />
        )}
        {post.imageUrl !== "" && (
          <Skeleton isLoaded={isLoading}>
            <Box boxSize="lg" w="100%">
              <Image
                src={post.imageUrl}
                alt={post.userName}
                objectFit="contain"
                margin="0 auto"
                h="100%"
                w="100%"
              />
            </Box>
          </Skeleton>
        )}
        <Box width="100%" height="10">
          <Skeleton isLoaded={isLoading}>
            <Flex>
              <Flex dir="column" justifyContent={"space-between"}>
                <Box>
                  <Button
                    borderRightRadius="0"
                    borderLeftRadius="30"
                    border="1px"
                    // borderColor="rgb(222,224,225)"
                    borderColor={useColorModeValue('rgb(222,224,225)', "none") }
                    size="sm"
                    h="8"
                    onClick={handleupvote}
                    bg={useColorModeValue('rgb(247,247,247)', "rgb(64,64,64)") } 
                  >
                    <Flex gap={2} alignItems={"center"}>
                      {" "}
                      <Icon viewBox="0 0 24 24" color="red.500" boxSize={5}>
                        <path
                          fill={upvote ? "#2E69FF" : "none"}
                          d="M12 4 3 15h6v5h6v-5h6z"
                          width="1.5"
                          stroke="rgb(46,105,255)"
                          fontWeight="bold"
                        />
                      </Icon>
                      <Text
                        fontWeight="semibold"
                        fontSize="sm"
                        color={useColorModeValue('rgb(99,100,102)', "rgb(168,170,173)") }
                        fontFamily="sans-serif"
                      >
                        UpVote : {upvoteCount}
                      </Text>
                    </Flex>
                  </Button>
                  <Button
                    borderRightRadius="30"
                    borderLeftRadius="0"
                    border="1px"
                    borderLeft="0"
                    borderColor="rgb(222,224,225)"
                    size="sm"
                    onClick={handledownvote}
                    bg={useColorModeValue('rgb(247,247,247)', "rgb(64,64,64)") } 
                  >
                    <Icon viewBox="0 0 24 24" color="red.500" boxSize={5}>
                      <path
                        fill={downvote ? "#CB4B10" : "none"}
                        width="1.5"
                        stroke="#666"
                        d="m12 20 9-11h-6V4H9v5H3z"
                      />
                    </Icon>
                    {downvoteCount}
                  </Button>
                </Box>

                <Button
                  variant="ghost"
                  onClick={onOpen}
                  borderRadius={30}
                  size="sm"
                >
                  <Flex gap={1} alignItems={"center"}>
                    <ChatIcon color={useColorModeValue('rgb(99,100,102)', "rgb(168,170,173)") }/>

                    <Text fontWeight="light" fontSize="sm">
                      {post.pcomments.length || 0}
                    </Text>
                  </Flex>
                </Button>
                <Modal
                  initialFocusRef={initialRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Enter Comments</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Enter Your Thoughts</FormLabel>
                        <Textarea
                          ref={initialRef}
                          placeholder="Enter Comment"
                          value={tAC}
                          onChange={(e) => {
                            setTAC(e.target.value)
                          }}
                        />
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        colorScheme="blue"
                        mr={3}
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

                <Button variant="ghost" borderRadius={30} size="sm">
                  <Flex gap={1} alignItems="center">
                    <RepeatIcon color="rgb(99,100,102)" />
                    <Text
                      color={"rgb(99,100,102)"}
                      fontWeight="light"
                      fontSize="sm"
                    >
                      {post.share}
                    </Text>
                  </Flex>
                </Button>
              </Flex>
              <Spacer />
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="ghost"
                />
                <MenuList>
                  <MenuItem icon={<LinkIcon />} command="⌘T">
                    Copy link
                  </MenuItem>
                  <MenuItem icon={<NotAllowedIcon />} command="⌘N">
                    Not intrested in this
                  </MenuItem>
                  <MenuItem icon={<EditIcon />} command="⌘⇧N">
                    Bookmark
                  </MenuItem>
                  <MenuItem icon={<TriangleDownIcon />} command="⌘O">
                    Downvote
                  </MenuItem>
                  <MenuItem icon={<HamburgerIcon />} command="⌘L">
                    Log
                  </MenuItem>
                  <MenuItem icon={<WarningTwoIcon />} command="⌘R">
                    Report
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Skeleton>
        </Box>
      </Flex>
    </Box>
  )
}
