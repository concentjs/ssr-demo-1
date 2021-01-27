import '../styles/globals.css'
import '../runConcent'
import { setState } from 'concent';

function MyApp({ Component, pageProps }) {

  // 这里记录 getStaticProps 的状态到store
  if (pageProps.module) {
    setState(pageProps.module, pageProps.state);
  }

  return <Component {...pageProps} />
}

export default MyApp
