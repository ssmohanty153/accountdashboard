import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const dummyData = [
  { account: "Sales", thisMonth: "1,194.58", ytd: "11418.29" },
  { account: "Advatising", thisMonth: "1,1924.58", ytd: "19418.29" },
  { account: "inventory", thisMonth: "1,1942.58", ytd: "19318.29" },
  { account: "Entertainment", thisMonth: "1,1942.58", ytd: "11415.29" },
  { account: "Product", thisMonth: "1,1942.58", ytd: "1318.29" },
];

const TableComponent = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>This Month</TableCell>
            <TableCell>YTD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.account}</TableCell>
              <TableCell>{row.thisMonth}</TableCell>
              <TableCell>{row.ytd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;