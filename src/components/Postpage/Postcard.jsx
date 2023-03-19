import React from 'react'
import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Stack,
  Flex,
  Button,
  Avatar,
  Image,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import {

  LinkIcon,
  NotAllowedIcon,
  EditIcon,
  HamburgerIcon,
  WarningTwoIcon,
  ChatIcon,
  RepeatIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

export default function Postcard({post}) {
  const [upvote,setUpvote]=useState(false);
  const [downvote,setDownvote]=useState(false);
  const [expandedPost, setExpandedPost] = useState(null);
  function handleupvote()
  {
    setUpvote(!upvote)
  }
  function handledownvote()
  {
    setDownvote(!downvote)
  }
  function handleExpandClick(postId) {
    setExpandedPost((prevExpandedPostId) =>
      prevExpandedPostId === postId ? null : postId
    );
  }

  function isPostExpanded(postId) {
    return expandedPost === postId;
  }
  return (
    <Box key={post.id} p="2" shadow="md" borderWidth="1px" marginTop="2">
    <Flex direction="column" gap="2">
      <Flex gap="2">
        <Avatar name="post.userName" src="post.userImage" />
        <Flex height="50px" direction="column">
          <Text fontSize="sm" fontWeight="bold">
            {post.userName}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {formatDate(post.date)}
          </Text>
        </Flex>
      </Flex>
      {!isPostExpanded(post.id) && (
        <Box overflow="hidden">
          <ReactQuill
            theme="bubble"
            value={post.post}
            readOnly={true}
            style={{ height: "35px", overflow: "hidden", width: "110%" }}
          />
        </Box>
      )}
      {post.post.length > 150 && (
        <Button
          size="sm"
          w="20%"
          variant="ghost"
          mt="3"
          margin="0 0 auto auto"
          onClick={() => handleExpandClick(post.id)}
        >
          {isPostExpanded(post.id) ? "Read less" : "Read more"}
        </Button>
      )}
      {isPostExpanded(post.id) && (
        <ReactQuill theme="bubble" value={post.post} readOnly={true} />
      )}
      {post.imageUrl != "" && (
        <Box boxSize="lg" w="100%">
          <Image
            src={post.imageUrl}
            alt={post.userName}
            objectFit="contain"
            margin="0 auto"
            h="100%"
            w="100%"
          />
        </Box>
      )}
      <Box width="100%" height="10">
        <Flex>
          <Flex dir="column" justifyContent={"space-between"}>
            <Box>
              <Button
                borderRightRadius="0"
                borderLeftRadius="30"
                border="1px"
                borderColor="gray.500"
                size="sm"
                h="8"
                onClick={handleupvote}
              >
                <Flex gap={2}>
                  {" "}
                  <Icon viewBox="0 0 24 24" color="red.500" boxSize={5}>
                    <path
                      fill={upvote?"#2E69FF":"none"}
                      d="M12 4 3 15h6v5h6v-5h6z"
                      width="1.5" stroke="#666"
                    />
                  </Icon>
                  <Text
                    fontWeight="semibold"
                    fontSize="sm"
                    color="gray.500"
                    fontFamily="sans-serif"
                  >
                    UpVote
                  </Text>
                </Flex>
              </Button>
              <Button
                borderRightRadius="30"
                borderLeftRadius="0"
                border="1px"
                borderLeft="0"
                borderColor="gray.500"
                size="sm"
                onClick={handledownvote}
              >
                <Icon viewBox="0 0 24 24" color="red.500" boxSize={5}>
                    <path
                      fill={downvote?"#CB4B10":"none"}
                      width="1.5" stroke="#666"
                      d="m12 20 9-11h-6V4H9v5H3z"
                    />
                  </Icon>
              </Button>
            </Box>
            <Button variant="ghost" borderRadius={30} size="sm">
              <Flex gap={1}>
                <ChatIcon />
                <Text fontWeight="light" fontSize="sm">
                  {post.comment}
                </Text>
              </Flex>
            </Button>

            <Button variant="ghost" borderRadius={30} size="sm">
              <Flex gap={1}>
                <RepeatIcon />
                <Text fontWeight="light" fontSize="sm">
                  {post.share}
                </Text>
              </Flex>
            </Button>
          </Flex>
          <Spacer />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="ghost"
            />
            <MenuList>
              <MenuItem icon={<LinkIcon />} command="⌘T">
                Copy link
              </MenuItem>
              <MenuItem icon={<NotAllowedIcon />} command="⌘N">
                Not intrested in this
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘⇧N">
                Bookmark
              </MenuItem>
              <MenuItem icon={<TriangleDownIcon />} command="⌘O">
                Downvote
              </MenuItem>
              <MenuItem icon={<HamburgerIcon />} command="⌘L">
                Log
              </MenuItem>
              <MenuItem icon={<WarningTwoIcon />} command="⌘R">
                Report
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Flex>
  </Box>
  )
}
