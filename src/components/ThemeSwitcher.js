"use client"
import { useTheme } from 'next-themes'
import React from 'react';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
  return (
    <div className='hover:bg-rose-50 p-2 rounded-full cursor-pointer'>
      <LightModeOutlinedIcon fontSize='large' onClick={()=>setTheme("light")} className='dark:block hidden'/> 
      <DarkModeOutlinedIcon fontSize='large' onClick={()=>setTheme("dark")} className='dark:hidden block'/>
      
    </div>
  )
}
