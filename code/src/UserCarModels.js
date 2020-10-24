import React from 'react';
import Select from 'react-select';

const selectCarModels = [
 { value: "suzuki Ertiga", lable: "Suzuki Ertiga"},
 { value: "suzuki swift", label: "Suzuki Swift" },
 { value: "suzuki XL7", label: "Suzuki XL7"},
 { value: "suzuki ciaz", label: "Suzuki Ciaz"},
 { value: "super carry pro", label: "Super Carry Pro"},
 { value: "carry truck", label: "Carry Truck"},
 { value: "carry van", label: "Carry Van"}
];

const UserCarModels = ({ onCarsChange }) => {
  return (
    <div className="car-models" id="sectionCarModels">
      <label htmlFor="carModelSelect">Which Suzuki car(s) that you are possessing?</label>
      <Select id="carModelSelect" aria-label="list"
        onChange={onCarsChange}
        options={selectCarModels}
        isMulti
      />
    </div>
  );
};
 
export default UserCarModels;