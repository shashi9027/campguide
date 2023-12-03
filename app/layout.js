import { Inter } from 'next/font/google'
import 'styles/globals.scss'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CampGuide',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <ToastContainer />
        {children}</body>
    </html>
  )
}
