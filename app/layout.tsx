import { Footer, Header } from '@/Component'
import './globals.css'


export const metadata = {
  title: 'Luxury Car Rental',
  description: 'Exclusivity Mixed With Luxury',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
