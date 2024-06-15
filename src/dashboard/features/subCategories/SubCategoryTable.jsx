import React from "react";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import styled from "styled-components";
import { format } from "date-fns";

const TableTopic = styled.div`
  font-size: 17px;
  letter-spacing: 0.0125em;
  font-weight: 500;
  padding: 10px 15px;
`;
const SubCategoryTable = () => {
  return (
    <Menus>
      <Table columns="75px 200px 70px 80px 90px 30px">
        <TableTopic>Operations</TableTopic>
        <Table.Header>
          <div>Name</div>

          <div>Main Category</div>
          <div>Product</div>

          <div>Status</div>
          <div>Trending</div>
          <div>Actions</div>
        </Table.Header>
        <Table.Row>
          <div>dasdsa</div>
          <div>asda</div>
          {/* <Field>{specialization}</Field> */}
          <div>gfgfvf</div>
          <div>vds</div>

          <div>15</div>
          <div>{format(new Date(), "MMM dd yyyy")}</div>
        </Table.Row>
        {/* <Table.Body
        data={sortedDoctors}
        render={(doctor) => <DoctorRow doctor={doctor} key={doctor.id} />}
      /> */}
      </Table>
    </Menus>
  );
};

export default SubCategoryTable;
