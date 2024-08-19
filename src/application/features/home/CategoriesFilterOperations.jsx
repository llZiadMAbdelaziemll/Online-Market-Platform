import React from "react";
import Filter from "../../ui/Filter";

export default function CategoriesFilterOperations() {
  return (
    <Filter
      filterField="category"
      options={[
        { value: "all", label: "All" },
        { value: "asian cuisine", label: "asian cuisine" },
        { value: "italian cuisine", label: "italian cuisine" },
        { value: "beverages", label: "beverages" },
        { value: "soups & stews", label: "soups & stews" },
      ]}
    />
  );
}
