import { PrismaClient } from '@prisma/client'
import { convertToObject } from 'typescript'

const prisma = new PrismaClient()

async function main() {
    await prisma.customer.createMany({
        data: [
            {
                firstName: 'Peerawat',
                lastName: 'Poombua',
                shopName: 'ก๋วยเตี๋ยวเนื้อไส้',
                contactNumber: '0811234567',
            },
            {
                nickName: 'พี่หมู',
                shopName: 'ก๋วยเตี๋ยวเนื้อไส้',
                contactNumber: '0811234568',
            },
            {
                firstName: 'Qen',
                lastName: 'Kung',
                shopName: 'ลาบอุดร',
                contactNumber: '0811234569',
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
