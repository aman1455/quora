import React, { useState, useEffect } from "react"
import Tryquora from "../Try+Quora/TryQuora"
import {
  Box,
  HStack,
  IconButton,
  Image,
  Input,
  Button,
  Tooltip,
  Icon,
  InputRightElement,
  InputGroup,
  
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,useColorModeValue
} from "@chakra-ui/react"
import { HiHome } from "react-icons/hi"
// import { useRef } from "react";
import { Search2Icon } from "@chakra-ui/icons"
import { NavLink } from "react-router-dom"
import DropdownProfile from "./DropdownProfile"
import NavGlobComp from "./NavGlobComp"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
function Navbar() {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let [searchResults, setSearchResults] = useState([])
  useEffect(() => {
    let IdData = JSON.parse(localStorage.getItem("AuthData")).token
    // console.log(IdData + "Hello")
    axios.get(`http://localhost:8080/users/${IdData}`).then((res) => {
      // console.log(res.data)
      dispatch({
        type: "user_data",
        payload: res.data,
      })
    })
  }, [])

  function searchItems(value) {
    if (value !== "") {
      axios.get(`http://localhost:8080/questions`).then((res) => {
        let arr = res.data.filter((e, i) => {
          if (e.question.toLowerCase().includes(value.toLowerCase())) {
            return e
          }
        })
        setSearchResults(arr)
        console.log(arr)
      })
    } else {
      setSearchResults([])
    }
  }
 
  return (
    <>
      <HStack
        style={{ position: "sticky", top: "0" }}
        bg={useColorModeValue('white', "rgb(38,38,38)") }
        h={"6.5vh"}
        zIndex="200"
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          w={"72%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          className="icon1"
        >
          <Box w={"10%"}>
            <NavLink to="/">
              <Image
                src="https://www.vectorlogo.zone/logos/quora/quora-ar21.svg"
                alt="quora"
                w={"100%"}
              />
            </NavLink>
          </Box>
          <Box display={"flex"} width={"25%"} justifyContent={"space-between"}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(185,43,39)" : "rgb(99,100,102)",
              })}
            >
              <Tooltip
                hasArrow
                bg="white"
                fontSize={"12px"}
                textAlign={"center"}
                w={"70px"}
                borderRadius={"20px"}
                p={"10px"}
                color="black"
                label="Home"
                aria-label="A tooltip"
              >
                <Box w="40px" h="45px">
                  <IconButton
                    colorScheme="white"
                    color="rgb(185,43,39)"
                    fontSize="30"
                    aria-label="Search database"
                    icon={<HiHome />}
                  />
                </Box>
              </Tooltip>
            </NavLink>

            <NavLink to="/following">
              <Tooltip
                hasArrow
                bg="white"
                fontSize={"12px"}
                textAlign={"center"}
                borderRadius={"20px"}
                p={"10px"}
                color="black"
                label="Following"
                aria-label="A tooltip"
              >
                <Box w="40px" h="45px">
                  <Icon viewBox="0 0 40 30" boxSize={"50px"} color="red.500">
                    <path
                      d="M7.46001 9.04001C6.26001 9.04001 5.29001 8.07001 5.29001 6.87001C5.29001 5.67001 6.26001 4.70001 7.46001 4.70001C8.66001 4.70001 9.63001 5.67001 9.63001 6.87001C9.63001 8.07001 8.65001 9.04001 7.46001 9.04001ZM7.46001 6.20001C7.09001 6.20001 6.79001 6.50001 6.79001 6.87001C6.79001 7.24001 7.09001 7.54001 7.46001 7.54001C7.83001 7.54001 8.13001 7.24001 8.13001 6.87001C8.13001 6.50001 7.83001 6.20001 7.46001 6.20001Z"
                      // fill="#666666"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M18.41 7.39001H12.22C11.81 7.39001 11.47 7.05001 11.47 6.64001C11.47 6.23001 11.81 5.89001 12.22 5.89001H18.41C18.82 5.89001 19.16 6.23001 19.16 6.64001C19.16 7.05001 18.82 7.39001 18.41 7.39001Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M18.41 14.72H12.22C11.81 14.72 11.47 14.38 11.47 13.97C11.47 13.56 11.81 13.22 12.22 13.22H18.41C18.82 13.22 19.16 13.56 19.16 13.97C19.16 14.38 18.82 14.72 18.41 14.72Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M18.41 18.38H12.22C11.81 18.38 11.47 18.04 11.47 17.63C11.47 17.22 11.81 16.88 12.22 16.88H18.41C18.82 16.88 19.16 17.22 19.16 17.63C19.16 18.04 18.82 18.38 18.41 18.38Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M18.41 11.06H12.22C11.81 11.06 11.47 10.72 11.47 10.31C11.47 9.9 11.81 9.56 12.22 9.56H18.41C18.82 9.56 19.16 9.9 19.16 10.31C19.16 10.72 18.82 11.06 18.41 11.06Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M7.44999 11.23L7.81999 11.87L8.18999 12.51H7.44999H6.71999L7.08999 11.87L7.44999 11.23ZM7.44999 9.73001C6.90999 9.73001 6.41999 10.02 6.14999 10.48L5.77999 11.12L5.40999 11.76C5.13999 12.22 5.13999 12.8 5.40999 13.26C5.68999 13.72 6.17999 14 6.71999 14H7.45999H8.19999C8.73999 14 9.22999 13.71 9.49999 13.25C9.76999 12.79 9.76999 12.21 9.49999 11.75L9.12999 11.11L8.75999 10.47C8.48999 10.02 7.98999 9.73001 7.44999 9.73001Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M8.81001 19.07H6.10001C5.69001 19.07 5.35001 18.73 5.35001 18.32V15.61C5.35001 15.2 5.69001 14.86 6.10001 14.86H8.81001C9.22001 14.86 9.56001 15.2 9.56001 15.61V18.32C9.56001 18.73 9.22001 19.07 8.81001 19.07ZM6.85001 17.57H8.06001V16.36H6.85001V17.57Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M18.5 21.75H5.5C3.71 21.75 2.25 20.29 2.25 18.5V5.5C2.25 3.71 3.71 2.25 5.5 2.25H18.5C20.29 2.25 21.75 3.71 21.75 5.5V18.5C21.75 20.29 20.29 21.75 18.5 21.75ZM5.5 3.75C4.54 3.75 3.75 4.54 3.75 5.5V18.5C3.75 19.46 4.54 20.25 5.5 20.25H18.5C19.46 20.25 20.25 19.46 20.25 18.5V5.5C20.25 4.54 19.46 3.75 18.5 3.75H5.5Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                  </Icon>
                </Box>
              </Tooltip>
            </NavLink>

            <NavLink to="/answer">
              <Tooltip
                hasArrow
                bg="white"
                fontSize={"12px"}
                textAlign={"center"}
                borderRadius={"20px"}
                p={"10px"}
                color="black"
                label="Answer"
                aria-label="A tooltip"
              >
                <Box w="40px" h="45px">
                  <Icon viewBox="0 0 40 30" boxSize={"50px"} color="red.500">
                    <path
                      d="M20.45 6.28001C20.45 5.55001 20.17 4.87001 19.65 4.35001C18.62 3.32001 16.83 3.32001 15.8 4.35001L5.17 14.98C5.09 15.06 5.03 15.16 4.99 15.27L3.6 19.46C3.51 19.73 3.58 20.03 3.78 20.23C3.92 20.37 4.11 20.45 4.31 20.45C4.39 20.45 4.47 20.44 4.55 20.41L8.74 19.01C8.85 18.97 8.95 18.91 9.03 18.83L19.65 8.21001C20.16 7.69001 20.45 7.01002 20.45 6.28001ZM18.59 7.15001L8.09 17.65L6.33 18.24L5.77 17.68L6.35 15.92L16.85 5.42001C17.31 4.96001 18.12 4.96001 18.58 5.42001C18.81 5.65001 18.94 5.96001 18.94 6.29001C18.94 6.62001 18.82 6.92001 18.59 7.15001Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M20.5 11.75C20.09 11.75 19.75 12.09 19.75 12.5V19.75H12.5C12.09 19.75 11.75 20.09 11.75 20.5C11.75 20.91 12.09 21.25 12.5 21.25H20.5C20.91 21.25 21.25 20.91 21.25 20.5V12.5C21.25 12.09 20.91 11.75 20.5 11.75Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M4.25 11.5V4.25H11.5C11.91 4.25 12.25 3.91 12.25 3.5C12.25 3.09 11.91 2.75 11.5 2.75H3.5C3.09 2.75 2.75 3.09 2.75 3.5V11.5C2.75 11.91 3.09 12.25 3.5 12.25C3.91 12.25 4.25 11.91 4.25 11.5Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                  </Icon>
                </Box>
              </Tooltip>
            </NavLink>

            <NavLink to="/spaces">
              <Tooltip
                hasArrow
                bg="white"
                fontSize={"12px"}
                textAlign={"center"}
                borderRadius={"20px"}
                p={"10px"}
                color="black"
                label="Spaces"
                aria-label="A tooltip"
              >
                <Box
                  // border={'2px solid red'}
                  w="40px"
                  h="45px"
                >
                  <Icon viewBox="0 0 40 30" boxSize={"50px"} color="red.500">
                    <path
                      d="M15.87 8.16C14.63 8.16 13.62 7.15 13.62 5.91C13.62 4.67 14.63 3.66 15.87 3.66C17.11 3.66 18.12 4.67 18.12 5.91C18.12 7.15 17.11 8.16 15.87 8.16ZM15.87 5.16C15.46 5.16 15.12 5.5 15.12 5.91C15.12 6.32 15.46 6.66 15.87 6.66C16.28 6.66 16.62 6.32 16.62 5.91C16.62 5.5 16.28 5.16 15.87 5.16Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M10.45 6.33C9.21 6.33 8.2 5.32 8.2 4.08C8.2 2.84 9.21 1.83 10.45 1.83C11.69 1.83 12.7 2.84 12.7 4.08C12.7 5.32 11.69 6.33 10.45 6.33ZM10.45 3.33C10.04 3.33 9.7 3.67 9.7 4.08C9.7 4.49 10.04 4.83 10.45 4.83C10.86 4.83 11.2 4.5 11.2 4.08C11.2 3.66 10.86 3.33 10.45 3.33Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M5.60001 10.33C4.36001 10.33 3.35001 9.31999 3.35001 8.07999C3.35001 6.83999 4.36001 5.82999 5.60001 5.82999C6.84001 5.82999 7.85001 6.83999 7.85001 8.07999C7.85001 9.31999 6.84001 10.33 5.60001 10.33ZM5.60001 7.32999C5.19001 7.32999 4.85001 7.66999 4.85001 8.07999C4.85001 8.48999 5.19001 8.82999 5.60001 8.82999C6.01001 8.82999 6.35001 8.49999 6.35001 8.07999C6.35001 7.65999 6.01001 7.32999 5.60001 7.32999Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M17.19 20.65L11.12 8.09999C10.87 7.57999 10.02 7.57999 9.77 8.09999L8.41 10.91C8.86 11.22 9.23 11.6 9.54 12.01L10.44 10.15L15.31 20.22H10.44V20.97C10.44 21.23 10.44 21.48 10.4 21.72H16.5C16.76 21.72 17 21.59 17.14 21.37C17.28 21.15 17.3 20.88 17.19 20.65Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M15.87 8.95999C15.01 8.95999 14.19 9.12999 13.44 9.43999L14.1 10.8C14.65 10.58 15.25 10.45 15.87 10.45C18.56 10.45 20.75 12.64 20.75 15.33C20.75 17.12 19.76 18.68 18.32 19.53L18.54 20C18.7 20.33 18.79 20.63 18.86 20.98C20.87 19.91 22.25 17.79 22.25 15.35C22.25 11.83 19.39 8.95999 15.87 8.95999Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                    <path
                      d="M8.2 21.72H3C2.59 21.72 2.25 21.38 2.25 20.97V14.52C2.25 13.28 3.41 11.56 5.6 11.56C7.79 11.56 8.95 13.28 8.95 14.52V20.97C8.95 21.39 8.61 21.72 8.2 21.72ZM3.75 20.22H7.45V14.52C7.45 14.02 6.89 13.06 5.6 13.06C4.31 13.06 3.75 14.03 3.75 14.52V20.22Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                  </Icon>
                </Box>
              </Tooltip>
            </NavLink>

            <NavLink to="/notifications" style={({ isActive }) => ({})}>
              <Tooltip
                hasArrow
                bg="white"
                fontSize={"12px"}
                textAlign={"center"}
                borderRadius={"20px"}
                p={"10px"}
                color="black"
                label="Notifications"
                aria-label="A tooltip"
              >
                <Box w="40px" h="45px">
                  <Icon viewBox="0 0 40 30" boxSize={"50px"} color="red.500">
                    <path
                      d="M20.86 14.93L20.48 14.54C20.22 14.27 19.98 14 19.76 13.73C19.57 13.49 19.4 13.27 19.26 13.07C19.07 12.79 18.99 12.62 18.96 12.55C18.93 12.46 18.81 12.1 18.73 11.12C18.68 10.5 18.66 9.8 18.67 9.12C18.67 9.05 18.67 8.97 18.67 8.87C18.66 5.22 15.67 2.25 11.99 2.25C8.30999 2.25 5.31999 5.23 5.31999 8.89V9.11C5.32999 9.81 5.30999 10.51 5.25999 11.12C5.17999 12.09 5.06999 12.46 5.02999 12.54C4.99999 12.62 4.91999 12.78 4.72999 13.06C4.58999 13.26 4.42999 13.48 4.22999 13.72C4.01999 14 3.77999 14.27 3.51999 14.54L3.27999 14.79C3.22999 14.84 3.17999 14.89 3.15999 14.91C2.76999 15.28 2.54999 15.79 2.54999 16.32V17.1C2.54999 17.96 3.24999 18.65 4.10999 18.65H8.21999C8.56999 20.41 10.13 21.75 12 21.75C13.87 21.75 15.43 20.42 15.78 18.65H19.89C20.75 18.65 21.45 17.95 21.45 17.1V16.32C21.44 15.78 21.22 15.26 20.86 14.93ZM12 20.25C10.97 20.25 10.1 19.58 9.77999 18.65H14.22C13.9 19.58 13.03 20.25 12 20.25ZM19.88 17.15L4.05999 17.1V16.32C4.05999 16.2 4.10999 16.08 4.22999 15.97L4.60999 15.59C4.88999 15.29 5.15999 14.99 5.39999 14.7C5.62999 14.42 5.81999 14.16 5.98999 13.92C6.18999 13.62 6.33999 13.34 6.43999 13.11C6.58999 12.72 6.69999 12.1 6.76999 11.25C6.81999 10.59 6.83999 9.85 6.82999 9.08V8.9C6.82999 6.06 9.15999 3.75 12.01 3.75C14.86 3.75 17.19 6.05 17.19 8.87V9.08C17.18 9.83 17.2 10.58 17.25 11.24C17.32 12.08 17.42 12.71 17.58 13.1C17.67 13.34 17.82 13.61 18.03 13.91C18.19 14.15 18.39 14.41 18.62 14.69C18.86 14.98 19.13 15.28 19.41 15.58L19.82 15.99C19.91 16.08 19.96 16.19 19.96 16.32L19.88 17.15Z"
                      fill={useColorModeValue('#666666', "rgb(177,179,182)") }
                      class="icon_svg-fill_as_stroke"
                    ></path>
                  </Icon>
                </Box>
              </Tooltip>
            </NavLink>
          </Box>

          <Box w={"40%"} p={"10px"} display="flex">
            <Input
              focusBorderColor="black.500"
              type="text"
              placeholder="Search Quora"
              onChange={(e) => {
                searchItems(e.target.value)
              }}
            />
            <Menu>
              <MenuButton>
                <Button>
                  <Search2Icon color="black.300" />
                </Button>
              </MenuButton>

              <MenuList>
                {/* MenuItems are not rendered unless Menu is open */}
                {searchResults.length !== 0 ? (
                  <>
                    {searchResults.map((e, i) => {
                      return (
                        <MenuItem
                          onClick={() => {
                            navigate(`/answer/${e.id}`)
                          }}
                        >
                          {e.question}
                        </MenuItem>
                      )
                    })}
                  </>
                ) : (
                  <>
                    {" "}
                    <MenuItem>No Results</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Box>

          <Box
            display={"flex"}
            w={"15%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Tryquora />
            </Box>

            <Box>
              <DropdownProfile />
            </Box>

            <NavGlobComp />
          </Box>
        </Box>
      </HStack>
    </>
  )
}

export default Navbar
