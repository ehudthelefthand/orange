import { PrismaClient } from '@prisma/client'
import { convertToObject } from 'typescript'

const prisma = new PrismaClient()

async function main() {
    await prisma.customer.createMany({
        data: [
            {
                firstName: 'Peerawat',
                lastName: 'Poombua',
                mobile: '1234567890',
            },
            {
                firstName: 'Benya',
                lastName: 'Poombua',
                mobile: '248590745',
            },
            {
                firstName: 'Qen',
                lastName: 'Kung',
                mobile: '9243729874',
            },
        ],
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
