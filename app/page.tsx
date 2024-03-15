import { auth } from "@/auth";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { Button } from "@/components/ui/button";

export default async function HomePage() {

  const session = await auth()

  return (
    <>
      <nav className="flex items-center gap-4">
        {session ? <LogoutButton /> : <LoginButton />}
        <ThemeToggleButton />
        <Button variant={"secondary"}>test</Button>
      </nav>
    </>
  );
}
