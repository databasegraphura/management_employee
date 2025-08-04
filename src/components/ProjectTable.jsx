export default function ProjectTable({ title }) {
  const rows = Array.from({ length: 6 }, (_, i) => ({
    company: "Bold text column",
    invoice: "Bold text column",
    service: "Bold text column",
    date: "Bold text column",
    deadline: "Bold text column",
    activity: "Bold text column",
  }));

  return (
    <div className="bg-white rounded shadow mt-6 p-4 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-600 font-bold">
          <tr>
            <th className="px-2 py-2">Company Name</th>
            <th className="px-2 py-2">Invoice No.</th>
            <th className="px-2 py-2">Services</th>
            <th className="px-2 py-2">Date</th>
            <th className="px-2 py-2">Dead line</th>
            <th className="px-2 py-2">Activity</th>
            <th className="px-2 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-2 py-2">{row.company}</td>
              <td className="px-2 py-2">{row.invoice}</td>
              <td className="px-2 py-2">{row.service}</td>
              <td className="px-2 py-2">{row.date}</td>
              <td className="px-2 py-2">{row.deadline}</td>
              <td className="px-2 py-2">{row.activity}</td>
              <td className="px-2 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
