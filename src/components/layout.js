import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="px-4">{children}</main>
      <Footer />
    </>
  )
}
