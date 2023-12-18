
import './globals.css'
import { Toaster } from 'sonner'
import Navbar from "../components/navbar/Navbar"



export const metadata = {
  title: 'Job Portal',
  description: 'Search Here For Your Better Job',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster richColors position="top-right" />
        <Navbar />
        <hr />
        {children}
      </body>
    </html>
  )
}
