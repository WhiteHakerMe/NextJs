"use client"
import React, { useState } from 'react'
import { Icons } from '~/assets/icons'
// import '~/app/globals.css'

const SignUp = () => {

    const [email, setEmail] = useState<string>('')
    const EmailData = [
        {
            title: "Exclusive offers"
        },
        {
            title: "Free events"
        },
        {
            title: "Large discounts"
        }
    ]

    const token = "6471694592:AAFj1tF8V_lmvf7nB9h683qkXj1k7TZNec0"
    const chatId = 5836196222

    async function onSubmit(e: any) {
        e.preventDefault()
        const message = `Email: ${email}`
        const res = await fetch(`https://api.telegram.org/bot6471694592:AAFj1tF8V_lmvf7nB9h683qkXj1k7TZNec0/sendMessage?text=${message}&chat_id=${chatId}`)

        if (res.status == 200) {
            alert("Success")
        }
    }

    return (
        <section className='pt-24 pb-[86px] '>
            <div className='container'>
                <div className='w-full pt-24 h-[400px] bg-slate-500'>
                    <div className='max-w-[494px] w-full mx-auto'>
                        <h3 className='text-[32px] text-white font-normal leading-[45px] mb-3'>Join the club and get the benefit</h3>
                        <p className='text-lg font-normal leading-7 text-center text-white'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>

                        <div className='flex items-center gap-9 pt-[30px] justify-center'>
                            {EmailData.map((el, i) => (
                                <div key={i} className='flex flex-row-reverse items-center gap-1 text-base font-normal text-white'>{el.title}
                                <span><Icons.checkIcon  /></span></div>
                            ))}
                        </div>
                    </div>

                    <form className='mt-10 flex items-center justify-center w-full ' onSubmit={(e) => onSubmit(e)}>
                        <input type="email" placeholder='your@email.com' className='w-1/4 py-4 px-8' onChange={(e) => setEmail(e.target.value)} name="email" />
                        <button type='submit' className='py-4 px-8 1/4 bg-blue-950 text-white'>Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp