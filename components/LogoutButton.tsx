"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

export default function LogoutButton() {

    const handleClick = () => {
        signOut()
    }

    return (
        <Button onClick={handleClick}>logout</Button>
    )
}