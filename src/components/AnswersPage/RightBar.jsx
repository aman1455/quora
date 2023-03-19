import {
  Box,
  Text,
  Flex,
  Img,
  Icon,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import { useDisclosure, FormControl, Input } from "@chakra-ui/react"
import React from "react"
function RightBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  return (
    <Box>
      <Box
        display="flex"
        justifyContent={"space-between"}
        pt="3px"
        ml="20px"
        w="70%"
        borderBottom="1px solid rgb(222,224,225)"
        alignItems={"center"}
      >
        <Box>Topics you know about</Box>
        <Box>
          <Button
            size="sm"
            borderRadius="100%"
            variant="outline"
            onClick={onOpen}
          >
            <Icon viewBox="0 0 24 24" boxSize={4}>
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z"
                  class="icon_svg-stroke"
                  stroke="#666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  class="icon_svg-fill_as_stroke"
                  fill="#666"
                  d="m4.429 19.571 2.652-.884-1.768-1.768z"
                ></path>
              </g>
            </Icon>
          </Button>
          <>
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
              size={"2xl"}
              isCentered
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader fontsize="18px" color="#282829">
                  Topics you know about
                  <Text fontSize="15px" mt={4} color="#636466" fontWeight="300">
                    Topics are how Quora knows what questions to send your way.
                    Be as comprehensive and specific as possible to get the most
                    relevant questions.
                  </Text>
                </ModalHeader>

                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <Input ref={initialRef} placeholder="Add Topic" />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blackAlpha" variant="outline" mr={3}>
                    Add Topic
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        </Box>
      </Box>
      <Box ml="20px" width="70%">
        <Flex direction="column">
          <Box
            p="10px"
            borderRadius="10px"
            _hover={{ background: "rgb(228,230,230)" }}
          >
            <Text _hover={{ textDecoration: "underline" }}>Electronics</Text>
          </Box>
          <Box
            p="10px"
            borderRadius="10px"
            _hover={{ background: "rgb(228,230,230)" }}
          >
            <Text _hover={{ textDecoration: "underline" }}>Mechanical</Text>
          </Box>
          <Box
            p="10px"
            borderRadius="10px"
            _hover={{ background: "rgb(228,230,230)" }}
          >
            <Text _hover={{ textDecoration: "underline" }}>Music</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
export default RightBar
