import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/navbar/side-bar";
import LeaveForm, {
  type LeaveRequest,
} from "../../components/forms/leave-from";
import LeaveRequests from "../../data/leaves";

const UserPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>("leave");
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);

  const handleLeaveSubmit = (newLeave: LeaveRequest) => {
    setLeaveRequests((prev) => [...prev, newLeave]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar
          onSelect={setSelectedSection}
          title1="Apply Leave"
          title2="Leave History"
        />
        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {selectedSection === "leave" && (
            <LeaveForm onSubmit={handleLeaveSubmit} />
          )}
          {selectedSection === "leave-requests" && (
            <LeaveRequests requests={leaveRequests} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
