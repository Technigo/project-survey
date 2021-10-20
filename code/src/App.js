import React from 'react'
import Header from './components/Header'
import Form from 'components/Form'
import Footer from  'components/Footer'


export const App = () => {
  return (
    <div>
      <Header />
      <img className="website-image" src="assets/website.webp" alt="Screenshot of Birgits portfolio site" />
      <Form />
      <Footer />
    </div>
  )
}
