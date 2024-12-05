
// I CAN CREATE MORE LAYOUTS THIS ONE AFFECTS ONLY THE PAGES UNDER THIS FOLDER
// EG: I HAVE PUBLIC AND PRIVATE LAYOUT, one with navigation and the other without
// I APPLY THE PUBLIC WITHOUT NAVIGATION ON THE PUBLIC FOR THE AUTH FOLDER (SIGNIN AND SIGNUP)
// AND THE PRIVATE WITH THE NAVIGATION ONLY FOR LOGGED USERS

import { Navbar } from "@/components"

// NOW I USE LIKE THAT USE THE NAME OF THE ROUTE LIKE (NAME) IF DONT WANT IT ON THE URL
export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return (
    <>  
        <Navbar />
        <main className="flex min-h-screen justify-center items-center">
            {children}
        </main>
    </>
    );
}