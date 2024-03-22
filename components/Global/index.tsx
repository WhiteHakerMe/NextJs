import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GlobalData } from '~/data'
import '~/app/globals.css'

const GlobalBr = () => {
    return (
        <section className='p-[60px]'>
            <div className='container'>
                    {GlobalData.map((el) => (
                        <div key={el.id} className='grid grid-cols-2 gap-2'>
                            <div className='bg-[rgb(42,37,75)] p-16 '>
                                <h2 className='text-white text-[32px] mb-3 w-full'>{el.title}</h2>
                                <span className='text-[18px] text-white'>{el.description}</span>
                                <button className='pt-4 px-8 bg-[rgba(249,249,249,0.15)] pb-3 mt-52 hover:scale-110 hover:bg-[rgba(249,249,249,0.33)] btn'><Link href='!#' className=' text-white text-center font-sans text-[16px]'>View collection</Link></button>

                            </div>
                            <Image src={el.image} alt={el.title} className='w-full h-full' />
                        </div>

                    ))}
            </div>
        </section>
    )
}

export default GlobalBr