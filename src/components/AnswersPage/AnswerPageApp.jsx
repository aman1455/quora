import { Box} from "@chakra-ui/react"
import AnswerPageSideBar from "./Answer page"
import MiddleBar from "./MiddleBar"
import Navbar from "../NavbarAndSidebar/Navbar"
function AnswerPageApp() {
  return (
    <>
  <Navbar/>
    <Box pt="30px" w="100%" bg="#f1f2f2">
      <AnswerPageSideBar />
      <MiddleBar />
    </Box>
    </>
  )
}

export default AnswerPageApp
