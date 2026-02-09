
import React from 'react';
import { X } from 'lucide-react';

const PageTabs: React.FC = () => {
  const tabs = [
    { id: '1', title: '待推送物料列表', active: true },
    { id: '2', title: '对接物料列表管理', active: false },
    { id: '3', title: '物料列表', active: false },
    { id: '4', title: '物料信息-编辑', active: false },
  ];

  return (
    <div className="bg-blue-500/10 px-1 py-1 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar">
        {tabs.map(tab => (
          <div 
            key={tab.id} 
            className={`
              flex items-center gap-2 px-3 py-1 text-xs rounded-t cursor-pointer transition-colors
              ${tab.active ? 'bg-white text-blue-600 font-medium border border-b-0 border-gray-200' : 'text-gray-600 hover:bg-white/50'}
            `}
          >
            <span>{tab.title}</span>
            <X size={12} className="hover:bg-red-100 rounded text-gray-400" />
          </div>
        ))}
      </div>
      <button className="text-xs bg-white px-2 py-0.5 border border-gray-300 rounded hover:bg-gray-50 text-gray-600">
        清除
      </button>
    </div>
  );
};

export default PageTabs;
