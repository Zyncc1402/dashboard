import SimpleCard from "@/components/cards/simpleCard";
import Chart from "@/components/chart/chart";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Tabless from "@/components/table/table";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="dashboard p-4">
        <Navbar />
        <div className="mt-5">
          <Chart title={"Sales this Week"} />
        </div>
        <div className="flex items-start justify-between">
          <div className="table mt-5 rounded-md p-6">
            <h1 className="font-bold text-xl mb-3">Recent Transactions</h1>
            <Tabless />
          </div>
          <div className="mt-5">
            <div className="flex gap-x-6">
              <div className="flex flex-col gap-4">
                <SimpleCard
                  title={"Total Users"}
                  number={"10,521"}
                  desc={"15% more than previous week"}
                  icon={"user"}
                />
                <SimpleCard
                  title={"Total Products"}
                  number={"5,641"}
                  desc={"2% more than previous week"}
                  icon={"product"}
                />
              </div>
              <div className="flex flex-col gap-4">
                <SimpleCard
                  title={"Total Transactions"}
                  number={"1,851"}
                  desc={"19% more than previous week"}
                  icon={"money"}
                />
                <SimpleCard
                  title={"Total Transactions"}
                  number={"1,851"}
                  desc={"19% more than previous week"}
                  icon={"money"}
                />
              </div>
              <div className="flex flex-col gap-4">
                <SimpleCard
                  title={"Total Transactions"}
                  number={"1,851"}
                  desc={"19% more than previous week"}
                  icon={"money"}
                />
                <SimpleCard
                  title={"Total Transactions"}
                  number={"1,851"}
                  desc={"19% more than previous week"}
                  icon={"money"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
