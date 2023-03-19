import React from 'react'
import {
    Text,
    Center,
    Img
  } from "@chakra-ui/react"
  import { useNavigate, Link } from 'react-router-dom'
  import Navbar from '../NavbarAndSidebar/Navbar'
function PageNotFound() {
   
  return (
   <>
   <Navbar/>
   <Center>

    <Img w={"35%"} src="https://media4.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif?cid=ecf05e47rouas910pv5xwsdm2dr4m50lwp9o8ds0m39rtoz3&rid=giphy.gif&ct=g"/>
   </Center>
   <Center><Text fontWeight={"extrabold"} color="rgb(185,43,39)" fontSize={"30px"}><Link to="/">Go to Home</Link></Text> </Center>
   </>
  )
}

export default PageNotFound