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
function Post({ state, setState }) {
  let [isLoading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  // const [state, setState] = useState(true)
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
        setPosts(data)
        dispatch({
          type: "post_data",
          payload: data,
        })
        setTimeout(() => {
          setLoading(true)
        }, 1000)
        console.log(state)
      })
  }, [state])

  return (
    <Box maxW="40%" mx="auto">
      {posts
        .sort(function (a, b) {
          return new Date(b.completeDate) - new Date(a.completeDate)
        })
        .map((post) => (
          <Postcard
            post={post}
            posts={posts}
            setPosts={setPosts}
            setState={setState}
            state={state}
            setLoading={setLoading}
            isLoading={isLoading}
          />
        ))}
    </Box>
  )
}

export default Post
