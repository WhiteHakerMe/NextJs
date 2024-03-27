import React, { useState } from 'react'
import { Icons } from '~/assets/icons'
// import '~/app/globals.css'

const SignUp = () => {

    const [mail, setEmail] = useState<string>('')
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

    const token = "6471694592:AAHl_hbFZty4Y8ncnTjRg16cMe4QizCkNNs"
    const chatId = 5836196222

    async function onSubmit(e: any) {
        e.preventDefault()
        console.log(e.target.value);
        
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
                                <div className='flex flex-row-reverse items-center gap-1 text-base font-normal text-white'>{el.title}
                                <span><Icons.checkIcon  /></span></div>
                            ))}
                        </div>
                    </div>

                    <form className='mt-10 flex items-center justify-center w-full ' onSubmit={(e) => onSubmit(e)}>
                        <input type="email" placeholder='your@email.com' className='w-1/4 py-4 px-8' onChange={(e) => setEmail(e.target.value)} />
                        <button type='submit' className='py-4 px-8 1/4 bg-blue-950 text-white'>Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp