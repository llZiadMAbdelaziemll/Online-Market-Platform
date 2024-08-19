import styled from "styled-components";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const StyledStat = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  display: flex;
  justify-content: space-between;

  & p {
    margin-bottom: 0;
  }
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);
  height: 40%;
  & svg {
    width: 2.56rem;
    height: 2.56rem;
    color: var(--color-${(props) => props.color}-700);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2.4rem;
  padding-left: 0px;
  & div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    font-weight: 500;
    color: var(--color-green-400);
  }
`;
const Title = styled.h5`
  align-self: end;
  font-size: 1.5rem;
  text-transform: capitalize;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: var(--color-dashboard-500);
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Value = styled.p`
  font-size: 2rem;
  line-height: 1;
  font-weight: 500;
  text-align: right;
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Period = styled.p`
  font-size: 1.4rem;
  letter-spacing: 0.03rem;
  font-weight: 400;
  color: var(--color-dashboard-400);
`;
function Stat({ icon, title, value, color, rate }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Content>
        <Title>{title}</Title>
        <Value>{value}</Value>
        <div>
          {rate > 0 ? <GoArrowUp /> : <GoArrowDown />}
          <span>{Math.abs(rate?.toFixed(0))}%</span>
          <Period>Last Month</Period>
        </div>
      </Content>
    </StyledStat>
  );
}

export default Stat;
