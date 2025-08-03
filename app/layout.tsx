import type React from "react"
import { Inter } from "next/font/google"
import { FirebaseProvider } from "@/components/providers/firebase-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FirebaseProvider>{children}</FirebaseProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
