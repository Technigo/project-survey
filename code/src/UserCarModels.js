import React from 'react';
import Select from 'react-select';

const selectCarModels = [
 { value: 'Suzuki Swift', label: "Suzuki Swift" },
 { value: "Suzuki Wagon", label: "Suzuki Wagon" },
 { value: "Suzuki Vitara", label: "Suzuki Vitara" },
];

const UserCarModels = ({ onCarsChange }) => {
  return (
    <div className="car-model">
     <Select 
      defaultValue={[]}
      onChange={onCarsChange}
      options={selectCarModels}
      isMulti
      />
    </div>
  );
};
 
export default UserCarModels;