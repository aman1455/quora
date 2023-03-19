import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Button } from "@chakra-ui/react"
import {
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

function DetailsPage() {
  let { id } = useParams()
  console.log(id)
  let url = `http://localhost:8080/questions/${id}/?_embed=answers&_embed=acomments`
  let dispatch = useDispatch()
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/questions/${id}?_embed=answers&_embed=acomments`
      )
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: "Answers",
          payload: res.data,
        })
      })
  }, [])
  let data = useSelector((sdata) => {
    return sdata.AnswerReducer
  })
  console.log(data, "hello")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  let [tA, setTA] = useState("")
  let [tAC, setTAC] = useState("")
  function handleAnswerClick(e) {
    axios
      .post("http://localhost:8080/answers", {
        userId: Number(data.userId),
        questionId: Number(data.id),
        answer: tA,
      })
      .then((res) => {
        console.log(res.data)
        setTA("")
      })
  }
  function handleCommentClick(e) {
    axios
      .post("http://localhost:8080/acomments", {
        userId: Number(data.userId),
        questionId: Number(data.id),
        answerId: Number(e.target.name),
        answer: tAC,
      })
      .then((res) => {
        console.log(res.data)
        setTAC("")
        axios
          .get(
            `http://localhost:8080/questions/${id}?_embed=answers&_embed=acomments`
          )
          .then((res) => {
            dispatch({
              type: "Answers",
              payload: res.data,
            })
            console.log(res.data)
          })
      })
  }

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Answer</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>{data.question}</FormLabel>
              <Textarea
                ref={initialRef}
                placeholder="Enter Your Answer"
                value={tA}
                onChange={(e) => {
                  setTA(e.target.value)
                  console.log(e.target.name)
                }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={(e) => {
                handleAnswerClick(e)
                onClose(e)
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* {data.answers.map((e, i) => {
        return (
          <>
            <Button onClick={onOpen}>Comment</Button>
            <Modal
              initialFocusRef={initialRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Enter Comment</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <Textarea
                      ref={initialRef}
                      placeholder="Enter Your Comment"
                      value={tAC}
                      onChange={(e) => {
                        setTAC(e.target.value)
                        console.log(e.target.name)
                      }}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    name={e.id}
                    onClick={(e) => {
                      handleCommentClick(e)
                      onClose(e)
                    }}
                  >
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Button>DownVote</Button>
            <Button>Comments</Button>
          </>
        )
      })} */}
    </>
  )
}
export default DetailsPage
