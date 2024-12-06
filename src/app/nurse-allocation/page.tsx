// src/app/nurse-allocation/page.tsx
export default function NurseAllocation() {
    return (
      <div className="p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Nurse Allocation</h1>
        <p className="text-lg text-gray-700">
          Allocate nurses to tasks or wards efficiently.
        </p>
        <div className="mt-6">
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold">Allocate Nurse</h2>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-600 mb-1">Select Nurse</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Nurse A</option>
                  <option>Nurse B</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-1">Select Task</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Task description"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Allocate
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  