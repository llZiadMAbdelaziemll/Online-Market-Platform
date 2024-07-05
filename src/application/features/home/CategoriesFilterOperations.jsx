import React from "react";
import Filter from "../../ui/Filter";

export default function CategoriesFilterOperations() {
  return (
    <Filter
      filterField="category"
      options={[
        { value: "all", label: "All" },
        { value: "electronics", label: "Electronics" },
        { value: "clothing", label: "Clothing" },
        { value: "books", label: "Books" },
        { value: "sports", label: "Sports" },
      ]}
    />
  );
}
