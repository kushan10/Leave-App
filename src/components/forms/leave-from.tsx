import React, { useState } from "react";

export interface LeaveRequest {
  username: string;
  date: string;
  leaveType: string;
  duration: string;
}

interface LeaveFormProps {
  onSubmit: (leave: LeaveRequest) => void;
}

const LeaveForm: React.FC<LeaveFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<LeaveRequest>({
    username: "",
    date: "",
    leaveType: "",
    duration: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      username: "",
      date: "",
      leaveType: "Annual",
      duration: "Full Day",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md bg-white p-6  rounded-md">
      <h3 className="text-xl font-semibold mb-4">Apply Leave</h3>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <select
        name="leaveType"
        value={formData.leaveType}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
      >
        <option>Annual</option>
        <option>Casual</option>
        <option>Sick</option>
      </select>
      <select
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      >
        <option>Full Day</option>
        <option>First Half</option>
        <option>Second Half</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default LeaveForm;
