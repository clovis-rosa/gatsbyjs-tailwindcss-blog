import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { ThemeProvider } from "../context/themeContext"

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="dark:text-gray-100 dark:bg-gray-900">
        <Header />
        <main className="px-4">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
