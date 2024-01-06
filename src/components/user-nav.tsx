
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu,
         DropdownMenuContent, 
         DropdownMenuGroup, 
         DropdownMenuItem, 
         DropdownMenuLabel, 
         DropdownMenuSeparator, 
         DropdownMenuTrigger } from "./ui/dropdown-menu";


import ButtonLogout from "./ButtonLogout";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function UserNav() {
  const session = await getServerSession(nextAuthOptions)

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/ArthurRodrigomarques.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{session?.userId.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {session?.userId.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem>
              Configurações
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <ButtonLogout/>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}