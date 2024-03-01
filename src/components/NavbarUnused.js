"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from '/public/image/creationslogo.png'

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [scroll, setScroll] = useState(false);

  // This function will be triggered on scroll
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <div>
      <nav
        className={`w-full top-0 left-0 right-0 z-10 transition-all duration-100 shadow-sm fixed ease-in-out ${
          scroll ? "border-b-2 bg-gray-100" : "bg-white"
        }`}
      >

        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 h-20">
          <div>
            <div className="flex items-center justify-between py-1 md:py-5 md:block h-full">
              {/* LOGO */}
              <Link href="/">
              <Image
              src={logo}
              alt="Creations Logo"
              height={200}
              width={200}
              className="h-full object-contain"
   
            />

              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                        stroke="#1C274C"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                        stroke="#1C274C"
                        strokeWidth="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 18L20 18"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 12L20 12"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 6L20 6"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="md:flex">
              <li className="md:hidden text-xl bg-gray-100 text-red-600 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900">
                  <Link href="/mobile-tyre-fitting" onClick={() => setNavbar(!navbar)}>
                    Mobile Tyre Fitting
                  </Link>
                </li>
                <li className="md:hidden text-xl bg-gray-50 text-red-600 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900">
                  <Link href="/emergency-mobile-tyre-fitting" onClick={() => setNavbar(!navbar)}>
                    Emergency Mobile Tyre Fitting
                  </Link>
                </li>
                <li className="md:hidden text-xl bg-gray-100 text-red-600 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900">
                  <Link href="/mobile-tyre-fitters" onClick={() => setNavbar(!navbar)}>
                    Mobile Tyre Fitters
                  </Link>
                </li>
                <li className="text-xl text-red-600 bg-gray-50 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li className="text-xl text-red-600 py-2 px-6 bg-gray-100 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
