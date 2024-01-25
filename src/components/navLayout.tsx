"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"

type NavLink = {
  href: string
  label: string
}

// Config array for navigation links
const navLinks: NavLink[] = [
  { href: "/", label: "explore" },
  { href: "/about", label: "about" },
]

export default function NavLayout(): JSX.Element {
  const pathname = usePathname()

  // Function to check if the link is active
  const isActive = (href: string): boolean => {
    return pathname === href
  }

  return (
    <div className="flex justify-between items-center">
      <Link className=" w-24 md:w-40 h-6 md:h-10 relative" href="/">
        <Image
          src={"/images/brand/logo_full.svg"}
          alt="Logo"
          fill
        />
      </Link>
      <div className="flex justify-end space-x-8 text-sm md:text-base">
        {navLinks?.map((link) => (
          <Link
            className={isActive(link.href) ? "underline" : ""}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
