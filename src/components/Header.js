import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from '@/components/ThemeToggler';
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

function Header() {
    return (
        <header style={{ zIndex: '100' }} className="fixed top-0 left-0 w-full p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 flex items-center justify-between">
            <Link href='/' className="mr-10">
                <Image 
                    src='/a943ae.webp' 
                    alt='' 
                    width={120} 
                    height={100} 
                    className='cursor-pointer dark:invert' 
                />
            </Link>

            <div className="flex items-center gap-2">
                <GenreDropdown />

                <SearchInput />

                <ThemeToggler />
            </div>
        </header>
    );
}

export default Header;
