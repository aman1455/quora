import { Box, Flex, GridItem, HStack, Grid } from "@chakra-ui/react"
import RightBar from "./RightBar"
import AnswerPageSideBar from "./Answer page"
import MiddleBar from "./MiddleBar"
function AnswerPageApp() {
  return (
    <Box w="100%" bg="#f1f2f2">
      <AnswerPageSideBar />
      <MiddleBar />
    </Box>
  )
}

export default AnswerPageApp
