import { useState, useEffect } from "react"
import Postcard from "./Postcard"
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
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Icon,
} from "@chakra-ui/react"
import ReactQuill from "react-quill"
import {
  ArrowUpIcon,
  ArrowDownIcon,
  LinkIcon,
  NotAllowedIcon,
  EditIcon,
  HamburgerIcon,
  WarningTwoIcon,
  ChatIcon,
  RepeatIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons"
import { useSelector, useDispatch } from "react-redux"
function formatDate(dateString) {
  const date = new Date(dateString)
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  }
  return date.toLocaleDateString(undefined, options)
}

function Post() {
  const [posts, setPosts] = useState([])
  let data = useSelector((sData) => {
    return sData.PostReducer
  })
  let dispatch = useDispatch()

  useEffect(() => {
    fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts?_embed=pcomments&_embed=pupvotes&_embed=pdownvotes`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data, "This is Posts")
        setPosts(data)
        dispatch({
          type: "post_data",
          payload: data,
        })
      })
  }, [data])

  return (
    <Box maxW="40%" mx="auto">
      {posts.map((post) => (
        <Postcard post={post} posts={posts} setPosts={setPosts} />
      ))}
    </Box>
  )
}

export default Post
