import React, { useState, useEffect } from "react";
import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";
import styled from "styled-components";
import Heading from "./Heading";

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 2.4rem;
  border: 1px solid #e9cbbe;
  border-radius: var(--border-radius-sm);
  font-size: 2rem;
  font-weight: 500;
  color: #7a7a7a;
  max-width: 26.4rem;
  /* margin-top: 2rem; */
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0rem;
`;

const Span = styled.span`
  font-size: 1.4rem;
  line-height: 1.2;
  font-weight: 400;
  color: #7a7a7a;
  text-transform: capitalize;
  margin-top: -0.25rem;
  /* text-align: center; */
`;
const DateCounter = () => {
  const [targetDate, setTargetDate] = useState(new Date("2024-10-28T00:00:00"));
  const [countdown, setCountdown] = useState({
    days: "000",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diffInSeconds = differenceInSeconds(targetDate, now);
      const days = String(Math.floor(diffInSeconds / (60 * 60 * 24))).padStart(
        3,
        "0"
      );
      const hours = String(
        Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((diffInSeconds % (60 * 60)) / 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor(diffInSeconds % 60)).padStart(2, "0");

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <StyledCounter>
      <Box>
        <Heading as="h3"> {countdown.days}</Heading>
        <Span>days</Span>
      </Box>
      :
      <Box>
        <Heading as="h3"> {countdown.hours}</Heading>
        <Span>hrs</Span>
      </Box>
      :
      <Box>
        <Heading as="h3"> {countdown.minutes}</Heading>
        <Span>min</Span>
      </Box>
      :
      <Box>
        <Heading as="h3"> {countdown.seconds}</Heading>
        <Span>Sec</Span>
      </Box>
    </StyledCounter>
  );
};

export default DateCounter;
