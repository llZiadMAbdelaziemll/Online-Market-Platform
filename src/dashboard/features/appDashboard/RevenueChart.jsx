import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useOrders } from "../orders/useOrders";
import {
  eachDayOfInterval,
  eachMonthOfInterval,
  format,
  isSameDay,
  isSameMonth,
  subDays,
  subMonths,
} from "date-fns";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const StyledChart = styled.div`
  width: 100%;
  padding: 2rem;
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
`;
const RevenueChart = (revenue, expenses) => {
  const { orders, isLoading } = useOrders();
  const rootStyles = getComputedStyle(document.documentElement);

  // const revenuesArray = orders?.map((order) => order?.amount);
  // const ordersCountArray = Array.from(
  //   { length: orders?.length },
  //   (_, i) => i + 1
  // );

  if (isLoading) return <Spinner />;
  // const maxValue = Math.max(...revenuesArray);
  const allDates = eachMonthOfInterval({
    // start: subMonths(new Date(), 7)
    start: new Date(2024, 0, 1),
    end: new Date(),
  });

  // label: format(date, "MMM dd"),
  //     // totalSales: appointments
  //     //   .filter((appointment) =>
  //     //     isSameDay(date, new Date(appointment.created_at))
  //     //   )
  //     //   .reduce((acc, cur) => acc + cur.doctors.price, 0),

  // const newData = {
  //   labels: allDates.map((date) => format(date, "MMM")),
  //   datasets: [
  //     {
  //       label: "Orders",
  //       data:allDates.map((date) => {
  //   return orders?.filter((order) =>
  //     isSameMonth(date, new Date(order.created_at))
  //   )?.length;
  // }) ,
  //       borderColor: "#00c853",
  //       backgroundColor: "rgba(0, 200, 83, 0.2)",
  //       fill: true,
  //       tension: 0.4,
  //     },
  //     {
  //       label: "Revenue",
  //       data:allDates.map((date) => {
  //   return orders?.filter((order) =>
  //     isSameMonth(date, new Date(order.created_at))
  //   )?.reduce((acc, order) => order?.amount + acc, 0)
  // }),
  //       borderColor: "#2962ff",
  //       backgroundColor: "rgba(41, 98, 255, 0.2)",
  //       fill: true,
  //       tension: 0.4,
  //     },
  //     {
  //       label: "Expense",
  //       data: allDates.map((date) => {
  //   return orders?.filter((order) =>
  //     isSameMonth(date, new Date(order.created_at))
  //   )?.reduce((acc, order) => order?.amount + acc, 0),
  //       borderColor: "#00bcd4",
  //       backgroundColor: "rgba(0, 188, 212, 0.2)",
  //       fill: true,
  //       tension: 0.4,
  //     },
  //   ],
  // };

  // ***********************
  // const data = {
  //   labels: [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //   ],
  //   datasets: [
  //     {
  //       label: "Orders",
  //       data: ordersCountArray,
  //       borderColor: "#00c853",
  //       backgroundColor: "rgba(0, 200, 83, 0.2)",
  //       fill: true,
  //       tension: 0.4,
  //     },
  //     {
  //       label: "Revenue",
  //       data: revenuesArray,
  //       borderColor: "#2962ff",
  //       backgroundColor: "rgba(41, 98, 255, 0.2)",
  //       fill: true,
  //       tension: 0.4,
  //     },
  //     {
  //       label: "Expense",
  //       data: expensesArray,
  //       borderColor: "#00bcd4",
  //       backgroundColor: "rgba(0, 188, 212, 0.2)",
  //       fill: true,
  //       tension: 0.4,
  //     },
  //   ],
  // };
  // *********************************

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dem",
    ],
    datasets: [
      {
        label: "Orders",
        data: allDates.map((date) => {
          return orders?.filter((order) =>
            isSameMonth(date, new Date(order.created_at))
          )?.length;
        }),
        borderColor: "#00c853",
        backgroundColor: "rgba(0, 200, 83, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Revenue",
        data: allDates.map((date) => {
          return orders
            ?.filter((order) => isSameMonth(date, new Date(order.created_at)))
            ?.reduce((acc, order) => order?.amount + acc, 0)
            ?.toFixed(2);
        }),
        borderColor: "#2962ff",
        backgroundColor: "rgba(41, 98, 255, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Expense",
        data: allDates.map((date) => {
          return (
            orders?.filter((order) =>
              isSameMonth(date, new Date(order.created_at))
            )?.length * 4
          );
        }),
        borderColor: "#00bcd4",
        backgroundColor: "rgba(0, 188, 212, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const maxValue = Math.max(
    ...data.datasets.flatMap((dataset) => dataset.data)
  );
  console.log(maxValue);

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          color: "var(--color-grey-0)",
        },
      },
      y: {
        ticks: {
          callback: (value) => `$${value}`,
        },
        grid: {
          color: rootStyles.getPropertyValue("--color-grey-100").trim(),
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.dataset.label}: $${tooltipItem.raw}k`,
        },
      },
    },
  };

  return (
    <StyledChart>
      <Line data={data} options={options} />
    </StyledChart>
  );
};

export default RevenueChart;
