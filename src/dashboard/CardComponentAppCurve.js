import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import CurveChart from "./CurveChart";

const CardComponentApp = () => {
  const selectStyle = {
    fontSize: "12px", // Adjust the font size as needed
  };

  const dummyData = Array.from({ length: 10 }, (_, i) => ({
    label: (i + 9).toString(),
    value: Math.floor(Math.random() * 50) + 1,
  }));

  const [chartData, setChartData] = useState(dummyData); // State to store chart data
  const [month, setMonth] = useState(1);

  const handleSelector2Change = (event) => {
    const newValue = event.target.value;
    setMonth(newValue);
    // Update the chart data 
    const updatedData = dummyData.map((dataPoint) => ({
      ...dataPoint,
      value: dataPoint.value * newValue,
    }));
    setChartData(updatedData);
  };

  return (
    <Card>
      <CardHeader
        subheader={
          <Grid container justifyContent="space-between">
            <Grid item>
              <div>
                <strong>Checking Account</strong>
              </div>
            </Grid>
            <Grid item>
              <Select label="Selector 1" defaultValue={1} style={selectStyle}>
                <MenuItem value={1}>Manage</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </Select>
              <Select
                label="Selector 2"
                value={month}
                onChange={handleSelector2Change}
                style={selectStyle}
              >
                <MenuItem value={1}>January</MenuItem>
                <MenuItem value={2}>February</MenuItem>
                <MenuItem value={3}>March</MenuItem>
              </Select>
            </Grid>
          </Grid>
        }
      />
      <CardContent>
        <CurveChart data={chartData} />
      </CardContent>
    </Card>
  );
};

export default CardComponentApp;
