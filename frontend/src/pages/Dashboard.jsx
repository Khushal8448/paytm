import React from "react";
import Appbar from "../components/Appbar";
import BalanceComponent from "../components/BalanceComponent";

const Dashboard = () => {
  return (
    <div className="h-screen">
      <Appbar />
      <div className="px-3">
        <BalanceComponent />
      </div>
    </div>
  );
};

export default Dashboard;
