import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';



export const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Form className="form" /> 
      <Footer />
    </div>
  )
}
