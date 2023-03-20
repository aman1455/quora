import ReactQuill from "react-quill"
import { FiUpload } from "react-icons/fi"
import "react-quill/dist/quill.snow.css"
import { useRef } from "react"
import "./Questions.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import {
  Fade,
  Center,
  Box,
  ButtonGroup,
  Flex,
  Avatar,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Input,
  ModalBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
  ModalFooter,
  FormControl,
  FormLabel,
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputRightElement,
  IconButton,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Spacer,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { useDisclosure } from "@chakra-ui/react"
import { Icon, createIcon } from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux"
import { formatDate } from "../Postpage/Postcard"

export default function Question({ state, setState }) {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let AuthData = useSelector((storeData) => {
    return storeData.AuthReducer
  })
  let UserData = useSelector((sData) => {
    return sData.UserReducer
  })
  // console.log(AuthData)
  // console.log(UserData)
  function TextEditor({ value, onChange }) {
    return <ReactQuill value={value} onChange={onChange} />
  }

  function Toolbar({ onFormat }) {
    const handleFormat = (format) => () => {
      onFormat(format)
    }

    return (
      <div>
        <button onClick={handleFormat("bold")}>Bold</button>
        <button onClick={handleFormat("italic")}>Italic</button>
        <button onClick={handleFormat("underline")}>Underline</button>
      </div>
    )
  }

  function TextFormatter() {
    const [content, setContent] = useState("")

    const handleContentChange = (value) => {
      setContent(value)
    }

    const handleFormat = (format) => {
      const quill = this.quillRef.getEditor()
      quill.format(format, true)
    }
  }
  const [date, setDate] = useState("")
  const [activeTab, setActiveTab] = useState(0)
  const activeTabColor = useColorModeValue("blue.500", "blue.200") // customize the underline color for different color modes
  const [isOpe, setIsOpe] = useState(false)
  const [menui, setMenui] = useState("Public")
  const inputFocusColor = useColorModeValue("blue.500", "blue.200")
  const whatsup = useRef(null)
  //uploading to db
  const [text, setText] = useState("")
  const [posttext, setPostText] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const { isOpen, onToggle } = useDisclosure()
  const sexyLagraTha = useRef()
  const handleTextChange = (value) => {
    // console.log("efgh", value)
    setText(value)
  }
  const handleTextChangePost = (value) => {
    // console.log("efgh", value)
    setPostText(value)
  }
  const twerkBottomMenu = () => {
    // console.log("xxx", sexyLagraTha.current.classList)
    sexyLagraTha.current.classList.toggle("twerk_bottom_toggle")
  }
  const handleImageUpload = (event) => {
    setDate(Date())
    // console.log(event.target)
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      const dataUrl = reader.result
      setImageUrl(dataUrl)
    }
    reader.readAsDataURL(file)
  }

  const saveDataToDb1 = (data) => {
    fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/questions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
      })
      .catch((error) => console.error(error))
  }
  const saveDataToDb2 = (data) => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        axios
          .get(
            `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`
          )
          .then((res) => {
            dispatch({
              type: "post_data",
              payload: res.data,
            })
            setState(!state)
          })
      })
    // .catch((error) => console.error(error))
  }

  const handleTabChange = (index) => {
    setActiveTab(index)
  }

  const handleOpenModal1 = () => {
    setActiveTab(0)
    setIsOpe(true)
  }

  const handleOpenModal2 = () => {
    setActiveTab(1)
    setIsOpe(true)
  }
  const handlechange = () => {
    whatsup.current.click()
  }
  const handleSubmit1 = (e) => {
    e.preventDefault()
    saveDataToDb1({
      userId: Number(JSON.parse(localStorage.getItem("AuthData")).token),
      question: text,
      date: formatDate(Date()),
      completeDate: Date(),
    })
    setText("")
    handleCloseModal()
  }
  const handleSubmit2 = (e) => {
    e.preventDefault()
    saveDataToDb2({
      userId: Number(JSON.parse(localStorage.getItem("AuthData")).token),
      userName: UserData.name,
      userImage:
        UserData.avatar ||
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgv3.fotor.com%2Fimages%2Fblog-cover-image%2F10-profile-picture-ideas-to-make-you-stand-out.jpg&tbnid=Sftxv-XsWOqEQM&vet=12ahUKEwjOl6md_-X9AhWZ5nMBHbMKCHIQMygTegUIARCEAg..i&imgrefurl=https%3A%2F%2Fwww.fotor.com%2Fblog%2Fprofile-picture-ideas%2F&docid=ZDKJjCOmeX62ZM&w=4500&h=2532&q=profile%20photo&ved=2ahUKEwjOl6md_-X9AhWZ5nMBHbMKCHIQMygTegUIARCEAg",
      post: posttext,
      imageUrl: imageUrl,
      date: formatDate(Date()),
      completeDate: Date(),
      comment: 0,
      share: 0,
    })
    setImageUrl("")
    setPostText("")
    handleCloseModal()
  }
  const handleCloseModal = () => {
    setIsOpe(false)
  }
  const handlemenuchange = (e) => {
    // console.log(e)
    setMenui(e)
  }
  let photoData = useSelector((storeData) => {
    return storeData.UserReducer
  })
  return (
    <Box p="4" bg={useColorModeValue('white', "rgb(38,38,38)") } m="auto" w="40%" shadow="md" borderWidth="1px" marginTop="2">
      <Flex direction="column" gap="1">
        <Flex gap="2">
          <Avatar
            size="md"
            name="Maharsh"
            src={
              photoData.avatar
                ? photoData.avatar
                : "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"
            }
          />
          <Button
            onClick={handleOpenModal1}
            sx={{ justifyContent: "flex-start" }}
            w="100%"
            borderRadius="20"
            border="1px solid gray"
            bg={useColorModeValue('white', "rgb(38,38,38)") }
          >
            <Text fontWeight="light" color="gray">
              What do you want to ask or share?
            </Text>
          </Button>
        </Flex>
        <ButtonGroup spacing="10px">
          <Button onClick={handleOpenModal1} bg={useColorModeValue('white', "rgb(38,38,38)") } w="33.33%">
            <Icon boxSize="6" fontWeight="bold" viewBox="0 0 24 24" color="red.500">
              <path
                fill="none"
                stroke="rgb(168,170,173)"
                fillRule="evenodd"
                d="M7.5 4h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3L9 22v-3H7.5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
              />
            </Icon>
            <Text fontWeight="bold" color={useColorModeValue('rgb(99,100,102)', "rgb(168,170,173)") } fontSize="l">
              Ask
            </Text>
          </Button>
          <Center height="30px">
            <Divider orientation="vertical" />
          </Center>
          <Button
            bg={useColorModeValue('white', "rgb(38,38,38)") }
            w="33.33%"
            onClick={() => {
              navigate("/answer")
            }}
          >
            <Icon boxSize="6" viewBox="0 0 24 24" color="red.500">
              <path
                fill="none"
                stroke="rgb(168,170,173)"
                fillRule="evenodd"
                d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z"
              />
              <path
                fill="#666"
                stroke="rgb(168,170,173)"
                d="m4.429 19.571 2.652-.884-1.768-1.768z"
              ></path>
              <path d="M14.5 19.5h5v-5m-10-10h-5v5" stroke="#666"></path>
            </Icon>
            <Text fontWeight="bold" color={useColorModeValue('rgb(99,100,102)', "rgb(168,170,173)") } fontSize="l">
              Answer
            </Text>
          </Button>
          <Center height="30px">
            <Divider orientation="vertical" />
          </Center>
          <Button onClick={handleOpenModal2} bg={useColorModeValue('white', "rgb(38,38,38)") } w="33.33%">
            <Icon boxSize="6" viewBox="0 0 24 24" color="red.500">
              <path
                fill="none"
                stroke="rgb(168,170,173)"
                fillRule="evenodd"
                d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z"
              />
            </Icon>
            <Text fontWeight="bold" color={useColorModeValue('rgb(99,100,102)', "rgb(168,170,173)") } fontSize="l">
              Post
            </Text>
          </Button>
        </ButtonGroup>
      </Flex>
      <Center>
        <Modal
          isCentered={true}
          isOpen={isOpe}
          onClose={() => setIsOpe(false)}
          size="4xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <Tabs index={activeTab} onChange={handleTabChange}>
              <TabList>
                <Tab
                  borderBottom={
                    activeTab === 0 && `2px solid ${activeTabColor}`
                  }
                >
                  <Text fontWeight="bold">Add Question</Text>
                </Tab>
                <Tab
                  borderBottom={
                    activeTab === 1 && `2px solid ${activeTabColor}`
                  }
                >
                  <Text fontWeight="bold">Create Post</Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <form onSubmit={handleSubmit1}>
                    <ModalBody>
                      <FormControl h="300px">
                        <FormLabel fontWeight="bold" fontSize="lg">
                          <Avatar
                            size="sm"
                            name="Maharsh"
                            src={
                              photoData.avatar
                                ? photoData.avatar
                                : "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"
                            }
                          />
                          <Menu>
                            <MenuButton
                              as={Button}
                              rightIcon={<ChevronDownIcon />}
                            >
                              {menui}
                            </MenuButton>
                            <MenuList>
                              <MenuItem
                                value="Public"
                                onClick={(e) => {
                                  handlemenuchange(e.target.value)
                                }}
                              >
                                Public
                              </MenuItem>
                              <MenuItem
                                value="Limited"
                                onClick={(e) => {
                                  handlemenuchange(e.target.value)
                                }}
                              >
                                Limited
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </FormLabel>
                        <Textarea
                          width="100%"
                          height="450px"
                          rows="1"
                          placeholder='Start your question with "What", "How", "Why", etc.'
                          autocomplete="off"
                          role="combobox"
                          aria-controls="selector:23"
                          aria-haspopup="listbox"
                          aria-expanded="true"
                          boxSizing="border-box"
                          boxShadow="none"
                          bg="transparent"
                          p="0px"
                          outline="none"
                          border="none"
                          flex="1 1 0%"
                          minHeight="26px"
                          overflow="hidden"
                          overflowWrap="break-word"
                          h="50px"
                          lineHeight="1.4"
                          fontSize="18px"
                          resize="none"
                          writing-mode="horizontal-tb"
                          focusBorderColor="transparent"
                          value={text}
                          onChange={(e) => {
                            // console.log("abcd", e.target.value)
                            handleTextChange(e.target.value)
                          }}
                        ></Textarea>
                      </FormControl>
                    </ModalBody>
                    <Divider />
                    <ModalFooter
                      sx={{ justifyContent: "flex-end", alignItems: "end" }}
                    >
                      <ButtonGroup spacing="5">
                        <Button
                          onClick={handleCloseModal}
                          variant="unstyled"
                          size="lg"
                          fontWeight="light"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          colorScheme="blue"
                          size="lg"
                          fontWeight="light"
                          borderRadius="full"
                        >
                          Add Question
                        </Button>
                      </ButtonGroup>
                    </ModalFooter>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form onSubmit={handleSubmit2}>
                    <ModalBody style={{}}>
                      <FormControl h="300px">
                        <FormLabel fontWeight="bold" fontSize="lg">
                          <Flex gap="2" direction="row">
                            <Avatar
                              size="md"
                              name="Maharsh"
                              src={
                                photoData.avatar
                                  ? photoData.avatar
                                  : "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"
                              }
                            />
                            <Flex direction="column">
                              <Text fontWeight="bold">{photoData.name}</Text>
                              <Menu>
                                <MenuButton
                                  size="sm"
                                  as={Button}
                                  rightIcon={<ChevronDownIcon />}
                                >
                                  <Text fontWeight="light">Credentials</Text>
                                </MenuButton>
                              </Menu>
                            </Flex>
                          </Flex>
                        </FormLabel>
                        <ReactQuill
                          theme="snow"
                          value={posttext}
                          onChange={setPostText}
                          placeholder="Say Something..."
                          height="350px"
                        />
                      </FormControl>
                    </ModalBody>
                    <Divider />
                    <ModalFooter
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        padding: "0",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <InputGroup
                        style={{
                          height: "100px",
                          alignItems: "flex-end",
                          justifyContent: "right",
                          width: "100%",
                        }}
                      >
                        <Input
                          ref={whatsup}
                          type="file"
                          display="none"
                          onChange={handleImageUpload}
                        />
                        <div>
                          <IconButton
                            icon={<FiUpload />}
                            aria-label="Upload file"
                            variant="outline"
                            cursor="pointer"
                            onClick={handlechange}
                          />
                        </div>
                        <Spacer />
                        <Button
                          type="submit"
                          colorScheme="blue"
                          size="lg"
                          fontWeight="light"
                          borderRadius="full"
                        >
                          Post
                        </Button>
                      </InputGroup>
                      <Box
                        className="twerk_bottom"
                        ref={sexyLagraTha}
                        w="100%"
                        bg="red"
                        position="sticky"
                        left="0"
                      >
                        <p>abc</p>
                      </Box>
                    </ModalFooter>
                  </form>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalContent>
        </Modal>
      </Center>
    </Box>
  )
}
