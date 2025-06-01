import React from 'react'
import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'
import Main from '../Components/contact/Main'
import FromAndMap from '../Components/contact/FormAndMap'

const Contact = () => {
  return (
     <div className="min-h-screen bg-white">
        <Header />
        <Main/>
        <FromAndMap/>
        <Footer/>
     </div>
  )
}

export default Contact