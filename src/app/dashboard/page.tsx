import { AiOutlinePlus } from "react-icons/ai"

export default function Dashboard() {
    return (
        <div className="pl-16 pt-12 h-full">
            <h1 className="text-zinc-700 font-bold text-3xl">TURMAS</h1>
            <div className="pt-8 flex gap-20">
                <div>
                    <div className="bg-zinc-400 w-80 h-16 flex items-center justify-end px-4">
                        <AiOutlinePlus />
                    </div>
                    <div className="bg-zinc-300 h-48">

                    </div>
                </div>
                <div>
                    <div className="bg-zinc-400 w-80 h-16 flex items-center justify-end px-4">
                        <AiOutlinePlus />
                    </div>
                    <div className="bg-zinc-300 h-48">

                    </div>
                </div>
            </div>
        </div>
    )
}
