import React from "react";
import { Card, CardHeader, CardContent, Grid } from "@mui/material";
import CurveChart from "./CurveChart";
import TableComponent from "./TableComponent";

const CardComponentApp = () => {
  const selectStyle = {
    fontSize: "12px", // Adjust the font size as needed
  };

  const dummyData = Array.from({ length: 10 }, (_, i) => ({
    label: (i + 9).toString(),
    value: Math.floor(Math.random() * 50) + 1,
  }));

  return (
    <Card>
      <CardHeader
        subheader={
          <Grid container justifyContent="space-between">
            <Grid item>
              <div>
                <strong>Account watchlist</strong>
              </div>
            </Grid>
            <Grid item></Grid>
          </Grid>
        }
      />
      <CardContent>
        <TableComponent />
      </CardContent>
    </Card>
  );
};

export default CardComponentApp;
