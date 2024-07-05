import React from "react";
import CheckBoxFilter from "../../ui/CheckBoxFilter";

export default function CategoriesFilterOperations() {
  return (
    <CheckBoxFilter
      filterField="category"
      options={[
        // { value: "all", label: "All" },
        { value: "electronics", label: "Electronics" },
        { value: "clothing", label: "Clothing" },
        { value: "books", label: "Books" },
        { value: "sports", label: "Sports" },
      ]}
    />
  );
}
