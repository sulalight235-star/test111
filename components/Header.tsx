
import React from 'react';
import { Bell, FileText, RefreshCw, Layers, Layout, ClipboardList, User, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white flex items-center justify-between px-4 py-2 h-12 shrink-0 shadow-md">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold">咸</span>
          </div>
          <h1 className="font-bold text-base tracking-wide">咸亨国际主数据管理平台</h1>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 px-2 py-0.5 rounded text-xs flex items-center gap-1 transition-colors">
          🔥 切换系统
        </button>
      </div>

      <nav className="flex items-center space-x-6 text-xs overflow-x-auto no-scrollbar">
        <a href="#" className="flex items-center gap-1 hover:text-blue-200">
          <Bell size={14} /> 消息通知
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-blue-200">
          <FileText size={14} /> 价格审核
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-blue-200">
          <RefreshCw size={14} /> 版本更新
        </a>
        <div className="flex items-center gap-1">
          <span>推送ERP</span>
          <div className="w-12 h-2 bg-white/30 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-white"></div>
          </div>
        </div>
        <a href="#" className="flex items-center gap-1 hover:text-blue-200">
          <Layers size={14} /> 管理模块
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-blue-200">
          <Layout size={14} /> 任务中心
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-blue-200">
          <ClipboardList size={14} /> 清洗任务
        </a>
        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200 group relative">
          <User size={14} /> 
          <span>管理员</span>
          <ChevronDown size={14} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
