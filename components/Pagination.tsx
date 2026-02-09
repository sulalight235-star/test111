
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalItems: number;
  selectedCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, selectedCount }) => {
  return (
    <div className="flex items-center justify-between p-2 border-t border-gray-200 text-xs text-gray-600 bg-white">
      <div className="text-blue-600 font-medium">
        已选: <span className="font-bold">{selectedCount}</span> 条数据
      </div>

      <div className="flex items-center space-x-3">
        <span>共 {totalItems} 条</span>
        <div className="flex items-center gap-1">
          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">
            <ChevronLeft size={14} />
          </button>
          <button className="w-6 h-6 flex items-center justify-center border border-blue-500 bg-blue-500 text-white rounded">1</button>
          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">2</button>
          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">3</button>
          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">4</button>
          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">5</button>
          <span className="px-1 text-gray-400">...</span>
          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">12</button>
          <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <select className="border border-gray-300 rounded px-1 py-0.5 bg-white outline-none">
            <option>25 条/页</option>
            <option>50 条/页</option>
            <option>100 条/页</option>
          </select>
          <span className="flex items-center gap-1">
            跳至 <input type="text" className="w-10 border border-gray-300 rounded px-1 py-0.5 text-center outline-none" /> 页
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
