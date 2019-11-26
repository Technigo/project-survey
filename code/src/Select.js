import React from "react";
import { Option } from "Option";

export const Select = props => {
  const { value, onChange } = props;
  return (
    <label>
      <select value={value} onChange={onChange}>
        <Option value="" text={"Select here"} />
        <Option value="everyday" text={"everyday"} />
        <Option value="weekly" text={"weekly"} />
        <Option value="monthy" text={"monthly"} />
        <Option value="yearly" text={"yearly"} />
      </select>
    </label>
  );
};
