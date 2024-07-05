import React from "react";
import Filter from "../../ui/Filter";

export default function TagsFilterOperations() {
  return (
    <Filter
      filterField="tag"
      options={[
        // { value: "all", label: "All" },
        { value: "coffee", label: "Coffee" },
        { value: "sushi", label: "Sushi" },
        { value: "burger", label: "Burger" },
        { value: "pasta", label: "Pasta" },
        { value: "soup", label: "Soup" },
      ]}
    />
  );
}
