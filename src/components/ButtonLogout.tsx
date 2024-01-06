"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { DropdownMenuItem } from "./ui/dropdown-menu"

export default function ButtonLogout() {

    const router = useRouter()

    async function handleLogout() {
        await signOut({
          redirect: false
        })
    
        router.replace('/')
      }

      return <DropdownMenuItem onClick={handleLogout}>
      Sair
    </DropdownMenuItem>
}