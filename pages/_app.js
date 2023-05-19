import '../styles/globals.css'
import Layout from '../components/Layout/layout'

function MyApp({ Component, pageProps }) {

  return( 
  <Layout>
  <Component {...pageProps} />{/* //pages content  */}
  </Layout>)
}

export default MyApp
