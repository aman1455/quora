import React, {useState} from 'react';
import { Box, Text, Flex, Img, color, useColorMode, useColorModeValue } from '@chakra-ui/react';
import CreateSpaceModal from './CreateSpaceModal';
import { NavLink } from 'react-router-dom';
function Sidebar() {

  return (
    <>
      <Box
        position={'fixed'}
        display={'flex'}
        h={'95vh'}
        w={'25%'}
        bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }
      >
        <Box w={'59%'}></Box>
        <Box>
          <Flex flexDirection={'column'} color="white">
            <CreateSpaceModal />

            <NavLink to="/topic/music"  style={({isActive})=>({color: isActive ? "red" : "rgb(99,100,102)"})}>
              <Box
                display={'flex'}
                alignItems={'center'}
                w="150px"
                bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }
                _hover={{
                  background: 'rgb(228,230,230)',
                  color: 'teal.500',
                }}
                p={'10px'}
                
              >
                <Img
                  w={6}
                  src={  
                    'https://qph.cf2.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg'
                  }
                  mr={'10px'}
                  borderRadius={'4px'}
                />
                <Text   fontSize={'14px'}>
                  Music
                </Text>
              </Box>
            </NavLink>

            <Box
              display={'flex'}
              alignItems={'center'}
              bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }
              w="150px"
              _hover={{
                background: 'rgb(228,230,230)',
                color: 'teal.500',
              }}
              p={'10px'}
            >
              <Img
                w={6}
                src={
                  '	https://qph.cf2.quoracdn.net/main-thumb-t-1021-100-ckeyrqlxgxnfvukopxqlxbjrepwichzf.jpeg'
                }
                mr={'10px'}
                borderRadius={'4px'}
              />

              <Text color={'rgb(99,100,102)'} fontSize={'14px'}>
                Fashion and Style
              </Text>
            </Box>

            <Box
              display={'flex'}
              alignItems={'center'}
              w="150px"
              bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }
              _hover={{
                background: 'rgb(228,230,230)',
                color: 'teal.500',
              }}
              p={'10px'}
            >
              <Img
                w={6}
                src={
                  '	https://qph.cf2.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg'
                }
                mr={'10px'}
                borderRadius={'4px'}
              />

              <Text color={'rgb(99,100,102)'} fontSize={'14px'}>
                Science
              </Text>
            </Box>

            <Box
              display={'flex'}
              alignItems={'center'}
              w="150px"
              bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }
              _hover={{
                background: 'rgb(228,230,230)',
                color: 'teal.500',
              }}
              p={'10px'}
            >
              <Img
                w={6}
                src={
                  '	https://qph.cf2.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg'
                }
                mr={'10px'}
                borderRadius={'4px'}
              />

              <Text color={'rgb(99,100,102)'} fontSize={'14px'}>
                Health
              </Text>
            </Box>

            <Box
              display={'flex'}
              alignItems={'center'}
              w="150px"
              bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }
              _hover={{
                background: 'rgb(228,230,230)',
                color: 'teal.500',
              }}
              p={'10px'}
            >
              <Img
                w={6}
                src={
                  '	https://qph.cf2.quoracdn.net/main-thumb-t-1026-100-ohvgqriqzmtjrnillbxqoyfstjxhmlcu.jpeg'
                }
                mr={'10px'}
                borderRadius={'4px'}
              />

              <Text color={'rgb(99,100,102)'} fontSize={'14px'}>
                Food
              </Text>
            </Box>

            <Box
              display={'flex'}
              alignItems={'center'}
              w="150px"
              bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }
              _hover={{
                background: 'rgb(228,230,230)',
                color: 'teal.500',
              }}
              p={'10px'}
            >
              <Img
                w={6}
                src={
                  '	https://qph.cf2.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg'
                }
                mr={'10px'}
                borderRadius={'4px'}
              />

              <Text color={'rgb(99,100,102)'} fontSize={'14px'}>
                Buisness
              </Text>
            </Box>

            <Box
              display={'flex'}
              alignItems={'center'}
              w="150px"
              bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }
              _hover={{
                background: 'rgb(228,230,230)',
                color: 'teal.500',
              }}
              p={'10px'}
            >
              <Img
                w={6}
                src={
                  'https://qph.cf2.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg'
                }
                mr={'10px'}
                borderRadius={'4px'}
              />

              <Text color={'rgb(99,100,102)'} fontSize={'14px'}>
                Cooking
              </Text>
            </Box>

            <Box
              display={'flex'}
              alignItems={'center'}
              w="150px"
              bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }
              _hover={{
                background: 'rgb(228,230,230)',
                color: 'teal.500',
              }}
              p={'10px'}
            >
              <Img
                w={6}
                src={
                  'https://qph.cf2.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg'
                }
                mr={'10px'}
                borderRadius={'4px'}
              />

              <Text color={'rgb(99,100,102)'} fontSize={'14px'}>
                History
              </Text>
            </Box>
            <hr />
            <Box mt={3}>
              <Text
                pr={3}
                as={'span'}
                fontSize={'12px'}
                color={'rgb(147,149,152)'}
              >
                About &bull;
              </Text>
              <Text
                pr={3}
                as={'span'}
                fontSize={'12px'}
                color={'rgb(147,149,152)'}
              >
                Careers &bull;
              </Text>
              <br />
              <Text
                pr={3}
                as={'span'}
                fontSize={'12px'}
                color={'rgb(147,149,152)'}
              >
                Teams &bull;
              </Text>
              <Text
                pr={3}
                as={'span'}
                fontSize={'12px'}
                color={'rgb(147,149,152)'}
              >
                Privacy &bull;
              </Text>
              <br />
              <Text
                pr={3}
                as={'span'}
                fontSize={'12px'}
                color={'rgb(147,149,152)'}
              >
                Acceptable Use &bull;
              </Text>
              <br />
              <Text
                pr={3}
                as={'span'}
                fontSize={'12px'}
                color={'rgb(147,149,152)'}
              >
                Buisnesses &bull;
              </Text>
              <Text
                pr={3}
                as={'span'}
                fontSize={'12px'}
                color={'rgb(147,149,152)'}
              >
                Press &bull;
              </Text>

              <br />
              <Text
                pr={3}
                as={'span'}
                fontSize={'12px'}
                color={'rgb(147,149,152)'}
              >
                Your Ad Choices &bull;
              </Text>
              <br />
              <Text
                pr={3}
                as={'span'}
                fontSize={'12px'}
                color={'rgb(147,149,152)'}
              >
                Grievance Officer &bull;
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
