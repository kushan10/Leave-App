import React, { useState } from "react";
import type { LeaveRequest } from "../components/forms/leave-from";

interface ManagedLeave extends LeaveRequest {
  id: number;
  status: "Pending" | "Approved" | "Rejected";
}

const ManageLeaves: React.FC = () => {
  const [requests, setRequests] = useState<ManagedLeave[]>([
    {
      id: 1,
      username: "john",
      date: "2025-05-10",
      leaveType: "Annual",
      duration: "Full Day",
      status: "Pending",
    },
    {
      id: 2,
      username: "emma",
      date: "2025-05-12",
      leaveType: "Casual/Sick",
      duration: "First Half",
      status: "Pending",
    },
    {
      id: 3,
      username: "alex",
      date: "2025-05-15",
      leaveType: "Annual",
      duration: "Second Half",
      status: "Pending",
    },
  ]);

  const updateStatus = (id: number, status: "Approved" | "Rejected") => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status } : req
    );
    setRequests(updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Leave Requests</h2>
      {requests.length === 0 ? (
        <p>No leave requests found.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map((req) => (
            <li key={req.id} className="bg-white p-4 rounded shadow">
              <p>
                <strong>User:</strong> {req.username}
              </p>
              <p>
                <strong>Date:</strong> {req.date}
              </p>
              <p>
                <strong>Type:</strong> {req.leaveType}
              </p>
              <p>
                <strong>Duration:</strong> {req.duration}
              </p>
              <p>
                <strong>Status:</strong> {req.status}
              </p>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => updateStatus(req.id, "Approved")}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(req.id, "Rejected")}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageLeaves;
