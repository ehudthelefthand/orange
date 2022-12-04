import prisma from '@/utils/prisma'
import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'

// create context based of incoming request
// set as optional here so it can also be re-used for `getStaticProps()`
export const createContext = async (opts?: trpcNext.CreateNextContextOptions) => {
    return {
        req: opts?.req,
        prisma,
        customer: prisma.customer,
    }
}
export type Context = trpc.inferAsyncReturnType<typeof createContext>
