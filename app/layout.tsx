import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Payperless",
  description: "Payperless application",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
