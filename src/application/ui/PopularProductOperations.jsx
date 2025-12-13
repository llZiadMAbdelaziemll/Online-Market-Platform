import Filter from "./Filter";

function PopularProductOperations() {
  return (
    <Filter
      filterField="ProductsFilters"
      options={[
        { value: "all", label: "All" },
        { value: "snack", label: "Snack" },
        { value: "vegetable", label: "Vegetable" },
        { value: "fruit", label: "Fruit" },
        { value: "bakery", label: "Bakery" },
      ]}
    />
  );
}

export default PopularProductOperations;
