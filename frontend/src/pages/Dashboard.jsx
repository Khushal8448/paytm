import React from "react";
import Appbar from "../components/Appbar";
import BalanceComponent from "../components/BalanceComponent";
import Users from "../components/Users";

const Dashboard = () => {
  return (
    <div className="no-scrollbar h-screen overflow-y-scroll">
      <Appbar />
      <div className="mx-auto max-w-2xl px-3">
        <BalanceComponent />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
