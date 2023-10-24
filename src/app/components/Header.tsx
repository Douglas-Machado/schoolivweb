import Image from 'next/image'
import { LuSearch } from 'react-icons/lu'
export default function Header() {
    return (
        <header className='flex bg-zinc-500 h-20 py-12 items-center shadow-md shadow-zinc-600 fixed right-0 left-0'>
            <div className='bg-orange-500'></div>
            <div>
                <form className='relative'>
                    <input
                        type="text"
                        placeholder="Search..."
                        name="search"
                        className="w-4/6 h-8 pr-14.5"
                    />
                    <button type='submit' className='absolute top-1.5 right-12'>
                        <LuSearch color="red"/>
                    </button>
                </form>
            </div>
            <Image
                src="/icon-placeholder.png"
                width={48}
                height={48}
                alt="icon-plcaeholder"
                className='rounded-full'
            />
        </header>
    )
}
