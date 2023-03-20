import React from "react"
import { useEffect, useState } from "react"
import {
  Card,
  Icon,
  Stack,
  CardBody,
  Button,
  Box,
  Img,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react"
import { useSelector } from "react-redux"
import ReadMore from "../NavbarAndSidebar/SidebarOptions/ReadMore"
import axios from "axios"
function AnswerCard() {
  let data = useSelector((sdata) => {
    return sdata.AnswerReducer
  })
  let userReducer = useSelector((storeData) => {
    return storeData.UserReducer
  })

  console.log(data, "hello")
  console.log(userReducer, "userReducer")
  return (
    <>
      <div>
        {/* <Text>NArayan</Text> */}
        {data.answers ? (
          <>
            <Center>
              <Text
                fontSize={"20px"}
                fontWeight={"bold"}
                color={"rgb(99,100,102)"}
                pb={"10px"}
                pt={"10px"}
              >
                Total Answers {data.answers.length}
              </Text>
            </Center>
            {data.answers
              .sort(function (a, b) {
                return new Date(b.date) - new Date(a.date)
              })
              .map((e) => {
                return (
                  <Center>
                    <Card
                      border="1px solid rgb(222,224,225)"
                      w={"50%"}
                      mb="15px"
                    >
                      <Flex mt="15px" alignItems="center">
                        <Box ml="17px" mr="10px" w={"5%"}>
                          <Img borderRadius="25px" src={e.avatar} w={"100%"} />
                        </Box>
                        <Box w="100%">
                          <Flex>
                            <Text
                              pr="10px"
                              fontWeight="bold"
                              fontSize="14px"
                              color="black"
                            >
                              {e.name}
                            </Text>
                            <Text
                              fontWeight="semibold"
                              fontSize="14px"
                              color="rgb(46,105,255)"
                              as={"button"}
                            >
                              Follow
                            </Text>
                          </Flex>
                        </Box>
                        <Box pr="5px">
                          <Button
                            borderRadius="20px "
                            size="base"
                            colorScheme="rgb(247,247,247)"
                            color="rgb(99,100,102)"
                            variant="solid"
                            _hover={{
                              background: "rgb(228,230,230)",
                            }}
                          >
                            <Icon boxSize={"25px"}>
                              <path
                                d="m16.243 7.757-8.486 8.486m8.486 0L7.757 7.757"
                                class="icon_svg-stroke"
                                fill="none"
                                fill-rule="evenodd"
                                stroke-linecap="round"
                                stroke="#666"
                                stroke-width="1.5"
                              ></path>
                            </Icon>
                          </Button>
                        </Box>
                      </Flex>
                      <CardBody>
                        <Text>{e.answer}</Text>
                      </CardBody>

                      <Box>
                        <Stack direction="row">
                          <Box
                            borderRadius="20px"
                            border="1px solid rgb(222,224,225)"
                            mb="20px"
                            ml="15px"
                            display="flex"
                            w="25%"
                          >
                            <Button
                              borderRadius="20px 0px 0px 20px "
                              size="sm"
                              width="200px"
                              colorScheme="rgb(247,247,247)"
                              w="150px"
                              color="rgb(99,100,102)"
                              variant="solid"
                              _hover={{
                                background: "rgb(228,230,230)",
                              }}
                            >
                              <Icon boxSize={"25px"} pr="4px">
                                <path
                                  d="M12 4 3 15h6v5h6v-5h6z"
                                  class="icon_svg-stroke icon_svg-fill"
                                  stroke-width="1.5"
                                  stroke="rgb(46,105,255)"
                                  fill="none"
                                  stroke-linejoin="round"
                                ></path>
                              </Icon>
                              Upvote
                            </Button>
                            <Button
                              borderRadius="0px 20px 20px 0px"
                              borderLeft="1px solid rgb(222,224,225)"
                              size="sm"
                              colorScheme="rgb(247,247,247)"
                              color="rgb(99,100,102)"
                              _hover={{
                                background: "rgb(228,230,230)",
                              }}
                            >
                              <Icon boxSize={"25px"}>
                                <path
                                  d="m12 20 9-11h-6V4H9v5H3z"
                                  class="icon_svg-stroke icon_svg-fill"
                                  stroke="#666"
                                  fill="none"
                                  stroke-width="1.5"
                                  stroke-linejoin="round"
                                ></path>
                              </Icon>
                            </Button>
                          </Box>

                          <Button w="10px" size="sm" bg="white">
                            <Icon boxSize={"25px"}>
                              <path
                                d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z"
                                class="icon_svg-stroke icon_svg-fill"
                                stroke="#666"
                                stroke-width="1.5"
                                fill="none"
                              ></path>
                            </Icon>
                          </Button>
                          <Button w="10px" bg="white" size="sm">
                            <Icon boxSize={"22px"}>
                              <g
                                class="icon_svg-stroke"
                                stroke="#666"
                                stroke-width="1.5"
                                fill="none"
                                fill-rule="evenodd"
                                stroke-linecap="round"
                              >
                                <path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path>
                                <path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path>
                              </g>
                            </Icon>
                          </Button>
                        </Stack>
                      </Box>
                    </Card>
                  </Center>
                )
              })}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default AnswerCard
