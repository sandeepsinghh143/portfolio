"use client"
import Image from 'next/image'
import React from 'react'
import developer from "/public/developer.png";
import { Bio } from '@/data/constants';
import  Typewriter  from 'typewriter-effect';
import Link from 'next/link';
import DownloadIcon from '@mui/icons-material/Download';

export default function About() {
  return (
    <div className='w-[90%] xl:w-full m-auto flex flex-col-reverse xl:flex-row justify-between items-center gap-x-40 xl:h-[calc(100vh-15rem)]' id="about">
        <div className='xl:w-1/2 w-[100%] flex flex-col items-center justify-center xl:block'>
            <h2 className='text-5xl font-5 font-bold'>Hi, I am</h2>
            <h2 className='text-5xl font-bold'>{Bio.name}</h2>
            <div className='flex gap-2 md:text-3xl xl:text-4xl font-semibold mt-6'>I am a <span className='text-fuchsia-600'><Typewriter
                options={{
                    strings:[...Bio.roles],
                    autoStart: true,
                    loop: true,
                }}
                />
                </span>
            </div>
            <div className='mt-6'>{Bio.description}</div>
            <button className='resume-btn py-4 w-60 rounded mt-6 text-white font-semibold hover:scale-105'><Link href={Bio.resume} target='display'>Download Resume <DownloadIcon/></Link></button>
        </div>
        <div>
            <Image src={developer} alt='developer'/>
        </div>
    </div>
  )
}
