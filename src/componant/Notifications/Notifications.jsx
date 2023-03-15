
import { ContentsNotification } from "./ContentsNotification";
import { SideBarNotifications } from "./SideBarNotifications";

 const Notifications = () => {
    return (
        <div style={{display:"flex", margin:"auto", width:"fit-content"}}>
            <SideBarNotifications />
            <ContentsNotification />
            
        </div>
    );
};
export default Notifications