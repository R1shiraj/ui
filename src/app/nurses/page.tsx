// src/app/nurses/page.tsx
export default function Nurses() {
    return (
      <div className="p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Nurses</h1>
        <p className="text-lg text-gray-700">
          View and manage all registered nurses in the system.
        </p>
        <div className="mt-6">
          <ul className="space-y-4">
            <li className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-semibold">Nurse A</h2>
              <p className="text-gray-600">Assigned to Ward 3</p>
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-xl font-semibold">Nurse B</h2>
              <p className="text-gray-600">Currently available</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  