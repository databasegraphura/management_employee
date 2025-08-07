export default function StatCard({ label, value, icon, color }) {
  return (
    <div className={`relative bg-white rounded-xl shadow-md px-4 py-3 flex justify-between items-center border-l-4 ${color}`}>
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">{label}</p>
        <p className="text-xl font-semibold text-gray-800">{value}</p>
      </div>
      <div className="text-gray-300 text-3xl">
        {icon}
      </div>
    </div>
  );
}
