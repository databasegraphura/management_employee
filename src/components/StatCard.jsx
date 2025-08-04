export default function StatCard({ label, value, icon, color }) {
  return (
    <div className={`flex items-center space-x-4 bg-white shadow rounded p-4 border-l-4 ${color}`}>
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
