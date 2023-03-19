import React from "react"
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Text,
  Button,
  Stack,
  Card,
  CardHeader,
  Divider,
  Center,
} from "@chakra-ui/react"
import { PlusSquareIcon, EmailIcon } from "@chakra-ui/icons"
import { useDispatch } from "react-redux"

export default function SpacesPageTop() {
  return (
    <Box bg="#f1f2f2">
      <Flex
        paddingLeft="7%"
        paddingTop="3%"
        paddingRight="7%"
        bg="#f1f2f2"
        boxShadow="sm"
      >
        <Box bg="white" w="75%" h="150px" boxShadow="sm" p={5}>
          <Flex
            box-sizing="border-box"
            backgroundImage="url('https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.tribe_welcome_banner_full.png-26-64d500fd69494b66.png')"
            bgPosition="right bottom"
            backgroundSize="350px 120px"
            backgroundRepeat="no-repeat"
          >
            <Box>
              <Text fontSize="xl" fontWeight="medium" marginTop="10px">
                Welcome to Spaces!
              </Text>
              <Text fontSize="sm" color="#636466">
                Follow Spaces to explore your interests on Quora.
              </Text>
              <Stack direction="row" spacing={4} paddingTop="20px">
                <Button
                  leftIcon={<PlusSquareIcon color="#2e69ff" />}
                  colorScheme="blue"
                  variant="outline"
                  borderRadius="20"
                  height="28px"
                >
                  Create a Space
                </Button>
                <Button
                  leftIcon={<PlusSquareIcon color="#2e69ff" />}
                  colorScheme="blue"
                  variant="outline"
                  borderRadius="20"
                  height="28px"
                >
                  Discover Spaces
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Card bg="white" w="22%" h="150px">
          <Box h="30px" display={"flex"} alignItems="center">
            <Box pl={4}>
              <Text fontSize="15px" color="#282829" fontWeight="500">
                Pending Invites
              </Text>
            </Box>
          </Box>
          <Divider orientation="horizontal" color="gray" />
          <Center paddingTop="30px" display={"grid"}>
            <Box display="flex" flexDirection={"column"}>
              <Box w="50px" display="grid">
                <Box m="auto">
                  <EmailIcon color="gray" />
                </Box>
              </Box>
              <Text color="gray" fontSize="13px">
                No invites
              </Text>
            </Box>
          </Center>
        </Card>
      </Flex>
      <Box bg="#f1f2f2">
        <Heading as="h4" size="md" paddingTop="30px">
          Discover Spaces
        </Heading>
        <Text fontSize="sm" fontWeight="medium" paddingTop="15px">
          Spaces you might like
        </Text>
      </Box>
    </Box>
  )
}
