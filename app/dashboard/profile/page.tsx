import prisma from "@/lib/db"
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { SubmitButton } from "@/components/SubmitButton"

async function getData(userId: string) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { channelName: true },
    })
    return user?.channelName || '';
}

export default async function ProfilePage() {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
        redirect("/sign-in");
    }

    const channelName = await getData(userId);

    async function postData(formData: FormData) {
        "use server"

        const channelName = formData.get("channelName");

        await prisma.user.update({
            where: { id: userId as string },
            data: { channelName: channelName as string }
        });

        revalidatePath('/dashboard');
    }

    return (
        <div className="max-w-2xl mx-auto py-8 px-4">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">Profile</h1>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <form action={postData}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="channelName" className="text-sm font-medium leading-none">
                                Channel Name
                            </label>
                            <input
                                type="text"
                                id="channelName"
                                name="channelName"
                                defaultValue={channelName}
                                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                            />
                        </div>
                        <SubmitButton/>
                    </div>
                </form>
            </div>
        </div>
    )
}