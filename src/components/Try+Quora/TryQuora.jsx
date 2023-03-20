import React from "react"
import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Tab,
  Flex,
  Heading,
  Box,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  RadioGroup,
  Stack,
  Radio,
  Spacer,
  Card,
  Center,
  useToast,useColorModeValue
} from "@chakra-ui/react"

import { RiDoorLockBoxFill } from "react-icons/ri"
import { HiCurrencyDollar } from "react-icons/hi"
import { BiCreditCardFront } from "react-icons/bi"

export default function Tryquora() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [value, setValue] = React.useState("1")
  const toast = useToast()
  const showpopup = () => {
    toast({
      title: "Account created.",
      description: "Please use for 30Days Only.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    })
  }
  return (
    <>
      <Center>
        <Button
          color={useColorModeValue('#666666', "rgb(177,179,182)") }
          border={"1px solid rgb(224,224,224)"}
          size="sm"
          colorScheme="white"
          borderRadius={"15px"}
          _hover={{
            background: "rgb(228,230,230)",
            color: "teal.500",
          }}
          onClick={onOpen}
        >
          Try Quora+
        </Button>

        <Modal  isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalOverlay />
          <ModalContent   bg={useColorModeValue('white', "rgb(24,24,24)") }>
            <ModalHeader>
              <Center>
                <Image w="20%" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.subscriptions.quora_plus_identity_lightmode.png-26-2802edbeb349c0f5.png" />
              </Center>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <Image
                  borderRadius="full"
                  boxSize="80px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Center>
              <Center>
                <Heading size="md">Join Quora+</Heading>
              </Center>

              <Center>
                <Flex mt="20px">
                  <Card
                    w="170px"
                    h="100px"
                    border="1px solid black"
                    mr="10px"
                    p="5px"
                    bg="#faf9e9"
                  >
                    <Flex mt="2px">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtJieoET2TxpWE-aK1hieZHIBOediN8KiKA&usqp=CAU"
                        w="35px"
                        h="35px"
                      />
                    </Flex>
                    <Flex >
                      <Text color="black">Browse Quora ad‑free</Text>
                    </Flex>
                  </Card>
                  <Card
                    w="170px"
                    h="100px"
                    border="1px solid black"
                    mr="10px"
                    p="5px"
                    bg="#faf9e9"
                  >
                    <Flex mt="6px">
                      <RiDoorLockBoxFill size="40px" color="#FF0000" />
                    </Flex>
                    <Flex>
                      <Text color="black">Unlock millions of answers</Text>
                    </Flex>
                  </Card>
                  <Card
                    w="170px"
                    h="100px"
                    border="1px solid black"
                    p="5px"
                    bg="#faf9e9"
                  >
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RRqbXt4139id6vcyOY50l4M6J4djr3MjEQ&usqp=CAU"
                      w="35px"
                      h="35px"
                      mt="10px"
                      color="#FF0000"
                    />
                    <Flex>
                      <Text color="black">Try it free for 30 days</Text>
                    </Flex>
                  </Card>
                </Flex>
              </Center>
              <Center>
                <Flex mt="10px" gap="8px" pt="10px">
                  <Box h="50px" w="265px" border="1px solid blue" p="2px">
                    <Radio isChecked={true}>
                      <Flex gap="8px">
                        <Heading size="xs">Yearly</Heading>
                        <Button
                          size="xs"
                          borderRadius="xl"
                          bg=" blue.500"
                          color="white"
                        >
                          Save 43%
                        </Button>
                      </Flex>
                      <Text fontSize="xs">$3.99/mo</Text>
                    </Radio>
                  </Box>
                  <Box h="50px" w="265px" border="1px solid grey">
                    <Radio isChecked={true}>
                      <Flex gap="8px">
                        <Heading size="xs">Monthly</Heading>
                      </Flex>
                      <Text fontSize="xs">$6.99/mo</Text>
                    </Radio>
                  </Box>
                </Flex>
              </Center>
              <Center>
                <Box h="150px" w="540px" mt="15px" p="5px">
                  <Flex>
                    <Heading size="xs">30-Days free trail</Heading>
                    <Spacer />
                    <Text>$0.00</Text>
                  </Flex>
                  <Flex mt="10px">
                    <Text>Starting April 18, 2023</Text>
                    <Spacer />
                    <Text>$6.99/mo</Text>
                  </Flex>
                  <Text color="grey" fontSize="xs" mt="5px">
                    Your subscription will renew automatically each month.
                    Cancel atany time in settings. By signing up for a
                    subscription, you agree to Quora's Subscriber Terms of
                    Service.
                  </Text>
                </Box>
              </Center>
              <Center>
                <Box
                  as="button"
                  h="40px"
                  w="540px"
                  bg="rgb(0,112,186)"
                  borderRadius="md"
                  mt="-30px"
                >
                  <Center>
                    <Heading size="md" color="white">
                      PayPal
                    </Heading>
                  </Center>
                </Box>
              </Center>
              <Center>
                <Flex mb="10px">
                  _______________________________________
                  <Text direction="row" color={"rgb(120,122,123)"}>OR</Text>
                  _______________________________________
                </Flex>
              </Center>

              <Center>
                <Card w="540px" h="40px" border="1px solid blue" padding="5px">
                  <Flex>
                    <Center>
                      <BiCreditCardFront />
                      <Text color="grey" mr="10px">
                        Card number
                      </Text>
                    </Center>
                    <Spacer />
                    <Text>MM/YY CVC</Text>
                  </Flex>
                </Card>
              </Center>
              <Center>
                <Box w="540px" h="50px" padding="5px">
                  <Text fontSize="xs">
                    Existing subscriptions will also be charged to this card.
                    You may receive a temporary authorization charge to validate
                    your card. Learn more.
                  </Text>
                </Box>
              </Center>
            </ModalBody>
            <Center>
              <ModalFooter>
                <Box
                  as="button"
                  h="35px"
                  w="540px"
                  bg="rgb(40,125,255)"
                  borderRadius="50px"
                  mt="-20px"
                  color="white"
                  onClick={() => {
                    showpopup()
                    onClose()
                  }}
                >
                  <Center>
                    <Heading size="sm">Try 30 Days Free</Heading>
                  </Center>
                </Box>
              </ModalFooter>
            </Center>
          </ModalContent>
        </Modal>
      </Center>
    </>
  )
}
