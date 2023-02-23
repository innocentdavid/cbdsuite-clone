import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SiteLayout from '../components/SiteLayout'
import { useRouter } from 'next/router'
import DashboardLayout from '../components/DashboardLayout'
import { ClerkProvider } from '@clerk/nextjs'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ClerkProvider>
        {router.pathname.startsWith('/dashboard') ||
        router.pathname.startsWith('/referral') ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <SiteLayout>
            <Component {...pageProps} />
          </SiteLayout>
        )}
    </ClerkProvider>
  )
}

export default MyApp
