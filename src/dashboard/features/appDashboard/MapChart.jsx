import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const cities = [
  {
    name: "New York",
    coords: [40.7128, -74.006],
    revenue: "$958.5k",
    growth: "-2.6%",
  },

  {
    name: "London",
    coords: [51.5074, -0.1278],
    revenue: "$788.7k",
    growth: "+5.6%",
  },

  {
    name: "Paris",
    coords: [48.8566, 2.3522],
    revenue: "$592.2k",
    growth: "+3.7%",
  },
];

const StyledChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;
  padding: 2rem;
  background-color: var(--color-grey-0);

  border: 1px solid var(--color-grey-100);
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const RevenueHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RevenueTitle = styled.h4`
  font-size: 15px;
  color: #484d54;
  font-weight: 600;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const ViewLink = styled.a`
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const RevenueItem = styled.div`
  margin-bottom: 20px;
`;

const Change = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RevenueLabel = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
`;

const RevenueValue = styled.span`
  font-weight: bold;
  color: #777;
`;

const Growth = styled.span`
  font-size: 12px;
  color: ${(props) => (props.positive ? "green" : "red")};
`;

const ProgressBar = styled.div`
  height: 5px;
  border-radius: 5px;
  background-color: #e9ecef;
  position: relative;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${(props) => props.percentage || "0%"};
  height: 100%;
  background-color: ${(props) => props.color || "#000"};
  position: absolute;
  top: 0;
  left: 0;
`;
const MapChart = () => {
  const revenueData = [
    {
      country: "New York",
      revenue: "$98.5",
      growth: "-2.6%",
      positive: false,
      percentage: "70%",
      color: "#4b5966",
    },
    {
      country: "London",
      revenue: "$78.7",
      growth: "+5.6%",
      positive: true,
      percentage: "60%",
      color: "#3f51b5",
    },
    {
      country: "Paris",
      revenue: "$52.2",
      growth: "+3.7%",
      positive: true,
      percentage: "50%",
      color: "#3f51b5",
    },
  ];
  return (
    <StyledChart>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "250px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {cities.map((city, index) => (
          <CircleMarker
            key={index}
            center={city.coords}
            radius={10}
            fillOpacity={0.5}
            color="blue"
          >
            <Popup>
              <strong>{city.name}</strong>
              <br />
              Revenue: {city.revenue}
              <br />
              Growth: {city.growth}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
      <StyledInfo>
        <RevenueHeader>
          <RevenueTitle>Revenue</RevenueTitle>
          <ViewLink href="#">view</ViewLink>
        </RevenueHeader>
        {revenueData.map((data, index) => (
          <RevenueItem key={index}>
            <RevenueLabel>
              <Change>
                {data.country}
                <Growth positive={data.positive}>{data.growth}</Growth>
              </Change>
              <RevenueValue>{data.revenue}</RevenueValue>
            </RevenueLabel>
            <ProgressBar>
              <Progress percentage={data.percentage} color={data.color} />
            </ProgressBar>
          </RevenueItem>
        ))}
      </StyledInfo>
    </StyledChart>
  );
};

export default MapChart;
