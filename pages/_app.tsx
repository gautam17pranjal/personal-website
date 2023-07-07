import "../styles/global.scss";
import { AppProps } from "next/app";
import React, {ReactElement, ReactNode} from "react";
import {NextPage} from "next";

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: PageWithLayout
}


function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        // <Component {...pageProps} />
        getLayout(<Component {...pageProps} />)
    )
}

export default App