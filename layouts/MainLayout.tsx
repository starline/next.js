import Head from 'next/head'
import React from 'react'
import Navbar from '../components/navbar'
import GoogleTranslate from '../lib/GoogleTranslate'

type IMainLayoutProps = {
    children: React.ReactNode,
    title: string,
    description?: string,
    className?: string,
}

export default function MainLayout({ title, description, children }: IMainLayoutProps) {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}></meta>
            </Head>

            <Navbar></Navbar>

            <main>
                <div className='wrap'>
                    <div className='content'>
                        {children}
                    </div>
                </div>
            </main>

            <GoogleTranslate originalLang='ru' langFirstVisit='uk' domain='localhost:3000'></GoogleTranslate>

            <footer>
                <div className='wrap'>
                    <div>Подвал сайта</div>
                </div>
            </footer>
        </>
    )
}
