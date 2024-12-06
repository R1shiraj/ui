// src/app/settings/page.tsx
export default function Settings() {
    return (
      <div className="p-6 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Settings</h1>
        <p className="text-lg text-gray-700">
          Adjust system preferences and configurations.
        </p>
        <div className="mt-6">
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold">System Preferences</h2>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-600 mb-1">Theme</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-1">Notifications</label>
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Enable Notifications
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  