import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/navbar/side-bar";
import ManageLeaves from "../../data/manage-leaves";
import LeaveHistory from "../../data/leave-history";

const UserPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>("leave");

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar
          onSelect={setSelectedSection}
          title1="Manage Leaves"
          title2="Leave History"
        />
        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {selectedSection === "leave" && <ManageLeaves />}
          {selectedSection === "leave-requests" && <LeaveHistory />}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
