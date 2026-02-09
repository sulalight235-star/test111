
import React from 'react';
import { MaterialStatus, MaterialItem } from '../types';

interface MaterialTableProps {
  currentStatus: MaterialStatus;
  selectedItems: string[];
  onSelectionChange: (ids: string[]) => void;
}

const MaterialTable: React.FC<MaterialTableProps> = ({ currentStatus, selectedItems, onSelectionChange }) => {
  // Generate mock data based on current status for visual consistency
  const MOCK_DATA: MaterialItem[] = Array.from({ length: 20 }).map((_, i) => ({
    id: `RP202512100${i}`,
    status: currentStatus,
    type: i % 3 === 0 ? '商品新增' : (i % 3 === 1 ? '商品修改' : '商品重推'),
    source: 'SCP',
    supplier: i % 2 === 0 ? '上海方犀...' : '洛阳辉星...',
    projectName: '国铁商城',
    auditFlowId: `RP20260212100${i}`,
    productCode: `B1503002${i}`,
    productName: i % 4 === 0 ? '保暖面罩' : (i % 4 === 1 ? '工具充电柜' : (i % 4 === 2 ? 'ABS塑料长条凳' : '坐姿椅')),
    unit: i % 5 === 0 ? '个' : (i % 5 === 1 ? '台' : (i % 5 === 2 ? '条' : '件')),
    agreedPrice: i % 3 === 0 ? '26.00' : (i % 3 === 1 ? '-' : '450.00'),
    submitTime: '2026-02-09 1...',
    auditTime: '-',
    auditor: '',
    remark: ''
  }));

  const toggleSelectAll = () => {
    if (selectedItems.length === MOCK_DATA.length) {
      onSelectionChange([]);
    } else {
      onSelectionChange(MOCK_DATA.map(item => item.id));
    }
  };

  const toggleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      onSelectionChange(selectedItems.filter(item => item !== id));
    } else {
      onSelectionChange([...selectedItems, id]);
    }
  };

  const columns = [
    { title: '操作', width: 'w-32' },
    { title: '提报状态', width: 'w-24' },
    { title: '提报类型', width: 'w-24' },
    { title: '提报来源', width: 'w-20' },
    { title: '提报供...', width: 'w-32' },
    { title: '项目名称', width: 'w-24' },
    { title: '审批流编码', width: 'w-40' },
    { title: '商品编码', width: 'w-32' },
    { title: '商品名称', width: 'w-48' },
    { title: '计量单位', width: 'w-20' },
    { title: '协议价', width: 'w-24' },
    { title: '提报时间', width: 'w-32' },
    { title: '审核时间', width: 'w-32' },
    { title: '审核人', width: 'w-24' },
    { title: '审核备注', width: 'w-32' },
  ];

  return (
    <div className="absolute inset-0 overflow-auto border-t border-gray-200">
      <table className="w-full text-xs text-left border-collapse min-w-[1600px]">
        <thead className="sticky top-0 bg-gray-50 shadow-sm z-20">
          <tr>
            <th className="p-2 border-b border-gray-200 w-10 text-center">
              <input 
                type="checkbox" 
                className="rounded text-blue-600"
                checked={selectedItems.length === MOCK_DATA.length && MOCK_DATA.length > 0}
                onChange={toggleSelectAll}
              />
            </th>
            {columns.map((col, idx) => (
              <th key={idx} className={`${col.width} p-2 font-medium text-gray-700 border-b border-r border-gray-200 bg-gray-50`}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {MOCK_DATA.map((item) => (
            <tr 
              key={item.id} 
              className={`hover:bg-blue-50 transition-colors ${selectedItems.includes(item.id) ? 'bg-blue-50/50' : ''}`}
            >
              <td className="p-2 border-b border-r border-gray-100 text-center">
                <input 
                  type="checkbox" 
                  className="rounded text-blue-600"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelectItem(item.id)}
                />
              </td>
              <td className="p-2 border-b border-r border-gray-100 whitespace-nowrap">
                <div className="flex space-x-3 text-blue-600">
                  {currentStatus !== MaterialStatus.PENDING_PUSH && (
                    <>
                      <button className="hover:underline">通过</button>
                      <button className="hover:underline">驳回</button>
                    </>
                  )}
                  <button className="hover:underline">查看</button>
                </div>
              </td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.status}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.type}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.source}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600 truncate max-w-[120px]">{item.supplier}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.projectName}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.id}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.productCode}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600 font-medium truncate max-w-[180px]">{item.productName}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.unit}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.agreedPrice}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.submitTime}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.auditTime}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.auditor || '-'}</td>
              <td className="p-2 border-b border-r border-gray-100 text-gray-600">{item.remark || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialTable;
