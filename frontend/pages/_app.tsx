import "../styles/global.scss";
import type { AppProps } from 'next/app'
import Layout from "../layout/Layout";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const {store} = wrapper.useWrappedStore(pageProps)
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    
  )
}