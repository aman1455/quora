
import { ContentsNotification } from "./ContentsNotification";
import { SideBarNotifications } from "./SideBarNotifications";
import Navbar from "../NavbarAndSidebar/Navbar";
 const Notifications = () => {
    return (
        <>
           <Navbar/> 
        <div style={{display:"flex", margin:"auto", width:"70%"}}>
            <SideBarNotifications />
            <ContentsNotification />
            
        </div>
        </>
    );
};
export default Notifications