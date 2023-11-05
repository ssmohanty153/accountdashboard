import React from "react";
import { Card, CardHeader, CardContent, Grid, Button } from "@mui/material";
import BarChart from "./BarChart";

const dummyData = [
  { label: "Older", value: 10 },
  { label: "jan 01-08", value: 20 },
  { label: "jan 09-16", value: 60 },
  { label: "jan 17-24", value: 30 },
  { label: "jan 25-31", value: 30 },
  { label: "Future", value: 30 },
];
const CardComponentAppImport = () => {
  const selectStyle = {
    fontSize: "12px", //  font size
  };

  const handleNewInvoiceClick = () => {
    alert(" File Upload Successful");
  };

  return (
    <Card>
      <CardHeader
        subheader={
          <Grid container justifyContent="space-between">
            <Grid item>
              <div>
                <strong>Invoice own to you</strong>
              </div>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNewInvoiceClick}
              >
                New Sales Invoice
              </Button>
            </Grid>
          </Grid>
        }
      />
      <CardContent>
        <BarChart data={dummyData} />
      </CardContent>
    </Card>
  );
};

export default CardComponentAppImport;
