import React from "react";

interface SidebarProps {
  onSelect: (section: string) => void;
  title1: string;
  title2: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect, title1, title2 }) => {
  return (
    <div className="w-60 bg-gray-800 text-white p-4 h-full">
      <ul>
        <li
          className="cursor-pointer mb-4 hover:text-blue-400"
          onClick={() => onSelect("leave")}
        >
          {title1}
        </li>
        <li
          className="cursor-pointer mb-4 hover:text-blue-400"
          onClick={() => onSelect("leave-requests")}
        >
          {title2}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
