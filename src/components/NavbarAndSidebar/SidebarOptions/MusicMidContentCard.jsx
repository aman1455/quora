import React from 'react';
import {
  Card,
  Text,
  Image,
  Box,
  Heading,
  Icon,
  Flex,
} from '@chakra-ui/react';
function MusicMidContentCard() {
  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        border="2px solid red"
        w={'35%'}
        display="flex"
        alignItems="center"
        p="15px"
      >
        <Box>
          <Image
            src="	https://qph.cf2.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
            alt="Caffe Latte"
            h={20}
          />
        </Box>

        <Box  ml="20px" w={'20vw'}>
          <Heading size="md">Music</Heading>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            w="135%"
            mt="20px"
          >
            <Box
              display="flex"
              borderRadius="30px"
              border="2px solid rgb(88,135,255)"
              pr="6px"
              pl="6px"
              h="30px"
              justifyContent="space-between"
              w="125px"
              alignItems="center"
              variant="outline"
              colorScheme="blue"
              
            >
              <Icon boxSize={'22px'} color="rgb(88,135,255)" fill="rgb(88,135,255)">
                <path
                  d="M13.5 19.5h-6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v6M8 12.5v-4h4v4H8zM14.5 9H16h-1.5zm0 3H16h-1.5zM8 15.5h8-8zm9 4h5M19.5 17v5"
                  class="icon_svg-stroke"
                  stroke="rgb(46,105,255)"
                  stroke-width="1.5"
                  fill="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </Icon>
              <Text fontSize="14px" color="rgb(46,105,255)" fontWeight='500'>Follow</Text>
              <Text fontSize="14px" color="rgb(88,135,255)">98.8M</Text>
            </Box>

              <Box textAlign='center' >
                <Icon  boxSize={'30px'} color="red.500">
                  <path
                    d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                    class="icon_svg-stroke"
                    stroke-width="1.5"
                    stroke="#666"
                    fill="none"
                  ></path>
                </Icon>
              </Box>
              
          </Flex>
        </Box>
      </Card>


      
    </>
  );
}

export default MusicMidContentCard;
