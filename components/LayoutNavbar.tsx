import { auth } from "@/auth"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { ThemeToggleButton } from "./ThemeToggleButton"
import { Button } from "./ui/button"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "./ui/drawer"

export default async function LayoutNavbar() {

    const session = await auth()
    
    return (
        <nav className="flex items-center gap-4 fixed top-10 border-primary py-2 px-4 rounded-[2rem] border-2 dark:hover:bg-primary-foreground hover:bg-background-100 z-50">
            <Button variant={"ghost"} className="rounded-[2rem] hidden md:inline">
                <Link href="/">home</Link>
            </Button>
            {session?.user && (
                <Button variant={"ghost"} className="rounded-[2rem] hidden md:inline">
                    <Link href="/dashboard">dashboard</Link>
                </Button>
            )}
            {session?.user ? <LogoutButton /> : <LoginButton />}
            <ThemeToggleButton className="rounded-[2rem] " />
            <Drawer>
                <DrawerTrigger>
                    <Button variant={"ghost"} className="rounded-[2rem] md:hidden">
                        <Menu />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="p-1"/>
                    <Button variant={"ghost"} className="rounded-none">
                        <Link href="/">home</Link>
                    </Button>
                    {session?.user && (
                        <Button variant={"ghost"} className="rounded-none">
                            <Link href="/dashboard">dashboard</Link>
                        </Button>
                    )}
                </DrawerContent>
            </Drawer>
        </nav>
    )
}