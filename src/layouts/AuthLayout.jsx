import React from 'react'
import { NavbarComponent } from '../components/HeaderFooter/NavbarComponent'
import { LoginComponent } from '../components/AuthComponents/LoginComponent'

export default function AuthLayout() {
  return (
    <>
     <div>
        <NavbarComponent />
        <LoginComponent />
    </div>
    </>
  )
}
