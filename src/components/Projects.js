import { projects } from '@/data/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Projects() {
  return (
    <div id="projects" className='mb-20 w-[90%] xl:w-full m-auto'>
        <h2 className='text-center text-6xl font-bold mt-5'>Projects</h2>
        <div className='text-lg text-center font-semibold mt-6 mb-12'>Using above Tech skills I developed some Projects. Some of the Projects are listed as.</div>
        <div className='md:flex flex-wrap md:gap-y-4 xl:gap-10 xl:justify-evenly md:justify-between'>
            {projects.map((project)=>(
              <div className='flex flex-col items-center justify-center w-100 my-project rounded-xl p-10 min-h-96 hover:cursor-pointer' key={project.id}>
                <div className='relative'>
                  <div className='image'>
                    <Image src={project.image} className='w-60 h-30 rounded-xl my-image' alt={project.title}/>
                  </div>
                </div>
                <div className='w-60'>
                <h3 className='font-semibold text-center text-2xl'>{project.title}</h3>
                <div>{project.description}</div>
                <div className="view-btn mt-2 flex justify-evenly items-center">
                  <Link href={project.github} className='border border-solid hover:bg-[#a2d17b48] border-lime-600 p-2 w-20 rounded text-center project-btn' target='blank'>Github</Link>
                  <Link href={project.webapp} className='border border-solid hover:bg-[#a2d17b48] border-lime-600 p-2 w-20 rounded text-center project-btn' target='blank'>Live</Link>
                </div>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}
