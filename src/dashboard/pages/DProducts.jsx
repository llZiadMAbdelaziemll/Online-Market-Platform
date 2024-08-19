import ProductTable from "../features/products/ProductTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import AddDoctor from "../features/doctors/AddDoctor";
import ProductTableOperations from "../features/products/ProductTableOperations";
// import { useUser } from "../features/authentication/useUser";
function DProducts() {
  // const { user } = useUser();
  // const userRole = user?.user_metadata?.role;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All products</Heading>
        <ProductTableOperations />
      </Row>

      <Row>
        <ProductTable />
      </Row>
    </>
  );
}

export default DProducts;
