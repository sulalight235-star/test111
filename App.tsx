
import React, { useState } from 'react';
import Header from './components/Header';
import PageTabs from './components/PageTabs';
import FilterSection from './components/FilterSection';
import StatusTabs from './components/StatusTabs';
import MaterialTable from './components/MaterialTable';
import Pagination from './components/Pagination';
import { MaterialStatus } from './types';

const App: React.FC = () => {
  const [activeStatus, setActiveStatus] = useState<MaterialStatus>(MaterialStatus.PENDING_PUSH);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <div className="flex flex-col h-screen text-sm text-gray-700 bg-gray-100">
      {/* Top Header */}
      <Header />

      {/* Breadcrumb-like Page Tabs */}
      <PageTabs />

      {/* Content Area */}
      <main className="flex-1 overflow-auto p-2 space-y-2 bg-white m-1 rounded shadow-sm flex flex-col">
        
        {/* Filter Section */}
        <FilterSection />

        {/* Action Buttons Row */}
        <div className="flex justify-between items-center px-2 py-1 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
              <span>操作:</span>
              <span>刷新</span>
            </button>
          </div>
          <div className="flex items-center space-x-4 text-xs font-medium text-blue-600">
            <button className="hover:underline">提交销售审核</button>
            <button className="hover:underline">提报明细导出</button>
            <button className="hover:underline">批量审核</button>
            <button className="hover:underline">物料导出</button>
            <button className="hover:underline">商品审核人配置</button>
          </div>
        </div>

        {/* Status Tabs (The requested focus) */}
        <div className="px-1 pt-1">
          <StatusTabs 
            activeStatus={activeStatus} 
            onChange={setActiveStatus} 
          />
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-hidden relative">
          <MaterialTable 
            currentStatus={activeStatus}
            selectedItems={selectedItems}
            onSelectionChange={setSelectedItems}
          />
        </div>

        {/* Bottom Pagination */}
        <Pagination totalItems={293} selectedCount={selectedItems.length} />
      </main>
    </div>
  );
};

export default App;
