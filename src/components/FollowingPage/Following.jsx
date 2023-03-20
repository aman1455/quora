import {
  Box,
  Image,
  Text,
  Heading,
  Divider,
  Card,
  CardBody,
  Avatar,
  Stack,useColorModeValue
} from "@chakra-ui/react"
import React from "react"

export default function Following() {
  return (
    <Box display="flex">
      <Box w={"25%"}></Box>
      <Box bg={useColorModeValue('rgb(241,242,242)', "rgb(26,32,44)") } w={"75%"}>
        <Box boxSize="100px">
          <Image
            marginLeft="460px"
            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.build_following_feed_lightmode.png-26-cc59fbc57541079b.png"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Heading as="h4" size="md" marginLeft="350px" color="#636466">
            Build your new following feed
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="medium"
            paddingTop="15px"
            marginLeft="300px"
          >
            Follow some Spaces to start discovering stories in your feed.
          </Text>
        </Box>

        <Box bg={useColorModeValue('rgb(241,242,242)', "rgb(26,32,44)") } marginTop="30px" w="55%" marginLeft="150px">
          <Heading as="h4"  size="md" paddingTop="30px" marginLeft="20px">
            Discover Spaces
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="medium"
            paddingTop="15px"
            marginLeft="30px"
            pb={"20px"}
          >
            Spaces you might like
          </Text>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "100px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1195-50-zrqxlfjkitfzfyhiqeefkalbxlaojdgs.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  How To Use Brain
                </Text>
                <Text fontSize="xs" color="#636466">
                  589.3K followers
                </Text>
                <Text fontSize="xs">
                  Psychology, Motivation, Self-help, Thinking, & Learning
                  (Science & Experiences)
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1578736-200-qrcddnhqbqymirsnflsoxjbdpvdudoak.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  General knowledge
                </Text>
                <Text fontSize="xs" color="#636466">
                  958.9K followers
                </Text>
                <Text fontSize="xs">A space which enables our knowledge.</Text>
              </CardBody>
            </Stack>
          </Card>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="	https://qph.cf2.quoracdn.net/main-thumb-ti-1611965-200-goeyumhmtnzyvmvwbneoiuzoegdhbwon.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Python Coding
                </Text>
                <Text fontSize="xs" color="#636466">
                  63.5K followers
                </Text>
                <Text fontSize="xs">
                  Learn PYTHON Tips and Tricks I Share your knowledge with us to
                  help the society
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1604955-200-qgfrrlnsrwocywdngcwztzgmzwprwrue.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  The Hindu Vocabulary
                </Text>
                <Text fontSize="xs" color="#636466">
                  95.3K followers
                </Text>
                <Text fontSize="xs">
                  The Hindu Vocabulary on the Daily Basis which will Benefit you
                  in Upcoming Exams
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-3549702-200-vuaptewjbzrdbhpegzqqyfiokbxhghfd.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  ChatGPT Community
                </Text>
                <Text fontSize="xs" color="#636466">
                  25.5K followers
                </Text>
                <Text fontSize="xs">
                  The space is focused on discussing & sharing knowledge about
                  ChatGPT OpenAI.
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1576526-200-ovjjjbeeofhapgpiytuhstadmviwpxcf.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  English words
                </Text>
                <Text fontSize="xs" color="#636466">
                  1M followers
                </Text>
                <Text fontSize="xs">
                  A platform where get a new english word to learn daily
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-2256-200-letkpfgwqvevkiucpspnxpsmiwmdwcca.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  HISTORY OF INDIA
                </Text>
                <Text fontSize="xs" color="#636466">
                  449.6K followers
                </Text>
                <Text fontSize="xs">
                  Indian history is distorted. Here people can write about real
                  Indian history
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1608112-200-njvuuswiywemomgbemqgryybzlaubilu.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Study Tips and Tricks
                </Text>
                <Text fontSize="xs" color="#636466">
                  152.1K followers
                </Text>
                <Text fontSize="xs">
                  Tips and Tricks to Study Better, Faster and with Less Stress
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-876-200-ydkstkucumcigpfbnpezxdohjudhlkja.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  World History
                </Text>
                <Text fontSize="xs" color="#636466">
                  2.8M followers
                </Text>
                <Text fontSize="xs">My answers on World History here</Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1577737-200-xppytrdppqycxvkfunshartgkwzgtdvc.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Communication Skills
                </Text>
                <Text fontSize="xs" color="#636466">
                  91.6K followers
                </Text>
                <Text fontSize="xs">
                  Share your experiences to deal with people. Collab -
                  agarwalsneha701@gmail.com
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1612666-200-zxzbcuqlrwqtgrwmpbuonivweumefbec.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  The Math Guru
                </Text>
                <Text fontSize="xs" color="#636466">
                  137.8K followers
                </Text>
                <Text fontSize="xs">
                  School Maths CBSE, ICSE, IB and Quantitative Aptitude
                  Questions, Math shortcuts
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="	https://qph.cf2.quoracdn.net/main-thumb-ti-3429351-200-nupwupchzlioxemlvrygdpbkqprzbnwp.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Get Insta Followers
                </Text>
                <Text fontSize="xs" color="#636466">
                  3.8K followers
                </Text>
                <Text fontSize="xs">
                  This Space for Instagram Releted Contents and Share Your Insta
                  ID & Stories
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="	https://qph.cf2.quoracdn.net/main-thumb-ti-1634630-200-goxrbutqopeuwhwivdlanorbwvogbjnq.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Mathematics Solutions
                </Text>
                <Text fontSize="xs" color="#636466">
                  144.8K followers
                </Text>
                <Text fontSize="xs">It's all about Maths</Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1603271-200-xcqghuxovhfxqvhrvkgclpgzvbnhxvfs.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Mathematics Skills - Learn/Expertise
                </Text>
                <Text fontSize="xs" color="#636466">
                  51.9K followers
                </Text>
                <Text fontSize="xs">
                  Everything about Mathematics - Learn/Simplify/Tips/Easy
                  Methods
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1588559-200-dfbujtijzwzputzmmkdyvleekefighaq.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Mathematics is Life
                </Text>
                <Text fontSize="xs" color="#636466">
                  122.4K followers
                </Text>
                <Text fontSize="xs">
                  This space is dedicated to the beauty of mathematics:
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1897021-200-hjpkrycompukpdioszmhrfoqcnzizyqf.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  YouTube ♧ promote
                </Text>
                <Text fontSize="xs" color="#636466">
                  10K followers
                </Text>
                <Text fontSize="xs">
                  You can promote your YouTube videos and channel.
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-2731809-200-lxzpczmvqqxircyvrrrbujfedfmiuzwt.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Science Wizards
                </Text>
                <Text fontSize="xs" color="#636466">
                  8.9K followers
                </Text>
                <Text fontSize="xs">All About Science</Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-3334111-200-eymwnhszudaaalghwhrfvnmvddckppoj.jpeg
   "
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Jai Narayan's history helth Space
                </Text>
                <Text fontSize="xs" color="#636466">
                  1K followers
                </Text>
                <Text fontSize="xs">
                  i am a passionate student of health, yoga, culture, travel i
                  will share relevant
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Text fontSize="md" fontWeight="medium" marginTop="20px">
            Movies
          </Text>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-2081788-100-lgvcvjaqxhareceidglbyerdotutofth.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Netflix Nerds
                </Text>
                <Text fontSize="xs" color="#636466">
                  6.3K followers
                </Text>
                <Text fontSize="xs">
                  Let's together binge watch and review some amazing shows and
                  movies here!
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1601566-100-rpzavebfakjfrhhvkpcfgxhjvrrekuxp.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Movies & TV series review ds
                </Text>
                <Text fontSize="xs" color="#636466">
                  7.7K followers
                </Text>
                <Text fontSize="xs">
                  Get all unbiased reviews of Movies & TV series
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1601566-100-rpzavebfakjfrhhvkpcfgxhjvrrekuxp.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Fun with shubham
                </Text>
                <Text fontSize="xs" color="#636466">
                  19 followers
                </Text>
                <Text fontSize="xs">Memes, Bollywood & Hollywood movies</Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Text fontSize="md" fontWeight="medium" marginTop="20px">
            Health
          </Text>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1583357-100-suquhgwrrzazpmtrbcntqhvnxfknybec.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  NUTRITION AND HEALTH
                </Text>
                <Text fontSize="xs" color="#636466">
                  331.9K followers
                </Text>
                <Text fontSize="xs">
                  Anything related to nutrition and health
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-3700413-100-ymdzuxquzkbmvwxsorvruyvgmcpbzmku.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Arpit Health & fitness
                </Text>
                <Text fontSize="xs" color="#636466">
                  {" "}
                  7 followers
                </Text>
                <Text fontSize="xs">
                  Health is overall well-being, while fitness is physical
                  ability. Both are import
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qsf.cf2.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_pink.png-26-b775bb30fc463837.png"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Health and diseaser
                </Text>
                <Text fontSize="xs" color="#636466">
                  {" "}
                  2 followers
                </Text>
                <Text fontSize="xs"></Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Text fontSize="md" fontWeight="medium" marginTop="20px">
            Music
          </Text>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1577210-100-tiegkllyunrpqxylnmuzfrdffvyqoanq.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Music and Songs
                </Text>
                <Text fontSize="xs" color="#636466">
                  761.4K followers
                </Text>
                <Text fontSize="xs">
                  Browse hundreds artists, composers, and curated playlists
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1589853-100-zksisyuszxaykighcbuszpbqsalpodur.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Music Home
                </Text>
                <Text fontSize="xs" color="#636466">
                  399.3K followers
                </Text>
                <Text fontSize="xs">
                  1)Music Lovers HOME 2)Latest Music updates 3) World's Best
                  Music Albums Display
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-2821042-100-oswrjgrtvueyupfmxivwhybbplqoeozd.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  ðŸŽ¼Groove InnðŸŽ¶ðŸŽµ
                </Text>
                <Text fontSize="xs" color="#636466">
                  179 followers
                </Text>
                <Text fontSize="xs">
                  Sharing their best music to make it reach out to others
                  playlists!!!!
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Text fontSize="md" fontWeight="medium" marginTop="20px">
            Books
          </Text>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1586670-100-iflkaqjwbgpunuxoeneqekxtppuxukqm.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Books that influenced You
                </Text>
                <Text fontSize="xs" color="#636466">
                  294.8K followers
                </Text>
                <Text fontSize="xs">
                  ONLY MENTIONS ABOUT THE BOOKS THAT INFLUENCED YOU (+COMICS &
                  MEMES R INCLUDED 2)
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-2631417-100-sbokrgeewtoxsawpvxhqzfmqesncwtwz.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Book Summary And Book Recommendation
                </Text>
                <Text fontSize="xs" color="#636466">
                  1.6K followers
                </Text>
                <Text fontSize="xs">
                  Here you can have a book summary and recommendations of some
                  of the great books
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1591652-100-qoqcygwyeyjybimfxexxwhxtbernhhtn.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Your Writing
                </Text>
                <Text fontSize="xs" color="#636466">
                  24K followers
                </Text>
                <Text fontSize="xs">
                  Keep Reading â€¢ Keep Writing â€¢ Keep Learning!
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Text fontSize="md" fontWeight="medium" marginTop="20px">
            Visiting and Travel
          </Text>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1743-100-elwpxdyaevwwlfmvhexmruvufknopvrj.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Travel and tourism
                </Text>
                <Text fontSize="xs" color="#636466">
                  6222.5K followers
                </Text>
                <Text fontSize="xs">
                  Travel helps to meet new people, know about different cultures
                  and lifestyles.
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1586844-100-wnzluhfbltubcsfukghibkidvttdyuph.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  India Tourism
                </Text>
                <Text fontSize="xs" color="#636466">
                  9.3K followers
                </Text>
                <Text fontSize="xs">
                  All type of Topic on Travel in the Incredible India &
                  Overseas.
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1589841-100-fqqqukizmbxvyjlpobvhzpbwrbqkezxc.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Vacation & Holiday Trip
                </Text>
                <Text fontSize="xs" color="#636466">
                  169.9K followers
                </Text>
                <Text fontSize="xs">
                  1)Vacation Ideas 2)Hotel Recommendation 3)Resorts 4) Beaches
                  5) Tourism
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Text fontSize="md" fontWeight="medium" marginTop="20px">
            Science
          </Text>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1753732-100-imedtmqlporcrroqomzymmjgykiibfxu.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Physics problems & soln.
                </Text>
                <Text fontSize="xs" color="#636466">
                  4.5K followers
                </Text>
                <Text fontSize="xs">
                  Here you can learn, practice and solve physics problems theory
                  and Numerical .
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1575985-100-nspnxwlrpkbfaebeyevhfpflxekhzhrq.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Physics Only
                </Text>
                <Text fontSize="xs" color="#636466">
                  13K followers
                </Text>
                <Text fontSize="xs">Space for all Physics Lover.</Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1700077-100-zyfezvbzljtncmdtcrskedfixgclrkyo.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Chemistry point
                </Text>
                <Text fontSize="xs" color="#636466">
                  5K followers
                </Text>
                <Text fontSize="xs">
                  Here I ask or answer chemistry questions. Chemistry Topics,
                  Formulas, Reaction.
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Text fontSize="md" fontWeight="medium" marginTop="20px">
            Food
          </Text>
          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1711141-100-phijplhbhungseilfsjugcncjwhpqbtm.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Quick Recipes
                </Text>
                <Text fontSize="xs" color="#636466">
                  7K followers
                </Text>
                <Text fontSize="xs">
                  Recipes which are simple and fast to cook.
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-1656666-100-cmsgiprrqqnfwnlrrjcdnuhowaercozs.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Indian Food Recipes
                </Text>
                <Text fontSize="xs" color="#636466">
                  23.9K followers
                </Text>
                <Text fontSize="xs">
                  Join this space to get daily updates and info regarding Indian
                  Food Recipes.
                </Text>
              </CardBody>
            </Stack>
          </Card>

          <Divider />
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ sm: "70px" }}
              src="https://qph.cf2.quoracdn.net/main-thumb-ti-455106-100-dmkjfxddhqzpuyoiyyggmdpgdzlwnfuq.jpeg"
              alt="Caffe Latte"
              borderRadius="20px"
              h="70%"
              padding="10px"
            />

            <Stack>
              <CardBody>
                <Text fontSize="md" fontWeight="medium" marginTop="-17px">
                  Foods of India!
                </Text>
                <Text fontSize="xs" color="#636466">
                  1.8K followers
                </Text>
                <Text fontSize="xs">
                  A space that helps you to find out new dishes and restaurants
                  to hang out.......
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
