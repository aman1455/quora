import SpacesPageTop from "./SpacesPageTop"
import { Box,useColorModeValue } from "@chakra-ui/react"
import SpacePageCards from "./SpacePageCards"
import Navbar from "../NavbarAndSidebar/Navbar"
function SpacePageComp() {
  return (
    <Box  bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }>
      <Navbar/>
      <SpacesPageTop />
      <SpacePageCards/>
    </Box>
  )
}

export default SpacePageComp
