import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { nextAuthOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { ThemeToggle } from "@/components/ThemeToggle"
import UserNav from "@/components/user-nav"
import DropMenu from "@/components/DropMenu"

interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({children}: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/')
  }
  
  return (

          <section className=" flex flex-col" >
            <div className="flex w-[100%] bg-secondary justify-between pt-4 pb-2 pl-20 pr-20 fixed">
            <div className="hidden lg:block">
                <h1> HorseXx</h1>
                <p>a um X do sucesso</p>
            </div>
            <div className="block lg:hidden">
              <DropMenu/>
            </div>
            <div>
              <ThemeToggle/>
            </div>
            <div>
                <UserNav/>
            </div>
              
            </div>
            {children}
           
          </section>
    
        )

}
