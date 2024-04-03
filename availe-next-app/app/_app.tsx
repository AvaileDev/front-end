import type { AppProps } from "next/app";
import { useEffect } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import 'globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        smoothscroll.polyfill();
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;