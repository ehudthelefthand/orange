import { trpc } from '@/utils/trpc'
import Head from 'next/head'

export default function Home() {
    const { data: hello } = trpc.hello.useQuery({ text: 'Pongneng' })
    const { data: customers } = trpc.getCustomers.useQuery()

    return (
        <>
            <Head>
                <title>Orange</title>
                <meta name="description" content="orange distribution shop" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="text-xl text-red-600">{hello?.greeting}</h1>
                {customers?.map((customer) => (
                    <div key={customer.id}>{customer.firstName}</div>
                ))}
            </main>
        </>
    )
}
