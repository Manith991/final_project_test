import React from 'react'
import CounterComponent from '../components/TestComponents/CounterComponent'
import { CreateProductForm } from '../components/Forms/CreateProductForm'

export default function AboutPage() {
  return (
    <>
      <CreateProductForm accessToken={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtb21vQGdtYWlsLmNvbSIsImV4cCI6MTc1MzczMDc1MCwidHlwZSI6ImFjY2VzcyJ9.uFbL1MKwKqlDlUS1ofYJCmXaTWmAJ8Egv8b5kgS8DbY"} />
       <CounterComponent />
    </>
    
    
  )
}
