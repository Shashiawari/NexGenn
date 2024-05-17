"use client"
import React from 'react'
import { signOut } from 'next-auth/react'
const Button = () => {
  return (
    <div>
    <button onClick={()=>signOut()}  className="btnsp mx-2">LogOut</button>
    </div>
  )
}

export default Button