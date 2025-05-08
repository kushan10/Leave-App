import React, { useState } from "react";
export interface LeaveRequest {
  username: string;
  date: string;
  leaveType: string;
  duration: string;
  status: "Approved" | "Rejected" | "Pending";
}

const LeaveHistory: React.FC = () => {
  const [leaveRequests] = useState<LeaveRequest[]>([
    {
      username: "john",
      date: "2025-05-10",
      leaveType: "Annual",
      duration: "Full Day",
      status: "Approved",
    },
    {
      username: "emma",
      date: "2025-05-12",
      leaveType: "Casual/Sick",
      duration: "First Half",
      status: "Rejected",
    },
    {
      username: "alex",
      date: "2025-05-15",
      leaveType: "Annual",
      duration: "Second Half",
      status: "Approved",
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Leave History</h2>
      {leaveRequests.length === 0 ? (
        <p>No leave history found.</p>
      ) : (
        <ul className="space-y-4">
          {leaveRequests.map((req, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              <p>
                <strong>User:</strong> {req.username}
              </p>
              <p>
                <strong>Date:</strong> {req.date}
              </p>
              <p>
                <strong>Leave Type:</strong> {req.leaveType}
              </p>
              <p>
                <strong>Duration:</strong> {req.duration}
              </p>
              <p>
                <strong>Status:</strong> {req.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LeaveHistory;
