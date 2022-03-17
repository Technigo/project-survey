import React, { useState } from 'react';

import Welcome from './pages/Welcome';
import AgeInput from './forms/Form1';
import WorkHoursInput from './forms/Form2';
import PreferredHoursInput from './forms/Form3';
import ProductivityRange from './forms/Form4';
import StressRange from './forms/Form5';
import Closing from './pages/Closing';

const TypeForm = () => {
  const [page, setPage] = useState(0);
  const [age, setAge] = useState('');
  const [hours, setHours] = useState('');
  const [location, setLocation] = useState('');
  const [productivity, setProductivity] = useState('');
  const [stress, setStress] = useState('');

  const nextPage = () => setPage(page + 1);
  const backPage = () => setPage(page - 1);

  const retrieveAgeData = (event) => setAge(event.target.value);
  const retrieveHoursData  = (event) =>  setHours(event.target.value);
  const retrieveLocationData = (event) =>  setLocation(event.target.value);
  const retrieveProductivityData = (event) => setProductivity(event.target.value);
  const retrieveStressData = (event) =>  setStress(event.target.value);
 
  const ageData = { age, nextPage, backPage, retrieveAgeData }
  const hoursData = { hours, nextPage, backPage, retrieveHoursData }
  const locationData = { location, nextPage, backPage, retrieveLocationData }
  const productivityData = { productivity, nextPage, backPage, retrieveProductivityData }
  const stressData = { stress, nextPage, backPage, retrieveStressData }
  const closingData = { age, hours, location, productivity, stress }

  return (
    <main>
      {page === 0 && <Welcome nextPage={nextPage} />}
      {page === 1 && <AgeInput ageData={ageData} />}
      {page === 2 && <WorkHoursInput hoursData={hoursData} />}
      {page === 3 && <PreferredHoursInput locationData={locationData} />}
      {page === 4 && <ProductivityRange productivityData={productivityData} />}
      {page === 5 && <StressRange stressData={stressData} />}
      {page === 6 && <Closing closingData={closingData} />}
    </main>
  )
};

export default TypeForm;