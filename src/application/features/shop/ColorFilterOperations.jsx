import React from "react";
import CheckBoxFilter from "../../ui/CheckBoxFilter";

export default function ColorFilterOperations() {
  return (
    <CheckBoxFilter
      filterField="color"
      options={[
        // { value: "all", label: "All" },
        { value: "red", label: "Red" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
      ]}
    />
  );
}
