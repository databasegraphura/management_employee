import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Help() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Topbar /> {/* Add the Topbar here to make position same */}
        <h1 className="text-2xl font-bold mb-4">Help</h1>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100 font-semibold">
                  <th className="p-3 text-left">Designation</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Contact no.</th>
                  <th className="p-3 text-left">Email ID</th>
                  <th className="p-3 text-left">Department</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-3 font-semibold">Bold text column</td>
                    <td className="p-3 font-semibold">Bold text column</td>
                    <td className="p-3 font-semibold">Bold text column</td>
                    <td className="p-3 font-semibold">Bold text column</td>
                    <td className="p-3 font-semibold">Bold text column</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
