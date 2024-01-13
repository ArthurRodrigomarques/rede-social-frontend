import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";

export default function DropMenu() {

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Páginas</DropdownMenuLabel>
          <DropdownMenuSeparator />
   
            <DropdownMenuRadioItem value="feed">Feed</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="mensage">Mensagens</DropdownMenuRadioItem>

        </DropdownMenuContent>
      </DropdownMenu>
    )
}
