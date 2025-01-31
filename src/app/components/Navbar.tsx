import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Navicons from "./Navicons";

const Navbar = () => {
  return (
    <div className="h-20 relative px-4 md:px-8 lg:px-16 xl:px-64">
      {/* Mobile */}
      <div className="h-full flex md:hidden items-center justify-between">
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>

      {/* Bigger screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left */}
        <div className="w-1/3 lg:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items- gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <div className="hidden lg:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3 lg:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <Navicons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
