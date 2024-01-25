import type { Metadata } from "next"
import { Roboto_Serif } from "next/font/google"
import "./globals.css"
import NavLayout from "@/components/navLayout"
import classNames from "classnames"
// import FooterLayout from "@/components/components/footerLayout"

const inter = Roboto_Serif({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sabhyatah",
  description: "Indian hardware starups",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "p-2 space-y-2")}>
        <NavLayout />
        {children}
        {/* <FooterLayout /> */}
      </body>
    </html>
  )
}
