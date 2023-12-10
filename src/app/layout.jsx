import { Inter } from 'next/font/google'
import './globals.css'
import ToastProvider from '@/components/toastProvider/ToastProvider'
import Header from '@/layouts/header/Header'
import Footer from '@/layouts/footer/Footer'
import Provider from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header/>
          <ToastProvider/>
          {children}
          <Footer/>
        </Provider>
        </body>
    </html>
  )
}
