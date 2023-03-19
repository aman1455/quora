import SpacesPageTop from "./SpacesPageTop"
import { Box } from "@chakra-ui/react"
import SpacePageCards from "./SpacePageCards"
import Navbar from "../NavbarAndSidebar/Navbar"
function SpacePageComp() {
  return (
    <Box>
      <Navbar/>
      <SpacesPageTop />
      <SpacePageCards/>
    </Box>
  )
}

export default SpacePageComp
