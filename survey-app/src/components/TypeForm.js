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

  const changePage = () => setPage(page + 1);
  const retrieveAgeData = (ageData) => setAge(ageData);
  const retrieveHoursData = (hoursData) => setHours(hoursData);
  const retrieveLocationData = (locationData) => setLocation(locationData);
  const retrieveProductivityData = (productivityData) => setProductivity(productivityData);
  const retrieveStressData = (stressData) => setStress(stressData);

  return (
    <main>
      {page === 0 && (
        <Welcome changePage={changePage} />
      )}
      {page === 1 && (
        <AgeInput
          changePage={changePage}
          retrieveAgeData={retrieveAgeData} />
      )}
      {page === 2 && (
        <WorkHoursInput
          changePage={changePage}
          retrieveHoursData={retrieveHoursData} />
      )}
      {page === 3 && (
        <PreferredHoursInput
          changePage={changePage}
          retrieveLocationData={retrieveLocationData} />
      )}
      {page === 4 && (
        <ProductivityRange
          changePage={changePage}
          retrieveProductivityData={retrieveProductivityData} />
      )}
      {page === 5 && (
        <StressRange
          changePage={changePage}
          retrieveStressData={retrieveStressData} />
      )}
      {page === 6 && (
        <Closing
          age={age}
          hours={hours}
          location={location}
          productivity={productivity}
          stress={stress} />
      )}
    </main>
  )
};

export default TypeForm;
