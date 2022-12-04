import customerRouter from '@/server/routers/customer'
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
    customer: customerRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
