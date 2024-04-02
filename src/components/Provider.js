"use client"
import { ThemeProvider } from 'next-themes'
import React, { Children } from 'react'

export default function Provider({ children }) {
  return (
    <ThemeProvider attribute="class" storageKey = 'theme'>
        {children}
    </ThemeProvider>
  )
}
