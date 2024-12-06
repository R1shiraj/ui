// src/app/devices/page.tsx
export default function Devices() {
    return (
      <div className="p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Devices</h1>
        <p className="text-lg text-gray-700">
          Manage all devices connected to the system. Add, update, or remove devices as needed.
        </p>
        <div className="mt-6">
          <table className="min-w-full bg-white shadow-md rounded-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-6 text-left">Device Name</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Last Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-6">Device A</td>
                <td className="py-3 px-6">Online</td>
                <td className="py-3 px-6">5 minutes ago</td>
              </tr>
              <tr>
                <td className="py-3 px-6">Device B</td>
                <td className="py-3 px-6">Offline</td>
                <td className="py-3 px-6">1 hour ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  