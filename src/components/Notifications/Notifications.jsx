
import { ContentsNotification } from "./ContentsNotification";
import { SideBarNotifications } from "./SideBarNotifications";
import Navbar from "../NavbarAndSidebar/Navbar";
import {Box, useColorModeValue} from "@chakra-ui/react";
import Sidebar from '../NavbarAndSidebar/Sidebar'
 const Notifications = () => {
    return (
        <>
           <Navbar/> 
        <Box style={{display:"flex", margin:"auto", width:"70%"}} >
            <SideBarNotifications />
            <ContentsNotification />
            
        </Box>
        </>
    );
};
export default Notifications