import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
// import SortBy from "../../ui/SortBy";

function ProductTableOperations() {
  return (
    <TableOperations>
      {/* <Filter
        filterField="department"
        options={[
          { value: "all", label: "All" },
          { value: "dentist", label: "Dentist" },
          { value: "cardiology", label: "Cardiology" },
          { value: "neurology", label: "Neurology" },
        ]}
      /> */}

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "price-asc", label: "Sort by price (low first)" },
          { value: "price-desc", label: "Sort by price (high first)" },
          {
            value: "date-asc",
            label: "Sort by Date (recent first)",
          },
          {
            value: "date-desc",
            label: "Sort by Date (earlier first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default ProductTableOperations;
