import { Html, Head, Main, NextScript } from 'next/document'

function Document () {
    return (
        <Html lang="en" className="h-max bg-slate-50">
            <Head>
                <link rel="icon" href="/logo.ico" sizes="192x192" />
            </Head>
            <body className="h-full">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}

export default Document