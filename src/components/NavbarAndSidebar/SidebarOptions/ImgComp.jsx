import { Img ,Center, Text,Box, Flex} from '@chakra-ui/react'
import React from 'react'

function ImgComp() {
  return (
    <>
    <Box h="83vh">

    
    <Center>
<Flex w="30%" justifyContent={"space-between"}>
        <Img src="https://media.tenor.com/B43QChPmpGEAAAAj/cat-bunny.gif" />
        <Img src="https://media.tenor.com/SZOI9mnTYIwAAAAj/tanzen-hase.gif" />
        <Img src="https://media.tenor.com/h4zgWQkgP7IAAAAj/dance-rabbit.gif" />

</Flex>
    </Center>
    <Center>

        <Text mt="30px" pl="40%" fontWeight={"bold"} fontSize="30px" >Nothing here...</Text>
    </Center>
    </Box>
    </>
  )
}

export default ImgComp