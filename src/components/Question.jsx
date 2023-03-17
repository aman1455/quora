import {
  Center,
  Box,
  ButtonGroup,
  Flex,
  Avatar,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
  ModalFooter,
  FormControl,
  FormLabel,
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Icon, createIcon } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
export default function Question() {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabColor = useColorModeValue('blue.500', 'blue.200'); // customize the underline color for different color modes
  const [isOpen, setIsOpen] = useState(false);
  const [menui, setMenui] = useState('Public');
  const inputFocusColor = useColorModeValue('blue.500', 'blue.200');
  const handleTabChange = index => {
    setActiveTab(index);
  };

  const handleOpenModal1 = () => {
    setActiveTab(0);
    setIsOpen(true);
  };

  const handleOpenModal2 = () => {
    setActiveTab(1);
    setIsOpen(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleCloseModal();
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handlemenuchange = e => {
    console.log(e);
    setMenui(e);
  };
  return (
    <Box p="4" m="auto" w="30%">
      <Flex direction="column" gap="1">
        <Flex gap="2">
          <Avatar
            size="md"
            name="Maharsh"
            src="https://pbs.twimg.com/profile_images/1055577345862574081/-ZohIKC8_400x400.jpg"
          />
          <Button
            onClick={handleOpenModal1}
            sx={{ justifyContent: 'flex-start' }}
            w="100%"
            borderRadius="20"
            border="1px solid gray"
            bg="#dee0e1"
          >
            <Text fontWeight="light" color="gray">
              What do you want to ask or share?
            </Text>
          </Button>
        </Flex>
        <ButtonGroup spacing="10px">
          <Button onClick={handleOpenModal1} bg="white" w="33.33%">
            <Icon boxSize="6" viewBox="0 0 24 24" color="red.500">
              <path
                fill="none"
                
                stroke="#666"
                fillRule="evenodd"
                d="M7.5 4h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3L9 22v-3H7.5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
              />
            </Icon>
            <Text fontWeight="light" fontSize="l">
              Ask
            </Text>
          </Button>
          <Center height="30px">
            <Divider orientation="vertical" />
          </Center>
          <Button bg="white" w="33.33%">
            <Icon boxSize="6" viewBox="0 0 24 24" color="red.500">
              <path
                fill="none"
                stroke="#666"
                fillRule="evenodd"
                d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z"
              />
              <path
                fill="#666"
                d="m4.429 19.571 2.652-.884-1.768-1.768z"
              ></path>
              <path
                d="M14.5 19.5h5v-5m-10-10h-5v5"
                stroke="#666"


              ></path>
            </Icon>
            <Text fontWeight="light" fontSize="l">
              Answer
            </Text>
          </Button>
          <Center height="30px">
            <Divider orientation="vertical" />
          </Center>
          <Button onClick={handleOpenModal2} bg="white" w="33.33%">
            <Icon boxSize="6" viewBox="0 0 24 24" color="red.500">
              <path
                fill="none"
                stroke="#666"
                fillRule="evenodd"
                d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z"
              />
            </Icon>
            <Text fontWeight="light" fontSize="l">
              Post
            </Text>
          </Button>
        </ButtonGroup>
      </Flex>
      <Center>
        <Modal
          isCentered={true}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="4xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Tabs index={activeTab} onChange={handleTabChange}>
                <TabList>
                  <Tab
                    borderBottom={
                      activeTab === 0 && `2px solid ${activeTabColor}`
                    }
                  >
                    <Text fontWeight="bold">Add Question</Text>
                  </Tab>
                  <Tab
                    borderBottom={
                      activeTab === 1 && `2px solid ${activeTabColor}`
                    }
                  >
                    <Text fontWeight="bold">Create Post</Text>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <form onSubmit={handleSubmit}>
                      <ModalBody>
                        <FormControl h="300px">
                          <FormLabel fontWeight="bold" fontSize="lg">
                            <Avatar
                              size="sm"
                              name="Maharsh"
                              src="https://pbs.twimg.com/profile_images/1055577345862574081/-ZohIKC8_400x400.jpg"
                            />
                            <Menu>
                              <MenuButton
                                as={Button}
                                rightIcon={<ChevronDownIcon />}
                              >
                                {menui}
                              </MenuButton>
                              <MenuList>
                                <MenuItem
                                  value="Public"
                                  onClick={e => {
                                    handlemenuchange(e.target.value);
                                  }}
                                >
                                  Public
                                </MenuItem>
                                <MenuItem
                                  value="Limited"
                                  onClick={e => {
                                    handlemenuchange(e.target.value);
                                  }}
                                >
                                  Limited
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          </FormLabel>
                          <Textarea
                            width="100%"
                            height="450px"
                            rows="1"
                            placeholder='Start your question with "What", "How", "Why", etc.'
                            autocomplete="off"
                            role="combobox"
                            aria-controls="selector:23"
                            aria-haspopup="listbox"
                            aria-expanded="true"
                            boxSizing="border-box"
                            boxShadow="none"
                            bg="transparent"
                            p="0px"
                            outline="none"
                            border="none"
                            flex="1 1 0%"
                            minHeight="26px"
                            overflow="hidden"
                            overflowWrap="break-word"
                            h="50px"
                            lineHeight="1.4"
                            fontSize="18px"
                            resize="none"
                            writing-mode="horizontal-tb"
                            focusBorderColor="transparent"
                          ></Textarea>
                        </FormControl>
                      </ModalBody>
                      <Divider />
                      <ModalFooter
                        sx={{ justifyContent: 'flex-end', alignItems: 'end' }}
                      >
                        <ButtonGroup spacing="5">
                          <Button
                            onClick={handleCloseModal}
                            variant="unstyled"
                            size="lg"
                            fontWeight="light"
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            colorScheme="blue"
                            size="lg"
                            fontWeight="light"
                            borderRadius="full"
                          >
                            Add Question
                          </Button>
                        </ButtonGroup>
                      </ModalFooter>
                    </form>
                  </TabPanel>
                  <TabPanel>
                    <form onSubmit={handleSubmit}>
                      <ModalBody>
                        <FormControl h="300px">
                          <FormLabel fontWeight="bold" fontSize="lg">
                            <Flex gap="2" direction='row'>
                              <Avatar
                                size="md"
                                name="Maharsh"
                                src="https://pbs.twimg.com/profile_images/1055577345862574081/-ZohIKC8_400x400.jpg"
                              />
                              <Flex direction='column'>
                                <Text fontWeight="bold">Deshikatta</Text>
                                <Menu >
                                  <MenuButton
                                  size='sm'
                                    as={Button}
                                    rightIcon={<ChevronDownIcon />}
                                  >
                                    <Text fontWeight='light'>Credentials</Text>
                                  </MenuButton>
                                </Menu>
                              </Flex>
                            </Flex>
                          </FormLabel>
                          <Textarea
                            width="100%"
                            height="450px"
                            rows="1"
                            placeholder='Say Something'
                            autocomplete="off"
                            role="combobox"
                            aria-controls="selector:23"
                            aria-haspopup="listbox"
                            aria-expanded="true"
                            boxSizing="border-box"
                            boxShadow="none"
                            bg="transparent"
                            p="0px"
                            outline="none"
                            border="none"
                            flex="1 1 0%"
                            minHeight="26px"
                            overflow="hidden"
                            overflowWrap="break-word"
                            h="50px"
                            lineHeight="1.4"
                            fontSize="18px"
                            resize="none"
                            focusBorderColor="transparent"
                          ></Textarea>
                        </FormControl>
                      </ModalBody>
                      <Divider />
                      <ModalFooter
                        sx={{ justifyContent: 'flex-end', alignItems: 'end' }}
                      >
                        
                          <Button
                            type="submit"
                            colorScheme="blue"
                            size="lg"
                            fontWeight="light"
                            borderRadius="full"
                          >
                            Post
                          </Button>
                      </ModalFooter>
                    </form>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
    </Box>
  );
}
