import React from "react"
import { useSelector } from "react-redux"

import {
  Heading,
  Box,
  Link,
  Flex,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Spacer,
  Center,
  Text,
} from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import { BiBriefcase, BiMap } from "react-icons/bi"
import { FiCalendar } from "react-icons/fi"
import { IoIosSchool } from "react-icons/io"
import { RiShareForwardLine } from "react-icons/ri"
import Navbar from "../NavbarAndSidebar/Navbar"

export default function Profile() {
  let data = useSelector((storeData) => {
    return storeData.UserReducer
  })
  return (
    <>
      <Navbar />
      <Center>
        <Box mt="45px">
          <Flex>
            <Flex mr="130px">
              <Box w="650px" h="150px">
                <Flex>
                  <Flex gap="50px" mb="20px">
                    <Image
                      borderRadius="full"
                      boxSize="100px"
                      src={
                        data.avatar
                          ? data.avatar
                          : "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png"
                      }
                      alt={data.name}
                    />
                    <Flex direction="column">
                      <Heading as="h3" size="lg">
                        {data.name}
                      </Heading>
                      <Link color="grey">Add profile credential</Link>
                      <Flex gap="10px">
                        <Link color="grey">0 followers</Link>
                        <Link color="grey">.0 following</Link>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Spacer />
                  <RiShareForwardLine size="25px" />
                </Flex>
                <Link color="grey">Write a description about yourself</Link>
                <Flex mb="40px" mt="20px">
                  <Tabs color="black">
                    <TabList>
                      <Tab
                        _selected={{
                          color: "brown",
                          borderBottom: "4px solid brown",
                        }}
                      >
                        Profile
                      </Tab>
                      <Tab
                        _selected={{
                          color: "brown",
                          borderBottom: "4px solid brown",
                        }}
                      >
                        {" "}
                        Answer
                      </Tab>
                      <Tab
                        _selected={{
                          color: "brown",
                          borderBottom: "4px solid brown",
                        }}
                      >
                        {" "}
                        Questions
                      </Tab>
                      <Tab
                        _selected={{
                          color: "brown",
                          borderBottom: "4px solid brown",
                        }}
                      >
                        {" "}
                        Posts
                      </Tab>
                      <Tab
                        _selected={{
                          color: "brown",
                          borderBottom: "4px solid brown",
                        }}
                      >
                        {" "}
                        Followers
                      </Tab>
                      <Tab
                        _selected={{
                          color: "brown",
                          borderBottom: "4px solid brown",
                        }}
                      >
                        Following
                      </Tab>
                      <Tab
                        _selected={{
                          color: "brown",
                          borderBottom: "4px solid brown",
                        }}
                      >
                        Edits
                      </Tab>
                      <Tab
                        _selected={{
                          color: "brown",
                          borderBottom: "4px solid brown",
                        }}
                      >
                        Activity
                      </Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        <Heading
                          as="h4"
                          size="xs"
                          borderBottom="1px solid grey"
                        >
                          Profile
                        </Heading>
                        <Center>
                          <Image
                            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
                            boxSize="150px"
                            textAlign="center"
                            mt="60px"
                            ml="50px"
                          ></Image>
                        </Center>
                        <Center>
                          <Text color="grey">
                            You haven't shared, answered or posted anything yet.
                          </Text>
                        </Center>
                        <Center>
                          <Button colorScheme="blue" mt="30px">
                            {" "}
                            Answer Question{" "}
                          </Button>
                        </Center>
                      </TabPanel>
                      <TabPanel>
                        <Heading
                          as="h4"
                          size="xs"
                          borderBottom="1px solid grey"
                        >
                          0 Answer
                        </Heading>
                        <Center>
                          <Image
                            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
                            boxSize="100px"
                            textAlign="center"
                            mt="60px"
                            ml="50px"
                          ></Image>
                        </Center>
                        <Center>
                          {" "}
                          <Text color="grey">
                            You haven't answered any question yet.
                          </Text>
                        </Center>
                      </TabPanel>
                      <TabPanel>
                        <Heading
                          as="h4"
                          size="xs"
                          borderBottom="1px solid grey"
                        >
                          0 Question
                        </Heading>
                        <Center>
                          <Image
                            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
                            boxSize="100px"
                            textAlign="center"
                            mt="60px"
                            ml="50px"
                          ></Image>
                        </Center>
                        <Center>
                          <Text color="grey">
                            You haven't asked any questions yet.
                          </Text>
                        </Center>
                      </TabPanel>
                      <TabPanel>
                        {" "}
                        <Heading
                          as="h4"
                          size="xs"
                          borderBottom="1px solid grey"
                        >
                          0 Posts
                        </Heading>
                        <Center>
                          <Image
                            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
                            boxSize="100px"
                            textAlign="center"
                            mt="60px"
                            ml="50px"
                          ></Image>
                        </Center>
                        <Center>
                          <Text color="grey">
                            You haven't posted any content yet.
                          </Text>
                        </Center>
                      </TabPanel>
                      <TabPanel>
                        <Heading
                          as="h4"
                          size="xs"
                          borderBottom="1px solid grey"
                        >
                          0 Followers
                        </Heading>
                        <Center>
                          <Image
                            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
                            boxSize="100px"
                            textAlign="center"
                            mt="60px"
                            ml="50px"
                          ></Image>
                        </Center>
                        <Center>
                          <Text color="grey">
                            You don't have followers yet.
                          </Text>
                        </Center>
                      </TabPanel>
                      <TabPanel>
                        <Heading
                          as="h4"
                          size="xs"
                          borderBottom="1px solid grey"
                        >
                          0 Following
                        </Heading>
                        <Center>
                          {" "}
                          <Image
                            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
                            boxSize="100px"
                            textAlign="center"
                            mt="60px"
                            ml="50px"
                          ></Image>
                        </Center>
                        <Center>
                          <Text color="grey">
                            You aren't following any Spaces yet.
                          </Text>
                        </Center>
                      </TabPanel>
                      <TabPanel>
                        <Heading
                          as="h4"
                          size="xs"
                          borderBottom="1px solid grey"
                        >
                          Edits
                        </Heading>
                        <Center>
                          <Image
                            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
                            boxSize="100px"
                            textAlign="center"
                            mt="60px"
                            ml="50px"
                          ></Image>
                        </Center>
                        <Center>
                          <Text color="grey">
                            You haven't edited any content yet.
                          </Text>
                        </Center>
                      </TabPanel>
                      <TabPanel>
                        <Heading
                          as="h4"
                          size="xs"
                          borderBottom="1px solid grey"
                        >
                          Activity
                        </Heading>
                        <Center>
                          <Image
                            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
                            boxSize="100px"
                            textAlign="center"
                            mt="60px"
                            ml="50px"
                          ></Image>
                        </Center>
                        <Center>
                          <Text color="grey">No recent activity.</Text>
                        </Center>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Flex>
              </Box>
            </Flex>
            <Flex>
              <Box w="250px" h="600px">
                <Flex direction="column" gap="10px">
                  <Flex borderBottom="1px solid grey">
                    <Heading as="h4" size="xs" mb="10px" color="#404040">
                      Credentials & Highlights
                    </Heading>
                    <Spacer />
                    <EditIcon />
                  </Flex>
                  <Flex gap="10px">
                    <Box pt="5px">
                      <BiBriefcase />
                    </Box>
                    <Link color="blue">Add employment Credentials</Link>
                  </Flex>
                  <Flex gap="10px">
                    <Box pt="5px">
                      <IoIosSchool />
                    </Box>
                    <Link color="blue">Add education Credentials</Link>
                  </Flex>
                  <Flex gap="10px">
                    <Box pt="5px">
                      <BiMap />
                    </Box>
                    <Link color="blue">Add loction Credentials</Link>
                  </Flex>
                  <Flex gap="10px">
                    <Box pt="5px">
                      <FiCalendar />
                    </Box>
                    <Text>Joined March 2023</Text>
                  </Flex>

                  <Flex borderBottom="1px solid grey">
                    <Heading size="xs" color="#404040" mb="10px">
                      Knows about
                    </Heading>
                    <Spacer />
                    <EditIcon />
                  </Flex>
                  <Image
                    src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
                    boxSize="100px"
                    textAlign="center"
                    mt="60px"
                    ml="50px"
                  ></Image>
                  <Text color="grey">You haven't added any topics yet.</Text>
                  <Center>
                    <Button colorScheme="blue" size="xs" w="100px" h="30px">
                      Add topics
                    </Button>
                  </Center>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </>
  )
}
