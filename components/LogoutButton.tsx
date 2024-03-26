"use client"

import { signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { LogOutIcon } from "lucide-react"

export default function LogoutButton() {

    const session = useSession()
    console.log(session)

    const handleClick = () => {
        signOut()
    }

    return (
        <Button variant={"ghost"} className="text-text-900 rounded-3xl space-x-1 outline-none" onClick={handleClick}>
            <span className="hidden md:inline font-bold text-md">logout</span>
            <LogOutIcon />
        </Button>
    )
}