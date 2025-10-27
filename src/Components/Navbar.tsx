"use client"

import Link from "next/link"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { href: "/nyheder", label: "Nyheder" },
    { href: "/sport", label: "Sport" },
    { href: "/vejr", label: "Vejr" },
    { href: "/podcast", label: "Podcast" },
  ]

  return (
    <nav>
      <div className="h-20 flex items-center justify-between px-5 bg-black text-white">
        <h1>
          <Link
            href={"/"}
            className="font-bold text-3xl"
          >
            ..news
          </Link>
        </h1>

        <ul className="hidden md:flex space-x-10 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href}
                className="hover:text-gray-400 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <Link
            href="/login"
          >
            Login
          </Link>
        </div>
        
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-6 uppercase bg-white text-gray-900 w-full py-6 shadow-md">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href}
                className="font-semibold text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar