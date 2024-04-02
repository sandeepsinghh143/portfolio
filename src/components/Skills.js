import { skills } from '@/data/constants'
import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <div className='mt-20 relative w-[90%] xl:w-full m-auto' id="skills">
        <h2 className='text-center text-6xl font-bold'>Skills</h2>
        <div className='text-center mt-6 mb-20'>Here are some of my skills on which I have been working on for the past 1.5 years.</div>
        <div className='mt-8'>
          {skills.map((skill)=>(
            <div className='w-full p-10 rounded-xl mb-16 my-box' key={skill.title}>
              <h3 className='text-center text-3xl mb-4 font-bold'>{skill.title}</h3>
              <div className='flex flex-wrap justify-evenly md:justify-start gap-4 items-center m-auto'>
                {
                  skill.skills.map((item)=>(
                    <div className='flex flex-col justify-between items-center gap-2 rounded-xl p-4 my-box h-40 w-40' key={item.name}>
                      <Image src={item.image} width={80} alt={item.name}/>
                      <span>{item.name}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
