import { useState } from "react";

export default function PayoutTable({ title, data = [], loading }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");

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
          {loading ? (
            <tr>
              <td colSpan={6} className="text-center py-6">Loading...</td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-6">No payout data found.</td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-2 py-2">{row.company || row.companyName}</td>
                <td className="px-2 py-2">{row.invoice}</td>
                <td className="px-2 py-2">{row.service}</td>
                <td className="px-2 py-2">{row.total_amount || row.amount}</td>
                <td className="px-2 py-2">{row.complete_date || row.date}</td>
                <td className="px-2 py-2">
                  <button
                    onClick={() => handleUpdateClick(row.company || row.companyName)}
                    className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}