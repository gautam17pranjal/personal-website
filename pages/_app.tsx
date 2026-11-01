import "../styles/global.scss";
import { AppProps } from "next/app";
import React, {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import {GoogleAnalytics} from "@next/third-parties/google";
import {GaMeasurementId, isAnalyticsEnabled} from "@/module/core/lib/service/analytics.service";

export type PageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: PageWithLayout
}


function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <>
            {getLayout(<Component {...pageProps} />)}
            {/* page views on client-side navigation are tracked by GA4 enhanced measurement (browser history changes) */}
            {isAnalyticsEnabled && <GoogleAnalytics gaId={GaMeasurementId} />}
        </>
    )
}

export default App
