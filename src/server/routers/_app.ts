import { procedure, router } from '@/server/trpc'
import { z } from 'zod'

export const appRouter = router({
    hello: procedure
        .input(
            z.object({
                text: z.string(),
            })
        )
        .query(({ input }) => {
            return {
                greeting: `hello ${input.text}`,
            }
        }),
    getCustomers: procedure.query(async () => {
        return await prisma?.customer.findMany()
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter
