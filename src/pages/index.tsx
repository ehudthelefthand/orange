import Head from 'next/head'
import React from 'react'

type BaseFieldProps = FieldProps & {
    type: string
}

type FieldProps = {
    label: string
    fieldname: string
}

const BaseField = ({ type, label, fieldname }: BaseFieldProps) => {
    return (
        <div className="w-full flex flex-col mb-3">
            <label className="mb-1" htmlFor={fieldname}>
                {label}
            </label>
            <input
                className="border-1 border-gray-900 rounded h-12 px-3 py-2 shadow"
                type={type}
                id={fieldname}
                name={fieldname}
            />
        </div>
    )
}

const TextField = (props: FieldProps) => {
    return <BaseField type="text" {...props} />
}

const MobileField = (props: FieldProps) => {
    return <BaseField type="tel" {...props} />
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
                    <div className="flex flex-col space-y-3 mt-4">
                        <button className="rounded bg-gray-900 text-white h-12 w-full shadow">บันทึก</button>
                        <button className=" border-gray-900 bg-white rounded h-12 w-full shadow">ยกเลิก</button>
                    </div>
                </main>
            </div>
        </>
    )
}
