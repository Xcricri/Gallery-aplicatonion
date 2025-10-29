import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function Home() {
    const user = await currentUser()

    if (!user) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <h1>Tidak ada yang Login</h1>
            </div>
        )
    }
    
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="">
                <div>
                    <h1 className="text-white text-2xl">Hello {user.firstName}</h1>
                </div>
            </main>
        </div>
    );
}
