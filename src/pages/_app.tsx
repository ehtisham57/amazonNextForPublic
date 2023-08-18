import RootlayOut from '@/components/rootLayOuts/RootlayOut'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { persistor, store } from '../store/Store'
import { Provider } from 'react-redux'

import { SessionProvider } from "next-auth/react"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <PersistGate persistor={persistor} loading={null}>
      <SessionProvider session={session}>
      <Provider store={store}>
    <div className='font-bodyFont'>
      <RootlayOut>
      <Component {...pageProps} />
      </RootlayOut>
    </div>
    </Provider>
      </SessionProvider>
    </PersistGate>
  )
}
