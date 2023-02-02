import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Orange</title>
                <meta name="description" content="orange distribution shop" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col w-screen h-screen bg-gray-200">
                <main className="">
                    <div className="flex flex-col space-y-4 max-w-xl mx-auto mt-16">
                        <h1 className="text-xl font-bold">ข้อมูลลูกค้า</h1>
                        <div className="flex space-x-4">
                            <input
                                className="border-2 border-gray-900 rounded h-12 px-3 py-2 w-full"
                                type="text"
                                placeholder="ชื่อ"
                            />
                            <input
                                className="border-2 border-gray-900 rounded h-12 px-3 py-2 w-full"
                                type="text"
                                placeholder="นามสกุล"
                            />
                        </div>
                        <div className="flex">
                            <input
                                className="border-2 border-gray-900 rounded h-12 px-3 py-2 w-full"
                                type="text"
                                placeholder="ชื่อร้าน"
                            />
                        </div>
                        <div className="flex space-x-4">
                            <input
                                className="border-2 border-gray-900 rounded h-12 px-3 py-2 w-full"
                                type="text"
                                placeholder="เบอร์โทร"
                            />
                            <input
                                className="border-2 border-gray-900 rounded h-12 px-3 py-2 w-full"
                                type="text"
                                placeholder="ไลน์"
                            />
                        </div>
                        <div className="flex">
                            <textarea
                                className="border-2 border-gray-900 rounded h-24 max-h-24 px-3 py-2 w-full"
                                placeholder="ที่อยู่"
                            />
                        </div>

                        <div className="flex space-x-4">
                            <input
                                className="border-2 border-gray-900 rounded h-12 px-3 py-2 w-full"
                                type="text"
                                placeholder="ตำบล"
                            />
                            <input
                                className="border-2 border-gray-900 rounded h-12 px-3 py-2 w-full"
                                type="text"
                                placeholder="จังหวัด"
                            />
                        </div>
                        <div className="flex">
                            <input
                                className="border-2 border-gray-900 rounded h-12 px-3 py-2"
                                type="text"
                                placeholder="รหัสไปรษณีย์"
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button className="border-2 border-gray-900 bg-white rounded h-12 w-24">ยกเลิก</button>
                            <button className="border-none rounded bg-gray-900 text-white h-12 w-24">บันทึก</button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
