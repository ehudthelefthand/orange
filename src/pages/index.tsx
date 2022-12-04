import { trpc } from '@/utils/trpc'
import { Customer } from '@prisma/client'
import Head from 'next/head'

export default function Home() {
    const { data: hello } = trpc.hello.useQuery({ text: 'Pongneng' })
    const { data: customers } = trpc.customer.all.useQuery()

    const fullName = (customer: Customer) => {
        return `${customer.firstName} ${customer.lastName}`
    }

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
                    <div key={customer.id}>{fullName(customer)}</div>
                ))}
            </main>
        </>
    )
}
