import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type props = {
    children: ReactNode
}

export default function Layout({ children }: props) {
    return (
        <div className="h-screen">
            <Header />
            <div className="pt-24 h-full flex justify-start">
                <Sidebar />
                <main className="">
                    {children}
                </main>
            </div>
        </div>
    )
}
