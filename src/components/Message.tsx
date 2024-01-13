import Conversation from "./Conversation";
import SideBar from "./SideBar";

export default function Message() {
    return (
        <div className="w-[100%] flex h-screen pt-20 overflow-y-auto" >
            <div className=" w-1/3 hidden md:block h-[100%] border-r-8">
                <SideBar/>
            </div>

            <div className="md:w-2/3">
                <Conversation/>
            </div>
        </div>
    )
}
