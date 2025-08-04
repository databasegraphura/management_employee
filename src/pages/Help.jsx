// pages/Help.jsx
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Help() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar title="Help" />

        {/* Page Body */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Help</h2>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Designation</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Contact no.</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email ID</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Department</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[...Array(7)].map((_, i) => (
                    <tr key={i}>
                      {Array(5).fill().map((_, j) => (
                        <td key={j} className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                          Bold text column
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
