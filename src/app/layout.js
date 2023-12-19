
import './globals.css'
import { Toaster } from 'sonner'
import Navbar from "../components/navbar/Navbar"
import Categories from '../components/categories/Categories'
import Trust from '../components/trust/Trust'



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
        <Categories />
        <Trust />
      </body>
    </html>
  )
}
