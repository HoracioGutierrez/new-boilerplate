"use client"
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function LoginButton() {

    const handleClick = () => {
        signIn("google")
    }

    return (
        <Button onClick={handleClick}>login</Button>
    )
}