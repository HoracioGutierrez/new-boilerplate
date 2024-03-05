import { auth } from "@/auth";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { Button } from "@/components/ui/button";

export default async function HomePage() {

  const session = await auth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <LogoutButton /> : <LoginButton />}
    </main>
  );
}
