import React from "react"
import { useState, useEffect } from "react"
import { Box, Grid, GridItem, Spinner, Text } from "@chakra-ui/react"
import SpaceCard from "./SpaceCard"
export default function SpacePageCards() {
  const [spaces, setspaces] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Spaces`)
      .then((response) => response.json())
      .then((data) => {
        setspaces(data)
        setIsLoading(false)
      })
  }, [])
  if (isLoading) {
    return <Spinner />
  }
  return (
    <Box width="40%" marginLeft={"23%"} mt={"50px"}>
      <Text fontSize={"2xl"} fontWeight={"extrabold"}>
        Books
      </Text>
      <SpaceCard cards={spaces.Spaces_Books} />
      <Text fontSize={"2xl"} fontWeight={"extrabold"}>
        Music
      </Text>
      <SpaceCard cards={spaces.Spaces_Music} />
      <Text fontSize={"2xl"} fontWeight={"extrabold"}>
        Science
      </Text>
      <SpaceCard cards={spaces.Spaces_Science} />
      <Text fontSize={"2xl"} fontWeight={"extrabold"}>
        Health
      </Text>
      <SpaceCard cards={spaces.Spaces_Health} />
    </Box>
  )
}
