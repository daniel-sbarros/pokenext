import Footer from './Footer';
import NavBar from './NavBar';
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <link rel='shortcut icon' href='/images/favicon.ico' />
                <title>PokeNext</title>
            </Head>

            <NavBar />
            <main className='container-md'>{children}</main>
            <Footer />
        </>
    )
}