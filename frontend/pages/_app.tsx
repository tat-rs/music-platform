import type { AppProps } from 'next/app';
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import "../styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  const {store} = wrapper.useWrappedStore(pageProps)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    
  )
}