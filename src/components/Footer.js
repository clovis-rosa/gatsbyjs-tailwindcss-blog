import React from "react"
import { Link } from "gatsby"
import Email from "../../content/assets/svg/email.svg"
import Twitter from "../../content/assets/svg/twitter.svg"
import Github from "../../content/assets/svg/github.svg"

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto pt-32 pb-12 dark:text-gray-100 dark:bg-gray-900">
      <div className="grid justify-center pt-6 lg:justify-between">
        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
          <span>© {new Date().getFullYear()}, All rights reserved</span>
          <Link to="/">
            <span>Privacy policy</span>
          </Link>
          <Link to="/">
            <span>Terms of service</span>
          </Link>
        </div>
        <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
          <a
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-purple-400 dark:hover:bg-purple-500 dark:text-gray-900"
          >
            <Email />
          </a>
          <a
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-purple-400 dark:hover:bg-purple-500 dark:text-gray-900"
          >
            <Twitter />
          </a>
          <a
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-purple-400 dark:hover:bg-purple-500 dark:text-gray-900"
          >
            <Github />
          </a>
        </div>
      </div>
    </footer>
  )
}
