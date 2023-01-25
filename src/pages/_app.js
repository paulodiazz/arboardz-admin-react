import '@/styles/globals.css'
import Layout from '../components/Layout/Layout';
import { store } from "../store/redux-store/store"

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default store.withRedux(MyApp);
