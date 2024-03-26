"use client"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Button } from "./ui/button";
import { Session } from "next-auth";

interface DashboardFormProps {
    session: Session | null
}

export default function DashboardForm({ session }: DashboardFormProps) {

    const schema = z.object({
        email: z.string().email(),
        avatar: z.string().url(),
    })

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: { email: session?.user?.email || "", avatar: session?.user?.image || "" },
    })

    const handleSubmit = () => {
        console.log(form.getValues())
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField name="email" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input className="bg-primary-100" placeholder="Email" {...field} />
                            </FormControl>
                        </FormItem>
                    )
                }}>
                </FormField>
                <FormField name="avatar" render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>avatar</FormLabel>
                            <FormControl>
                                <Input className="bg-primary-100" placeholder="imagen.jpg" {...field} />
                            </FormControl>
                        </FormItem>
                    )
                }}>
                </FormField>
                <div className="flex gap-2 mt-4">
                    <Button type="button" className="bg-accent text-white">cancelar</Button>
                    <Button type="submit" className="bg-primary text-white">guardar</Button>
                </div>
            </form>
        </Form>
    )
}