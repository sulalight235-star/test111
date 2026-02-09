
import React from 'react';
import { Search, RotateCcw, ChevronDown, Calendar, Filter } from 'lucide-react';

const FilterSection: React.FC = () => {
  return (
    <div className="p-3 bg-gray-50/50 rounded flex flex-wrap items-center gap-4 text-xs">
      <div className="flex items-center gap-2">
        <Filter size={14} className="text-gray-400" />
        <span className="font-medium text-gray-600">筛选:</span>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-gray-500">项目名称</label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="国铁商城"
            className="border border-gray-300 rounded px-2 py-1 w-48 focus:border-blue-500 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-gray-500">提报时间</label>
        <div className="flex items-center gap-1">
          <div className="relative">
            <input type="text" placeholder="请选择" className="border border-gray-300 rounded px-2 py-1 w-28 bg-white" />
            <Calendar size={12} className="absolute right-2 top-2 text-gray-400" />
          </div>
          <span className="text-gray-300">→</span>
          <div className="relative">
            <input type="text" placeholder="请选择" className="border border-gray-300 rounded px-2 py-1 w-28 bg-white" />
            <Calendar size={12} className="absolute right-2 top-2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-gray-500">审核时间</label>
        <div className="flex items-center gap-1">
          <div className="relative">
            <input type="text" placeholder="请选择" className="border border-gray-300 rounded px-2 py-1 w-28 bg-white" />
            <Calendar size={12} className="absolute right-2 top-2 text-gray-400" />
          </div>
          <span className="text-gray-300">→</span>
          <div className="relative">
            <input type="text" placeholder="请选择" className="border border-gray-300 rounded px-2 py-1 w-28 bg-white" />
            <Calendar size={12} className="absolute right-2 top-2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1 transition-colors shadow-sm">
          <Search size={14} /> 查询
        </button>
        <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 px-3 py-1 rounded flex items-center gap-1 transition-colors">
          <RotateCcw size={14} /> 重置
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
