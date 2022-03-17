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
  const retrieveAgeData = (ageData) => setAge(ageData);
  const retrieveHoursData = (hoursData) => setHours(hoursData);
  const retrieveLocationData = (locationData) => setLocation(locationData);
  const retrieveProductivityData = (productivityData) => setProductivity(productivityData);
  const retrieveStressData = (stressData) => setStress(stressData);
  const closingData = { age, hours, location, productivity, stress };

  return (
    <main>
      {page === 0 && (
        <Welcome nextPage={nextPage} />
      )}
      {page === 1 && (
        <AgeInput
          nextPage={nextPage}
          backPage={backPage}
          retrieveAgeData={retrieveAgeData} />
      )}
      {page === 2 && (
        <WorkHoursInput
          nextPage={nextPage}
          backPage={backPage}
          retrieveHoursData={retrieveHoursData} />
      )}
      {page === 3 && (
        <PreferredHoursInput
          nextPage={nextPage}
          backPage={backPage}
          retrieveLocationData={retrieveLocationData} />
      )}
      {page === 4 && (
        <ProductivityRange
          nextPage={nextPage}
          backPage={backPage}
          retrieveProductivityData={retrieveProductivityData} />
      )}
      {page === 5 && (
        <StressRange
          nextPage={nextPage}
          backPage={backPage}
          retrieveStressData={retrieveStressData} />
      )}
      {page === 6 && (
        <Closing closingData={closingData} />
      )}
    </main>
  )
};

export default TypeForm;
