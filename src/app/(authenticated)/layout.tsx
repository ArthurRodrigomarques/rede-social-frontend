import { ThemeToggle } from "@/components/ThemeToggle"
import { ThemeProvider } from "@/components/theme-provider"
import UserNav from "@/components/user-nav"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="min-h-screen flex flex-col" >
        <div className="flex w-[100%] bg-secondary justify-between pt-4 pb-2 pl-20 pr-20 fixed">
        <div>
            LOGO
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