import React from 'react'
import {
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    FormControl,
    FormLabel,
    ModalFooter,
    Box,
    Icon,
    Text,useColorModeValue
  } from '@chakra-ui/react';
function CreateSpaceModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
          
        />
      )
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
       
         <Box p={2} display={'flex'} w={'150px'} mt={"20px"} bg={useColorModeValue('rgb(241,242,242)', "rgb(24,24,24)") }  _hover={{
                background: 'rgb(228,230,230)',
                color: 'teal.500',
              }}>
            <Box
              bg={'rgb(236,237,237)'}
              width={'20px'}
              h={'20px'}
              borderRadius={'50px'}
              _hover={{
                background: 'rgb(228,230,230)',
                color: 'teal.500',
              }}
            >
              <Icon viewBox="0 0 40 30" boxSize={'30px'} color="red.500">
                <path
                  d="M4.5 12h15M12 4.5v15"
                  fill="none"
                  stroke="#666"
                  stroke-width="1.5"
                  class="iicon_svg-stroke"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                ></path>
              </Icon>

            </Box>

            <Box as="button" cursor={"pointer"} onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}> <Text color={'rgb(99,100,102)'}>Create Space</Text></Box>
          </Box>
           
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size={"xl"}
          isCentered
          motionPreset='slideInBottom'
          
        >
        {overlay}
         
          <ModalContent>
            <ModalHeader>Create a Space</ModalHeader>
            <ModalCloseButton />
            <FormLabel pl={6}>Share your interests, curate content, host discussions, and more.</FormLabel>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name <Text color={"red"} as={"span"}>*</Text></FormLabel>
                <FormLabel fontSize={12} color={"rgb(99,100,102)"}>This can be changed in Space settings.</FormLabel>

                <Input ref={initialRef} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Brief description</FormLabel>
                <FormLabel fontSize={12} color={"rgb(99,100,102)"}>Include a few keywords to show people what to expect if they join.</FormLabel>
                <Input  />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button borderRadius={"20px"} colorScheme='blue' mr={3}>
                Create
              </Button>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default CreateSpaceModal