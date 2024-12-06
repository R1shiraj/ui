import { MyChart } from "@/components/ui/my-chart";

// src/app/dashboard/page.tsx
export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg text-gray-700">
          Welcome to the dashboard. Here you can view key metrics and monitor
          system performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">Active Devices</h2>
            <p className="text-gray-600">120 active devices</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">Registered Nurses</h2>
            <p className="text-gray-600">35 nurses onboarded</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">Pending Allocations</h2>
            <p className="text-gray-600">8 pending tasks</p>
          </div>
        </div>
      </div>
      <MyChart />
    </div>
  );
}
