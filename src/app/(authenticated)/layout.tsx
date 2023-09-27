import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserNav from "@/components/user-nav"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="min-h-screen flex flex-col" >
        <div className="flex max-w-[100%] justify-between mt-4 ml-20 mr-20">
        <div>
            LOGO
        </div>
        <div className="">
            <UserNav/>
        </div>
        </div>
        {children}
      </section>
    )
  }