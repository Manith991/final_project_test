import React from 'react'
import CounterComponent from '../components/TestComponents/CounterComponent'
import { CreateProductForm } from '../components/Forms/CreateProductForm'

export default function AboutPage() {
  return (
    <>
      <CreateProductForm accessToken={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtb21vQGdtYWlsLmNvbSIsImV4cCI6MTc1MzgwMjA4NywidHlwZSI6ImFjY2VzcyJ9.HKQO-1bBsEpAa666a9SKqCjCQHqPKXHDOiIg9VHF95s"} />
       <CounterComponent />
    </>
  )
}
