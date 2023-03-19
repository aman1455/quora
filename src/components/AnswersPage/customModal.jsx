import { useDisclosure } from "@chakra-ui/react"
import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Textarea,
  FormControl,
} from "@chakra-ui/react"
import { BiEdit } from "react-icons/bi"
const CustomModal = ({
  showModalButtonText,
  modalHeader,
  modalBody,
  e,
  tA,
  setTA,
  handleAnswerClick,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  return (
    <>
      <Button
        leftIcon={<BiEdit />}
        colorScheme="blackAlpha"
        variant="outline"
        borderRadius="20px"
        onClick={onOpen}
      >
        {showModalButtonText}
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalHeader}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>{e.question}</FormLabel>
              <Textarea
                ref={initialRef}
                placeholder="Enter Your Answer"
                value={tA}
                name={e.id}
                onChange={(el) => {
                  setTA(el.target.value)
                  // console.log(e.target.name)
                }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              name={e.id}
              colorScheme="blue"
              mr={3}
              onClick={(el) => {
                handleAnswerClick(el)
                onClose(el)
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CustomModal
