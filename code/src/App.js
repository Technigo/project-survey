import React, { useState } from 'react'
import Form from 'components/Form'
import FormResponse from 'components/FormResponse';


export const App = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [willTravel, setWillTravel] = useState(false);
  const [roles, setRoles] = useState('You did not choose any');

  const [submit, setSubmit] = useState(false);

 if (submit === false) {
  return (
    <div>
     <Form 
      setSubmit={setSubmit}
      setName={setName}
      setLocation={setLocation}
      setWillTravel={setWillTravel}
      setRoles={setRoles} 
      name={name} 
      location={location} 
      willTravel={willTravel}
      roles={roles}
      />
    </div>
  )
} else {
    return (
      <FormResponse 
        name={name} 
        location={location} 
        willTravel={willTravel}
        roles={roles}
        />
    )
  }
}
