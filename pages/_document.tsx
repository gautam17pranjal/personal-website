import { Html, Head, Main, NextScript } from 'next/document'

function Document () {
    return (
        <Html lang="en" className="h-max bg-zinc-100 dark:bg-black">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/logo.ico" sizes="192x192" />
                {/* apply the saved or system theme before first paint to avoid a flash of the wrong theme */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`,
                    }}
                />
            </Head>
            <body className="h-full">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}

export default Document