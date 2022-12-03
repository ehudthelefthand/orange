import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Orange</title>
                <meta name="description" content="orange distribution shop" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="text-xl text-red-600">Hello, Next.js!!!</h1>
            </main>
        </div>
    )
}
