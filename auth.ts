import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

export const { handlers: { GET, POST }, auth } = NextAuth({
    ...authConfig,
    adapter: PrismaAdapter(client),
    session: { strategy: "jwt" },
    callbacks: {
        session: async ({ session }) => {
            if(session){
                const userFromDB = await client.user.findUnique({
                    where: {
                        email: session.user.email
                    }
                })

                if(userFromDB) {
                    return {
                        ...session,
                        user: {
                            ...session.user,
                            ...userFromDB
                        }
                    }
                }
            }

            return session
        }
    }
})