import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react"

function Card({ title, content, urli }) {
  return (
    <Box boxShadow={"lg"}>
      <Image
        borderWidth="1px"
        borderBottomWidth={"0"}
        borderRadius="lg"
        borderBottomRadius={"none"}
        objectFit={"cover"}
        boxSize="100px"
        src={urli}
        alt="Maharsh"
        w="100%"
      />
      <Box
        textAlign={"center"}
        p={4}
        borderWidth="1px"
        borderTopWidth={"0"}
        borderRadius="lg"
        borderTopRadius={"none"}
        width="100%"
        height="200px"
      >
        <Text fontSize={"sm"} fontWeight="bold">
          {title}
        </Text>
        <Text mt={2} fontSize={"sm"}>
          {content}
        </Text>
      </Box>
    </Box>
  )
}

export default function SpaceCard({ cards }) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={3} mb="50px">
      {cards.map((card) => (
        <GridItem key={card.id}>
          <Card
            title={card.name}
            content={card.Description}
            urli={card.image}
          />
        </GridItem>
      ))}
    </Grid>
  )
}
