import Image from 'next/image'
import { LuSearch } from 'react-icons/lu'
export default function Header() {
    return (
        <header className='flex justify-end bg-zinc-500 h-20 py-12 shadow-md shadow-zinc-600 fixed right-0 left-0 w-screen px-8'>
            <div className='flex justify-between items-center w-[88%]'>
                <div className='bg-orange-500'></div>
                <div className='flex-1'>
                    <form className='relative w-9/12'>
                        <input
                            type="text"
                            placeholder=""
                            name="search"
                            className="w-full h-10 pr-14.5 rounded-full"
                        />
                        <button type='submit' className='!absolute right-3 top-[7px] rounded'>
                            <LuSearch size={20} color="54 255 0"/>
                        </button>
                    </form>
                </div>
                <div className='flex flex-1 justify-end'>
                    <Image
                        src="/icon-placeholder.png"
                        width={48}
                        height={48}
                        alt="icon-plcaeholder"
                        className='rounded-full'
                    />
                </div>
            </div>
        </header>
    )
}
