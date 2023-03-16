import React,{useEffect, useState} from 'react'

import { Card, CardHeader, Icon, Button, Flex, Box, Img, Text } from '@chakra-ui/react'
function CardsMusic() {
    let [data, setData] = useState([]);
    useEffect(()=>{
        fetchdata()
    },[])
    let  fetchdata = async ()=>{
        let alldata = await fetch('http://localhost:8080/read')
        let jsondata = await alldata.json();
        setData(jsondata);
        console.log(jsondata, "getting the data");
    }
  return (
    <>
    <div>
        {data.map((e)=>{
            return (
                <Card>
                    <Flex>
                        <Box>
                            <Img w={8} src={e.img}/>
                        </Box>
                        <Box>
                            <Flex>
                                <Text>{e.name}</Text>
                                <Text>{e.follow}</Text>
                            </Flex>
                            <Flex>
                            <Text>{e.about}</Text>
                                <Text>{e.postdate}</Text>
                            </Flex>
                        </Box>
                    </Flex>
                    <Box>
                        <Text>{e.question}</Text>
                        <Text>{e.answer}</Text>
                    </Box>
                   
                        <Text>{e.viewsCount}</Text>

                        <Flex border="2px solid red">
                        <Box  border="3px solid green" width={"20%"} justifyContent="space-between" display={"flex"}>

                        
                        <Box display={"flex"}  boderRadius="15px" >
                    <Button border={"1px solid rgb(222,224,225)"} borderRadius="15px 0px 0px 15px"  bg="rgb(247,247,247)">
                  <Icon mr="10px" boxSize={"25px"}  color='red.500'>
                  <path d="M12 4 3 15h6v5h6v-5h6z" class="icon_svg-stroke icon_svg-fill" stroke-width="1.5" stroke="#666" fill="none" stroke-linejoin="round"></path>
              </Icon>
              Upvote
              </Button>
              <Button borderRadius="0px 15px 15px 0px" borderLeft="1px solid black" bg="rgb(247,247,247)">
                  <Icon  boxSize={"25px"}  >
                  <path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" stroke-linejoin="round"></path>
              </Icon>
              
              </Button>
              </Box>
              <Button bg="white">
                <Icon boxSize={"25px"}>
                <path d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z" class="icon_svg-stroke icon_svg-fill" stroke="#666" stroke-width="1.5" fill="none"></path>
                </Icon>
              </Button>
              <Button bg="white">
                <Icon boxSize={"25px"}>
                <g class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path><path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path></g>
                </Icon>
              </Button>
              </Box>
                        </Flex>
                </Card>
            )
        })}
    </div>
    </>
  )
}

export default CardsMusic