import Head from 'next/head'
import React from 'react'

type TextFieldProps = {
    label: string
    fieldname: string
}

const TextField = ({ label, fieldname }: TextFieldProps) => {
    return (
        <div className="w-full flex flex-col mb-3">
            <label className="mb-1" htmlFor={fieldname}>
                {label}
            </label>
            <input
                className="border-2 border-gray-900 rounded h-12 px-3 py-2"
                type="text"
                id={fieldname}
                name={fieldname}
            />
        </div>
    )
}

const MobileField = ({ label, fieldname }: TextFieldProps) => {
    return (
        <div className="w-full flex flex-col mb-3">
            <label className="mb-1" htmlFor={fieldname}>
                {label}
            </label>
            <input
                className="border-2 border-gray-900 rounded h-12 px-3 py-2"
                type="tel"
                id={fieldname}
                name={fieldname}
            />
        </div>
    )
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Orange</title>
                <meta name="description" content="orange distribution shop" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col w-screen min-h-screen bg-gray-200">
                <main className="flex flex-col px-4 pt-4 pb-8">
                    <h1 className="text-xl font-bold mb-2">ข้อมูลลูกค้า</h1>
                    <TextField label="ชื่อ" fieldname="firstname" />
                    <TextField label="นามสกุล" fieldname="lastname" />
                    <TextField label="ชื่อร้าน" fieldname="shopname" />
                    <MobileField label="เบอร์โทร" fieldname="tel" />
                    <TextField label="Line" fieldname="line" />
                    <TextField label="ที่อยู่" fieldname="address" />
                    <TextField label="รหัสไปรษณีย์" fieldname="zipcode" />
                    <TextField label="ตำบล" fieldname="city" />
                    <TextField label="อำเภอ" fieldname="district" />
                    <TextField label="จังหวัด" fieldname="province" />
                    <TextField label="ประเทศ" fieldname="country" />
                    <div className="flex flex-col space-y-2 mt-4">
                        <button className="border-none rounded bg-gray-900 text-white h-12 w-full">บันทึก</button>
                        <button className="border-2 border-gray-900 bg-white rounded h-12 w-full">ยกเลิก</button>
                    </div>
                </main>
            </div>
        </>
    )
}
