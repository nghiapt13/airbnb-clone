import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/navbar'
import RegisterModal from './components/modals/RegisterModal'
import { ToasterProvider } from './providers/Toaster'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'AirBnb clone by NghiaPT',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const curentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <SearchModal/>
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={curentUser} />
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
