import React from "react";
import styled from "styled-components";
import {
  RiRedPacketLine,
  RiTruckLine,
  RiMoneyDollarBoxLine,
} from "react-icons/ri";
import { FaHeadset } from "react-icons/fa";
import Container from "./Container";
import Row from "./Row";
import ServicesCard from "./ServicesCard";

const StyledServices = styled.section`
  margin-bottom: 10rem;
`;
const Cards = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Services = () => {
  return (
    <StyledServices>
      <Container>
        <Row>
          <Cards>
            <ServicesCard icon={<RiRedPacketLine />} topic="Product Packing" />
            <ServicesCard icon={<FaHeadset />} topic="24X7 Support" />
            <ServicesCard icon={<RiTruckLine />} topic="Delivery in 5 Days" />
            <ServicesCard
              icon={<RiMoneyDollarBoxLine />}
              topic="Payment Secure"
            />
          </Cards>
        </Row>
      </Container>
    </StyledServices>
  );
};

export default Services;
