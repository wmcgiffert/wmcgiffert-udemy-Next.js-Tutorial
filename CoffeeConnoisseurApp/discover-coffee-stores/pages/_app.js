import '@/styles/globals.css'
import { IBM_Plex_Sans } from '@next/font/google'

const IBM = IBM_Plex_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={IBM.className}>
      <Component {...pageProps} />
    </main>
  )
}