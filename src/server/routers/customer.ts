import { procedure, router } from '@/server/trpc'

const customerRouter = router({
    all: procedure.query(async ({ ctx }) => {
        return await ctx.customer.findMany()
    }),
})

export default customerRouter
