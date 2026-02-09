
import React from 'react';
import { MaterialStatus } from '../types';

interface StatusTabsProps {
  activeStatus: MaterialStatus;
  onChange: (status: MaterialStatus) => void;
}

const StatusTabs: React.FC<StatusTabsProps> = ({ activeStatus, onChange }) => {
  const statuses = Object.values(MaterialStatus);

  return (
    <div className="flex items-center bg-gray-50 p-0.5 rounded-sm border border-gray-200 w-fit">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => onChange(status)}
          className={`
            px-4 py-1.5 text-xs transition-all
            ${activeStatus === status 
              ? 'bg-blue-600 text-white shadow-sm rounded-sm z-10' 
              : 'text-gray-600 hover:bg-gray-100'}
          `}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default StatusTabs;
