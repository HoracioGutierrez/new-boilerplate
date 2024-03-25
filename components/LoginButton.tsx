"use client"
import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { LogInIcon } from "lucide-react";

export default function LoginButton() {

    console.log(useSession())

    const handleClick = () => {
        signIn("google")
    }

    return (
        <Button variant={"ghost"} onClick={handleClick} className="text-text-900 rounded-3xl font-bold text-md space-x-1 outline-none">
            <span className="hidden md:inline">login</span>
            <LogInIcon />
        </Button>
    )
}