"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      {/* for large screens  */}
      <div className="font-saira hidden lg:flex px-24 py-4 bg-themeBlue text-white justify-between">
        <div className="left">
          <Link href={"/"}>
            <Image
              src={
                "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1715850413/elito-batteries/ygitcgylhdoachafpdp4.svg"
              }
              alt="logo"
              height="100"
              width="100"
            />
          </Link>
        </div>

        <div className="right flex items-center">
          {/* nav links  */}
          <div className="nav-links flex items-center gap-x-20">
            <ul className="flex gap-x-10 items-center">
              <Link href={"/"} className="capitalize">
                <li>Home</li>
              </Link>

              <Link href={"/about-us"} className="capitalize">
                <li>about elito</li>
              </Link>

              <li className="">
                <div className="flex w-full border-3 border-white items-center justify-center">
                  <div className="group relative cursor-pointer">
                    <div className="flex items-center justify-between">
                      <Link href={"/products"}>
                        <div className="menu-hover my-2 text-base font-medium text-white mx-2">
                          Our Products
                        </div>
                      </Link>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 min-w-[220px] shadow-xl group-hover:visible">
                      <Link
                        className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 capitalize"
                        href={"/products/car-suv-battery"}
                      >
                        car/suv Battery
                      </Link>
                      <Link
                        className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 capitalize"
                        href={"/products/truck-tractor-battery"}
                      >
                        truck/tractor battery
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <Link href={"/resources"} className="capitalize">
                <li>resources</li>
              </Link>

              <Link href={"/blogs"} className="capitalize">
                <li>blogs</li>
              </Link>

              <Link href={"/become-a-distributor"} className="capitalize">
                <li>become a distributor</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* for small screens */}
      <div className="relative lg:hidden w-full py-2 pl-3 pr-2 bg-themeBlue text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <Link href={"/"}>
              <Image
                src={
                  "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1715850413/elito-batteries/ygitcgylhdoachafpdp4.svg"
                }
                alt="logo"
                height="80"
                width="80"
              />
            </Link>
          </div>

          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-themeBlue text-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <Link href={"/"}>
                        <Image
                          src={
                            "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1715850413/elito-batteries/ygitcgylhdoachafpdp4.svg"
                          }
                          alt="logo"
                          height="80"
                          width="80"
                        />
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      <Link
                        href={"/"}
                        className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold`}
                        onClick={toggleMenu}
                      >
                        <span className="ml-0 text-base font-medium text-white">
                          Home
                        </span>
                      </Link>

                      <Link
                        href={"/about-us"}
                        className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold`}
                        onClick={toggleMenu}
                      >
                        <span className="ml-0 text-base font-medium text-white">
                          About Elito
                        </span>
                      </Link>

                      <Link
                        href={"/products"}
                        className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold`}
                        onClick={toggleMenu}
                      >
                        <span className="ml-0 text-base flex gap-x-2 items-center font-medium text-white">
                          Our Products{" "}
                          <span className="text-2xl hidden">
                            {" "}
                            <IoMdArrowDropdown />
                          </span>
                        </span>
                      </Link>

                      <Link
                        href={"/products/truck-tractor-battery"}
                        className={`-m-3 bg-[#03528D] mx-1 rounded-md p-3 text-sm font-semibold w-full`}
                        onClick={toggleMenu}
                      >
                        <span className="bg-[#03528D] mx-1 ml-0 text-base font-medium text-white">
                          Truck/Tractor Battery
                        </span>
                      </Link>

                      <Link
                        href={"/products/car-suv-battery"}
                        className={`-m-3 bg-[#03528D] mx-1 mt-1 rounded-md p-3 text-sm font-semibold w-full`}
                        onClick={toggleMenu}
                      >
                        <span className="bg-[#03528D] mx-1 ml-0 text-base font-medium text-white">
                          Car/Suv Battery
                        </span>
                      </Link>

                      <Link
                        href={"/resources"}
                        className={`-m-3 mt-2 flex items-center rounded-md p-3 text-sm font-semibold`}
                        onClick={toggleMenu}
                      >
                        <span className="ml-0 text-base font-medium text-white">
                          Resources
                        </span>
                      </Link>

                      <Link
                        href={"/blogs"}
                        className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold`}
                        onClick={toggleMenu}
                      >
                        <span className="ml-0 text-base font-medium text-white">
                          Blogs
                        </span>
                      </Link>

                      <Link
                        href={"/become-a-distributor"}
                        className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold`}
                        onClick={toggleMenu}
                      >
                        <span className="ml-0 text-base font-medium text-white">
                          Become A Distributor
                        </span>
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
