import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export default function SideBar() {
    return (
        <div className="w-[33%] lg:w-[25%] fixed">
            <ScrollArea>
            <ToggleGroup type="single" className="flex flex-col">

                <ToggleGroupItem value="a"className="w-[90%] h-16 bg-slate-500 rounded-xl mt-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/ArthurRodrigomarques.png"/>
                        <AvatarFallback>FT</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3>Arthur Marques</h3>
                    </div>
                </ToggleGroupItem>
                <ToggleGroupItem value="b"className="w-[90%] h-16 bg-slate-500 rounded-xl mt-1">
                    <Avatar>
                        <AvatarImage src="https://github.com/ArthurRodrigomarques.png"/>
                        <AvatarFallback>FT</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3>Arthur Marques</h3>
                    </div>
                </ToggleGroupItem>
                <ToggleGroupItem value="c"className="w-[90%] h-16 bg-slate-500 rounded-xl mt-1">
                    <Avatar>
                        <AvatarImage src="https://github.com/ArthurRodrigomarques.png"/>
                        <AvatarFallback>FT</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3>Arthur Marques</h3>
                    </div>
                </ToggleGroupItem>
            </ToggleGroup>
            </ScrollArea>
            </div>
    )
}
