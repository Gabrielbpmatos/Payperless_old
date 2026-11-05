import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Payperless — Menos burocracia. Mais controlo.",
  description: "Organize faturas, contratos e garantias num cofre digital inteligente.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-PT"><body>{children}</body></html>
}
