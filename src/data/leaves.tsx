import React from "react";
import type { LeaveRequest } from "../components/forms/leave-from";

interface LeaveRequestsProps {
  requests: LeaveRequest[];
}

const LeaveRequests: React.FC<LeaveRequestsProps> = ({ requests }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-4">Your Leave Requests</h3>
      {requests.length === 0 ? (
        <p className="text-gray-500">No leave requests yet.</p>
      ) : (
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Type</th>
              <th className="py-2 px-4 border">Duration</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((leave, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{leave.date}</td>
                <td className="py-2 px-4 border">{leave.leaveType}</td>
                <td className="py-2 px-4 border">{leave.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeaveRequests;
