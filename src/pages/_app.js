import '@styles/globals.css'
import GlobalStyles from '@GlobalStyles'

export default function App({ Component, pageProps }) {
  return <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
}
