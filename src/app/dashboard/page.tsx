"use client";

import { useState } from "react";
import {
  Card,
  Metric,
  Text,
  Flex,
} from "@tremor/react";
import {
  ChartBarIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ActivityTable from "@/components/activity-table";
import { ThemeToggle } from "@/components/theme-toggle";
import { BarChartAxisLabelsExample } from "@/components/bar-example";
import AfrocoinOwnership from "@/components/asset-ownership";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-60 bg-white dark:bg-gray-800 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold-500 dark:bg-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SOC</span>
              </div>
              <span className="text-gold-500 dark:text-gold-400 font-semibold text-sm">Stokvel-onchain</span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <XMarkIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
        {/* Menu */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-3">MENU</div>

          {/* Dashboard Section */}
          <div className="mb-2">
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gold-50 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400">
              <div className="flex items-center gap-2">
                <ChartBarIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Dashboard</span>
              </div>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Other Menu Items */}
          <button className="w-full flex items-center justify-between px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg mb-1">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <span className="text-sm font-medium">Calculator</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 px-2 py-0.5 rounded font-medium">NEW</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg mb-1">
            <div className="flex items-center gap-2">
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Votes</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 px-2 py-0.5 rounded font-medium">NEW</span>
            </div>
          </button>

          <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg mb-1">
            {/* <EllipsisVerticalIcon/> */}
            <span className="text-sm font-medium">Stokvel Gold</span>
          </button>

          <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg mb-1">
            <UserGroupIcon className="w-5 h-5" />
            <span className="text-sm font-medium">User Profile</span>
          </button>



          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-3">SUPPORT</div>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
            <span className="text-lg">💬</span>
            <span className="text-sm font-medium">Chat</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white dark:bg-gray-800 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4 flex-1">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <Bars3Icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>

              {/* Search Bar */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search or type command..."
                    className="w-full pl-10 pr-12 py-2 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 dark:focus:ring-gold-600"
                  />
                  <kbd className="hidden sm:block absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 rounded text-gray-600 dark:text-gray-300">
                    ⌘ K
                  </kbd>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle>
              </ThemeToggle>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg relative">
                <BellIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="hidden sm:flex items-center gap-2 pl-3 ml-3">
                <div className="w-9 h-9 bg-gold-600 dark:bg-gold-500 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Mzobe</span>
                </div>
              </div>
              <div className="sm:hidden w-9 h-9 bg-gold-600 dark:bg-gold-500 rounded-full ml-2"></div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50 dark:bg-gray-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Members Card */}
            <Card className="rounded-2xl border-0 bg-white dark:bg-gray-800 p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                  <UserGroupIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <Text className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-2">Members</Text>
              <Flex alignItems="start" className="mt-1">
                <Metric className="text-gray-900 dark:text-gray-100 text-4xl font-bold">8</Metric>
              </Flex>
            </Card>

            {/* Account Card */}
            <Card className="rounded-2xl border-0 bg-white dark:bg-gray-800 p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-green-50 dark:bg-green-900/30 rounded-xl">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <Text className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-2">Account Balance</Text>
              <Flex alignItems="start" className="mt-1">
                <Metric className="text-gray-900 dark:text-gray-100 text-4xl font-bold">R1,600.02</Metric>
              </Flex>
            </Card>

            {/* Gold Coin Ownership Card */}
            <Card className="sm:col-span-2 lg:col-span-1 lg:row-span-2 rounded-2xl border-0 bg-white dark:bg-gray-800 p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <AfrocoinOwnership/>
            </Card>

            {/* Monthly Sales Chart */}
            <Card className="sm:col-span-2 lg:col-span-2 rounded-2xl border-0 bg-white dark:bg-gray-800 p-6 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <BarChartAxisLabelsExample />
            </Card>
          </div>

          {/* Activity Table */}
          <Card className="rounded-2xl border-0 bg-white dark:bg-gray-800 p-6">
            <ActivityTable />
          </Card>
        </main>
      </div>
    </div>
  );
}