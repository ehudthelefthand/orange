import { trpc } from '@/utils/trpc'

const CustomerListPage = () => {
    const { data, isError, isLoading } = trpc.customer.all.useQuery()

    return (
        <div className="flex flex-row flex-nowrap justify-start items-start">
            <div className="flex flex-col">
                <div className="h-20"></div>
                <div className="text-white">
                    <div className="flex flex-row flex-nowrap">
                        <div className="w-1 h-1"></div>
                        <div>Dashboard</div>
                    </div>
                    <div className="flex flex-row flex-nowrap">
                        <div className="w-1 h-1"></div>
                        <div>Customer</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="h-20"></div>
                <div></div>
            </div>
        </div>
    )
}

export default CustomerListPage
