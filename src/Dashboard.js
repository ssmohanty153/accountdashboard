import React from "react";
import TopNavBar from "./dashboard/TopNavBar";
import LineChart from "./dashboard/LineChart";
import Sidebar from "./dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
