"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import Image from "next/image";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full mt-2 ml-32 pr-72">
      
      <div className="bg-[#1F1B2E] text-white text-sm py-2 px-4 flex justify-between items-center lg:px-8">
        <div className="hidden lg:block">
          ✔ Free Shipping On All Orders Over $50
        </div>
        <div className="flex justify-center w-full lg:w-auto space-x-4">
          <button className="hover:underline">Eng</button>
          <Link href="../faqs">
            <button className="hover:underline mr-4">FAQs</button>
          </Link>
          <AiTwotoneExclamationCircle />
          <Link href="../contact">
            <button className="hover:underline" >Need Help</button>
          </Link>
        </div>
      </div>

      <div className="bg-[#F8F9FA] py-4 px-4 border-b border-gray-300 lg:px-8">
        
        <div className="w-full max-w-[1321px] mx-auto flex justify-between items-center">
          
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg">
              <Image src="/logo.jpg" alt="logo" 
                height={50}
                width={100} 
              />
            </div>

            <span className="text-lg font-semibold">Comforty</span>
          </div>

          {/* Hamburger Menu - Mobile */}
          <button
            className="lg:hidden text-2xl ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <Link href="../cart">
            <div className="relative hidden lg:block md:hidden">
              <button className="bg-white border rounded-full p-2 flex items-center space-x-2 shadow-md hover:shadow-lg">
                <div className="w-8 h-8 rounded-full">
                <BsCartCheck />

                </div>
                <span className="text-sm">Cart</span>
                
              </button>
              <span className="absolute top-0 right-0 bg-teal-500 text-white text-xs rounded-full px-1.5">
                2
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Nav Links */}
      <div className="max-w-[1321px] mx-auto mt-4 hidden lg:flex justify-between items-center">
        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="/" className="text-teal-500 hover:underline">
            Home
          </Link>
          <Link href="../pages" className="hover:underline">
            Shop
          </Link>
          <Link href="../product" className="hover:underline">
            Product
          </Link>
          <Link href="../pages" className="hover:underline">
            Pages
          </Link>
          <Link href="../about" className="hover:underline">
            About
          </Link>
        </nav>
        {/* Contact */}
        <div className="w-45 h-8">
          <Link href="../contact" className="hover:underline">
          Contact: (805) 555-0111
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="bg-[#F8F9FA] p-4 text-sm font-medium lg:hidden max-w-[1321px] mx-auto">
          {/* Contact and Cart - Mobile */}
          <div className="flex mt-4 space-y-2">
            <div className="flex w-40 h-8 px-2 shadow-md hover:shadow-lg">
              <Link href="../contact" className="flex hover:underline">
              <FaPhoneVolume />
              <span className="text-sm px-4">(805) 555-0111</span>
              </Link>
            </div>
            <Link href="../cart">
              <button className="w-full bg-white border rounded-md p-2 flex shadow-md hover:shadow-lg">
                <div className="w-8 h-8 -mt-4 rounded-full">
                <BsCartCheck />
                </div>
                <span className="text-sm -mt-4 hover:underline">Add To Cart</span>
              </button>
            </Link>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <Link href="/" className="block text-teal-500 hover:underline">
              Home
            </Link>
            <Link href="../pages" className="block hover:underline">
              Shop
            </Link>
            <Link href="../product" className="block hover:underline">
              Product
            </Link>
            <Link href="../pages" className="block hover:underline">
              Pages
            </Link>
            <Link href="../about" className="block hover:underline">
              About
            </Link>
          </div>

          
        </nav>
      )}
    </header>
  );
};

export default Header;
