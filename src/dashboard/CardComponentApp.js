import React from "react";
import { Card, CardHeader, CardContent, Grid } from "@mui/material";
import BarChart from "./BarChart";

const dummyData = [
  { label: "August", value: 10 },
  { label: "September", value: 20 },
  { label: "October", value: 60 },
  { label: "November", value: 30 },
  { label: "December", value: 25 },
  { label: "January", value: 50 },
];
const CardComponentApp = () => {
  const selectStyle = {
    fontSize: "12px", // Adjust the font size as needed
  };

  return (
    <Card>
      <CardHeader
        subheader={
          <Grid container justifyContent="space-between">
            <Grid item>
              <div>
                <strong>Total case flow</strong>
              </div>
            </Grid>
            <Grid item></Grid>
          </Grid>
        }
      />
      <CardContent>
        <BarChart data={dummyData} />
      </CardContent>
    </Card>
  );
};

export default CardComponentApp;
