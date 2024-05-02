import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        
<nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <h2>Logo</h2>
    </div>
    <div className="flex items-center justify-between gap-16">
        <ul className="flex items-center justify-between gap-10">
            <li className="group flex  cursor-pointer flex-col">
               <Link href={'/'}> Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></Link>
            </li>
            <li className="group flex  cursor-pointer flex-col">
               <Link href={'/about'}> About <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></Link>
            </li>
            <li className="group flex  cursor-pointer flex-col">
               <Link href={'/blog'}> Blog <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></Link>
            </li>
          
        </ul>
        <div className="flex items-center justify-between gap-5">
            <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log In</button>
            <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Register</button>
        </div>
    </div>
</nav>
   
    );
};

export default Navbar;