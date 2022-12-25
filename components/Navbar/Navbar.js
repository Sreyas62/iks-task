import React, { useState } from "react";

import Logo from "../Logo";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
  <div>
    <nav className="bg-white">
      
      <div className="flex justify-between py-5 relative mx-auto xl:px-32 max-w-lg;">
        <Logo />

        <ul className="lg:flex hidden items-center inline pt-0 gap-6">
          <li>
            <Link href="/" className="inline-block">
              Home
            </Link>
          </li>
      
          <li>
            <div className="dropdown dropdown-hover">
              <a tabIndex={0} className="m-1 flex inline">
                <div>Products</div>
                <div className="pt-1 pl-1">
                  <IoIosArrowDown />
                </div>
              </a>

      
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <a tabIndex={0} className="m-1 flex inline">
                <div>Resources</div>
                <div className="pt-1 pl-1">
                  <IoIosArrowDown />
                </div>
              </a>

              
            </div>
          </li>
          <li>
            <Link href="/" className="inline-block">
              Pricings
            </Link>
          </li>
        </ul>

        <div className="flex inline">
          
          <div>
            <button
              className="scale-150 lg:hidden mb-0 mt-5 py-0 px-5"
              onClick={() => setOpen(!open)}
            >
              <img src="/menu-icon.svg" alt="menu icon " />
            </button>
          </div>
        </div>





        {/*Mobile view*/}
        <ul
          className={`lg:hidden bg-white absolute w-full py-10 pl-4 mt-10 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
         <li>
            <Link href="/" className="m-1 flex inline pt-3 px-2 inline-block">
              Home
            </Link>
          </li>
         
          <li>
            <div className="dropdown dropdown-hover">
              <a
                tabIndex={0}
                className="m-1 flex inline pt-3 px-2 inline-block"
              >
                <div>Products</div>
                <div className="pt-1 pl-1">
                  <IoIosArrowDown />
                </div>
              </a>

              
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <a tabIndex={0} className="m-1 flex inline pt-3 px-2 inline-block">
                <div>Resources</div>
                <div className="pt-1 pl-1">
                  <IoIosArrowDown />
                </div>
              </a>
              </div>
             
           
          </li>
          <li>
            <Link href="/" className="m-1 flex inline pt-3 px-2 inline-block">
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      
    </nav>
    </div>
  );
}
