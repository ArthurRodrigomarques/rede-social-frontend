import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserNav from "@/components/user-nav"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="min-h-screen flex flex-col" >
        <div className="flex w-[100%] bg-secondary justify-between pt-4 pb-4 pl-20 pr-20 fixed">
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