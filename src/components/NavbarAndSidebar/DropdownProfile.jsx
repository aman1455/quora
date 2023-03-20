import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  Image,
  MenuItem,
  MenuDivider,
  Text,
  Icon,
  IconButton,
  Wrap,
  Box,
  WrapItem,
  Avatar,
  useColorMode,useColorModeValue
} from "@chakra-ui/react"
import Navbar from "./Navbar"
import { SunIcon } from "@chakra-ui/icons"

import { NavLink } from "react-router-dom"
function DropdownProfile() {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let data = useSelector((storeData) => {
    return storeData.UserReducer
  })
  const {  toggleColorMode } = useColorMode()
  let [state, setState] = useState(true)
   const bg = useColorModeValue("white", "black")
  return (
    <>
      <Menu hasArrow boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}>
        <MenuButton w={"65px"} as={Button} bg={useColorModeValue('white', "rgb(38,38,38)") }>
          <Wrap>
            <WrapItem>
              <Avatar
                size="sm"
                name="Dan Abrahmov"
                // src="https://qph.cf2.quoracdn.net/main-thumb-2120072729-200-lbkrcpzicfxffnlcrkguqzxwtmoaiwqj.jpeg"
                src={
                  data.avatar
                    ? data.avatar
                    : "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"
                }
              />
            </WrapItem>
          </Wrap>
        </MenuButton>

        <MenuList>
          <NavLink to="/profile">
            <MenuItem minH="48px">
              <Image
                boxSize="3rem"
                borderRadius="full"
                src={
                  data.avatar
                    ? data.avatar
                    : "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"
                }
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
            </MenuItem>
            <Text style={{ fontWeight: "bolder", fontSize: "20px" }} ml={4}>
              {data.name}
            </Text>
          </NavLink>

          <MenuDivider />

          <MenuItem h="45px">
            <Icon viewBox="0 0 40 30" boxSize={"50px"} color="red.500">
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M7 4.5h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3l-3.5 4v-4H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Zm13 8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v2l-2-2h-2"
                  class="icon_svg-stroke"
                  stroke-width="1.5"
                  stroke="#666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <g class="icon_svg-fill_as_stroke" fill="#666">
                  <circle cx="8" cy="10.5" r="1"></circle>
                  <circle cx="11" cy="10.5" r="1"></circle>
                  <circle cx="14" cy="10.5" r="1"></circle>
                </g>
              </g>
            </Icon>
            <Text>Messagees</Text>
          </MenuItem>
          <MenuItem h="45px">
            <Icon viewBox="0 0 40 30" boxSize={"50px"} color="red.500">
              <path
                d="M3 9.5 17 5v12L3 12.5v-3Zm4.853 4.56L9.5 19H7l-1.947-5.84 2.8.9ZM19.5 7.5l2-1-2 1Zm0 3.5H22h-2.5Zm0 3.5 2 1-2-1ZM8 10.4l6-1.9-6 1.9Z"
                class="icon_svg-stroke"
                stroke="#666"
                stroke-width="1.5"
                fill="none"
                stroke-linejoin="round"
              ></path>
            </Icon>
            <Text>Create Ad</Text>
          </MenuItem>

          <MenuItem h="45px">
            <Icon viewBox="0 0 40 30" boxSize={"50px"} color="red.500">
              <path
                d="M11.5 4v16m3.75-13H9.625C8.175 7 7 8.12 7 9.5S8.175 12 9.625 12h3.75C14.825 12 16 13.12 16 14.5S14.825 17 13.375 17H7"
                class="icon_svg-stroke"
                stroke="#666"
                stroke-width="1.5"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </Icon>
            <Text>Monetization</Text>
          </MenuItem>
          <MenuItem h="45px">
            <Icon viewBox="0 0 40 30" boxSize={"50px"} color="red.500">
              <path
                d="M5 12h3v8H5v-8Zm5.5-8h3v16h-3V4ZM16 7h3v13h-3V7Z"
                class="icon_svg-stroke icon_svg-fill"
                stroke-width="1.5"
                stroke="#666"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </Icon>
            <Text>Your content & stats</Text>
          </MenuItem>
          <MenuItem h="45px">
            <Icon viewBox="0 0 40 30" boxSize={"50px"} color="red.500">
              <g
                class="icon_svg-stroke"
                stroke-width="1.5"
                stroke="#666"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  class="icon_svg-fill"
                  d="m10.501 16-5.499 4L5 8h11v12z"
                ></path>
                <path d="M8 5.923V5h11v12l-.997-.725"></path>
              </g>
            </Icon>
            <Text>Bookmarks</Text>
          </MenuItem>

          <MenuItem h="45px">
            <Icon viewBox="0 0 40 30" boxSize={"50px"} color="red.500">
              <path
                d="M20.743 10.757h0a1.5 1.5 0 0 1 0 2.122l-5.728 5.727-2.756.638.635-2.76 5.727-5.727a1.5 1.5 0 0 1 2.122 0Zm-3.182 1.061 2.121 2.121M9 19H5V5h13v3M8 9h7m-7 3h5.5M8 15h2.5"
                class="icon_svg-stroke"
                stroke-width="1.5"
                stroke="#666"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </Icon>
            <Text>Drafts</Text>
          </MenuItem>
          <MenuItem h="45px">
            <Icon viewBox="0 0 40 30" boxSize={"50px"} color="red.500">
              <path
                class="icon_svg-fill_as_stroke"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 12.889h2.444a6.668 6.668 0 0 1 6.667 6.667V22h1.778v-2.444a6.668 6.668 0 0 1 6.667-6.667H22V11.11h-2.444a6.668 6.668 0 0 1-6.667-6.667V2H11.11v2.444a6.668 6.668 0 0 1-6.667 6.667H2v1.778Z"
                fill="#636466"
              ></path>{" "}
            </Icon>
            <Text>Try Quora+</Text>
          </MenuItem>

          <MenuDivider />
          <MenuItem h="45px">
            <IconButton
              colorScheme="white"
              color="rgb(185,43,39)"
              fontSize="25"
              aria-label="Search database"
              icon={<SunIcon />}
            />

            <Box
              display={"flex"}
              fontSize={"13px"}
              alignItems={"center"}
              w={"150px"}
              justifyContent={"space-between"}
            >
              <Text as={"button"} onClick={()=>{
                toggleColorMode()
                setState(!state)
              }}>Dark mode</Text>
              <Text fontWeight={"bold"} color="red">{state  ? "Off" : "On"}</Text>
            </Box>
          </MenuItem>
          <MenuItem h="45px">
            <Text>Setting</Text>
          </MenuItem>
          <MenuItem h="45px">
            <Text>Languages</Text>
          </MenuItem>
          <MenuItem h="45px">
            <Text>Help</Text>
          </MenuItem>
          <MenuItem
            h="45px"
            onClick={() => {
              dispatch({
                type: "AuthOut",
              })
              navigate("/login")
            }}
          >
            <Text>Logout</Text>
          </MenuItem>
        </MenuList>
      </Menu>
      {/* <Navbar toggleColorMode={toggleColorMode} bg={bg}/> */}
    </>
    // Your content & stats
  )
}

export default DropdownProfile
