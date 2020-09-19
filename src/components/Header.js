import React from "react";
import NavItem from "./NavItem";

function Header() {
  return (
    <header className="header bg-white py-3 ">
      <div className="lg:container mx-auto px-16 flex items-center justify-between">
        <div className="flex items-center">
          <div className="brand-logo">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                  fill="#DA552F"
                ></path>
                <path
                  d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
                  fill="#FFF"
                ></path>
              </g>
            </svg>
          </div>
          <input
            type="text"
            name="search"
            className="search-input w-48 sm:w-64 inline-block mx-4 border outline-none p-2 py-1  rounded-md"
            onClick={() => {}}
            placeholder="Discover your next favorite thing"
          />
          <ul className="md:flex nav-links hidden">
            {["Deals", "Jobs", "Discussions", "Ship", "Mentors"].map(
              (navItem, index) => (
                <NavItem key={index} content={navItem} />
              )
            )}
          </ul>
        </div>
        <div className="buttons hidden lg:block ">
          <a
            className="px-4 py-1 outline-none bg-red-400 text-gray-200 font-bold text-md border border-gray-400 rounded-md mx-2 btn-login"
            href="/"
          >
            Log in
          </a>
          <a
            href="/"
            className="px-4 py-1 outline-none font-bold text-md  border border-gray-400 rounded-md mx-2 btn-register"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
