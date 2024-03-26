import { auth } from "@/auth";
import DashboardForm from "@/components/DashboardForm";
import Page from "@/components/Page";

export default async function DashboardPage() {

    const session = await auth()

    return (
        <Page title="Dashboard">
            <DashboardForm session={session}/>
        </Page>
    );
}
