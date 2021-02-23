import React, { useState } from "react"
import { Link } from "gatsby"
import ButtonThemeSwitch from "./ButtonThemeSwitch"
import Logo from "../../content/assets/svg/logo.svg"
import MenuOpen from "../../content/assets/svg/MenuOpen.svg"
import MenuClose from "../../content/assets/svg/MenuClose.svg"

const menuData = [
  { title: "Home", url: "/" },
  { title: "Company", url: "/" },
  { title: "About", url: "/about" },
]

export default function Header() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <header className="relative">
        <div className="pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex justify-between flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/">
                  <span className="sr-only">Workflow</span>
                  <Logo />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    onClick={handleClick}
                    type="button"
                    className="cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800  focus:ring-purple-400"
                    id="main-menu"
                    aria-haspopup="true"
                    aria-label="Open main menu"
                  >
                    <span className="sr-only">Open main menu</span>
                    <MenuOpen />
                  </button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {menuData.map(link => (
                  <Link
                    key={link.title}
                    to={link.url}
                    className="text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 tracking-normal px-4 py-2 rounded"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:ml-10 md:flex md:items-center md:space-x-6">
              <ButtonThemeSwitch />
            </div>
          </nav>
        </div>

        {/* <!--
            Mobile menu, show/hide based on menu open state.
          --> */}

        <div
          className={`absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden ${
            click
              ? "duration-150 ease-out opacity-100 scale-100"
              : "duration-150 ease-in opacity-0 scale-95"
          }`}
        >
          <div className="dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-md bg-white ring-1 ring-white ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link to="/">
                  <span className="sr-only">Workflow</span>
                  <Logo />
                </Link>
              </div>

              <div className="-mr-2">
                <button
                  onClick={handleClick}
                  className="cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-gray-800 bg-gray-100 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-purple-200 focus:ring-purple-400"
                  aria-label="Close menu"
                  type="button"
                >
                  <span className="sr-only">Close menu</span>

                  <MenuClose />
                </button>
              </div>
            </div>
            <div
              className="pt-5 pb-6"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-2 space-y-2 text-center uppercase" role="none">
                {menuData.map(link => (
                  <Link
                    key={link.title}
                    to={link.url}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:bg-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
