import { education } from '@/data/constants'
import React from 'react'

export default function Education() {
  return (
    <div id='education' className='w-[90%] xl:w-full m-auto mt-8'>
        <h3 className='text-6xl font-bold text-center mb-16'>Education</h3>
        {education.map((ele)=>(
            <div key={ele.id} className='my-edu mb-8 p-8'>
                <div className='font-bold'>{ele.degree}</div>
                <div>{ele.school}</div>
                <div>{ele.date}</div>
                <div>{ele.desc}</div>
            </div>
        ))}
    </div>
  )
}
