import React from "react";
import CheckBoxFilter from "../../ui/CheckBoxFilter";

export default function CategoriesFilterOperations() {
  return (
    <CheckBoxFilter
      filterField="category"
      options={[
        // { value: "all", label: "All" },
        { value: "asian cuisine", label: "asian cuisine" },
        { value: "italian cuisine", label: "italian cuisine" },
        { value: "beverages", label: "beverages" },
        { value: "soups & stews", label: "soups & stews" },
        { value: "healthy", label: "healthy" },
        { value: "desserts", label: "desserts" },
        { value: "mexican cuisine", label: "mexican cuisine" },
      ]}
    />
  );
}
