import React from 'react';
import Select from 'react-select';

const selectCarModels = [
 { value: "Suzuki Etiga", lable: "Suzuki Etiga"},
 { value: "Suzuki Swift", label: "Suzuki Swift" },
 { value: "Suzuki Wagon", label: "Suzuki Wagon" },
 { value: "Suzuki Vitara", label: "Suzuki Vitara" },
 { value: "Suzuki XL7", label: "Suzuki XL7"},
 { value: "Suzuki Ciaz", label: "Suzuki Ciaz"}
];

const UserCarModels = ({ onCarsChange }) => {
  return (
    <div className="car-model">
      <p>Which Suzuki car(s) that you are possessing?</p>
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