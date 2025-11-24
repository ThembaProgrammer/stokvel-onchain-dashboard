"use client";

import {
  Card,
  Metric,
  Text,
  Flex,
  Title,
} from "@tremor/react";
import {
  ChartBarIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
  MoonIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import ActivityTable from "@/components/activity-table";
import { ThemeToggle } from "@/components/theme-toggle";
import { BarChart } from "@/components/BarChart";
import { BarChartAxisLabelsExample } from "@/components/bar-example";
import AfrocoinOwnership from "@/components/asset-ownership";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SOC</span>
            </div>
            <span className="text-gold-500 font-semibold">Stokvel-onchain</span>

          </div>
        </div>
        {/* Menu */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-400 mb-3">MENU</div>

          {/* Dashboard Section */}
          <div className="mb-2">
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gold-50 text-gold-600">
              <div className="flex items-center gap-2">
                <ChartBarIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Dashboard</span>
              </div>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Other Menu Items */}
          <button className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg mb-1">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <span className="text-sm font-medium">Calculator</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">NEW</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg mb-1">
            <div className="flex items-center gap-2">
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Votes</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">NEW</span>
            </div>
          </button>

          <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg mb-1">
            {/* <EllipsisVerticalIcon/> */}
            <span className="text-sm font-medium">Stokvel Gold</span>
          </button>

          <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg mb-1">
            <UserGroupIcon className="w-5 h-5" />
            <span className="text-sm font-medium">User Profile</span>
          </button>



          <div className="text-xs font-semibold text-gray-400 mb-3">SUPPORT</div>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <span className="text-lg">💬</span>
            <span className="text-sm font-medium">Chat</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <button className="lg:hidden">
                <Bars3Icon className="w-6 h-6 text-gray-600" />
              </button>

              {/* Search Bar */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search or type command..."
                    className="w-full pl-10 pr-12 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                  <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs bg-gray-100 border border-gray-200 rounded">
                    ⌘ K
                  </kbd>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle>
              </ThemeToggle>
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <BellIcon className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 pl-3 ml-3 border-l border-gray-200">
                <div className="w-9 h-9 bg-gold-600 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">Mzobe</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Customers Card */}
            <Card className="mx-auto max-w-xs rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <UserGroupIcon className="w-6 h-6 text-gray-600" />
                </div>
              </div>
              <Text className="text-gray-500 text-sm mb-2">Members</Text>
              <Flex alignItems="start" className="mt-1">
                <Metric className="text-gray-900 text-3xl font-bold">8</Metric>
              </Flex>
            </Card>

            {/* Orders Card */}
            <Card>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <Text className="text-gray-500 text-sm mb-2">Account</Text>
              <Flex alignItems="start" className="mt-1">
                <Metric className="text-gray-900 text-3xl font-bold">R1,600.02</Metric>
              </Flex>
            </Card>

            {/* Monthly Target Card - spans 2 rows */}
            <Card className="lg:row-span-2">
              <AfrocoinOwnership/>
            </Card>

            {/* Monthly Sales Chart - spans 2 columns */}
            <Card className="lg:col-span-2">
              <BarChartAxisLabelsExample />
            </Card>
          </div>

          {/* Statistics Chart */}
          <Card>
            <ActivityTable />
          </Card>
        </main>
      </div>
    </div>
  );
}