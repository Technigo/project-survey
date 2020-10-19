import React from 'react';
import Select from 'react-select';
// import makeAnimated from 'react-select/animated';

const CarModels = [
 { value: "Suzuki Swift", label: "Suzuki Swift" },
 { value: "Suzuki Wagon", lable: "Suzuki Wagon" },
 { value: "Suzuki Vitara", lable: "Suzuki Vitara" }
]

const SelectCarModels = () => {
  return (
    <div className="car-model">
     <Select options={CarModels} />
    </div>
  );
};
 
export default SelectCarModels;