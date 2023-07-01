import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"


export default function Layout({children}){
    return(
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico"/>
                <title>Pokedex</title>
            </Head>
            <Navbar/>
            <main className="mainContainer">{children}</main>
            <Footer/>
        </>
    )
}