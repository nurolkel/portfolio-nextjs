import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../components/layout';

import 'normalize.css/normalize.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
