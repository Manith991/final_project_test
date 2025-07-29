import React from 'react'
import CounterComponent from '../components/TestComponents/CounterComponent'
import { CreateProductForm } from '../components/Forms/CreateProductForm'

export default function AboutPage() {
  return (
    <>
      <CreateProductForm accessToken={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyaXRoc2FyYW1hbml0aDAwMUBnbWFpbC5jb20iLCJleHAiOjE3NTM4MDQ5NDUsInR5cGUiOiJhY2Nlc3MifQ.2uiL6uRa-ho4jThWe6A9BEDtr80uqlMjkrtojCP8MZ0"} />
       <CounterComponent />
    </>
  )
}
