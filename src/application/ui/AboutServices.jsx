import React from "react";
import styled from "styled-components";
import ServicesCard from "./ServicesCard";
import {
  RiRedPacketLine,
  RiTruckLine,
  RiMoneyDollarBoxLine,
} from "react-icons/ri";
import { FaHeadset } from "react-icons/fa";
const StyledServices = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 10rem;
`;
const AboutServices = () => {
  return (
    <StyledServices>
      <ServicesCard icon={<RiRedPacketLine />} topic="Product Packing" />
      <ServicesCard icon={<FaHeadset />} topic="24X7 Support" />
      <ServicesCard icon={<RiTruckLine />} topic="Delivery in 5 Days" />
      <ServicesCard icon={<RiMoneyDollarBoxLine />} topic="Payment Secure" />
    </StyledServices>
  );
};

export default AboutServices;
