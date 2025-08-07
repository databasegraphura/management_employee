import { useState } from "react";

export default function PayoutTable({ title }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");

  const rows = Array.from({ length: 6 }, (_, i) => ({
    company: `Company ${i + 1}`,
    invoice: "Bold text column",
    service: "Bold text column",
    total_amount: "Bold text column",
    complete_date: "Bold text column",
    project_file: "Bold text column",
  }));

  const handleUpdateClick = (company) => {
    setSelectedCompany(company);
    setShowModal(true);
  };

  return (
    <div className="bg-white rounded shadow mt-6 p-4 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-600 font-bold">
          <tr>
            <th className="px-2 py-2">Company Name</th>
            <th className="px-2 py-2">Invoice No.</th>
            <th className="px-2 py-2">Services</th>
            <th className="px-2 py-2">Total Amount</th>
            <th className="px-2 py-2">Complete Date</th>
            <th className="px-2 py-2">Project File</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-2 py-2">{row.company}</td>
              <td className="px-2 py-2">{row.invoice}</td>
              <td className="px-2 py-2">{row.service}</td>
              <td className="px-2 py-2">{row.total_amount}</td>
              <td className="px-2 py-2">{row.complete_date}</td>
              <td className="px-2 py-2">
                <button
                  onClick={() => handleUpdateClick(row.company)}
                  className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
