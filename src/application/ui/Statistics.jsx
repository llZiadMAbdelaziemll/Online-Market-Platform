import React from "react";
import styled from "styled-components";

const StyledStatistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  padding: 2.4rem;
  background-color: #f7f7f8;
  border-radius: var(--border-radius-sm);
  border: 1px solid #e9e9e9;
`;
const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 600;
`;
const Value = styled.div`
  display: flex;
  text-align: center;
  gap: 0.4rem;
  letter-spacing: 0px;
`;
const H4 = styled.h4`
  color: var(--color-green-400);
  font-size: 6rem;

  font-weight: 700;
`;
const Span = styled.span`
  color: #7a7a7a;
  font-size: 3rem;
  margin-top: 2.3rem;
`;
const Statistics = () => {
  return (
    <StyledStatistics>
      <Stat>
        <Value>
          <H4>1.2</H4>
          <Span>k</Span>
        </Value>
        <div>Vendors</div>
      </Stat>
      <Stat>
        <Value>
          <H4>1.2</H4>
          <Span>k</Span>
        </Value>
        <div>Vendors</div>
      </Stat>
      <Stat>
        <Value>
          <H4>1.2</H4>
          <Span>k</Span>
        </Value>
        <div>Vendors</div>
      </Stat>
    </StyledStatistics>
  );
};

export default Statistics;
