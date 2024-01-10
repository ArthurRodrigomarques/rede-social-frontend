import Conversation from "./Conversation";
import SideBar from "./SideBar";

export default function Message() {
    return (
        <div className="w-[100%] flex h-screen mt-20 overflow-y-auto" >
            <div className=" w-1/3 h-[100%] border-r-8">
                <SideBar/>
            </div>

            <div className="w-2/3">
                <Conversation/>
            </div>
        </div>
    )
}
