import { REM } from 'next/font/google'
import Head from 'next/head'
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const font = REM({ subsets: ['latin'] })

export default function Layout({ title, description, children }) {
    return <>
        <Head>
            <title>{title || "ParkSthal"}</title>
            <meta name="description" content={description || ""} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
            <main className={`${font.className}`}>
                {children}
            </main>
        </StyleSheetManager>
    </>
}