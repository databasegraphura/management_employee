import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ProjectTable from "../components/ProjectTable";
import Topbar from "../components/Topbar";
import { FaRupeeSign, FaClipboardCheck, FaTasks, FaHistory } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Topbar /> {/* <-- Add Topbar here */}
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard label="LAST MONTH INCOME" value="10" icon={<FaRupeeSign />} color="border-blue-500" />
          <StatCard label="CURRENT PROJECTS" value="5" icon={<FaClipboardCheck />} color="border-green-500" />
          <StatCard label="COMPLETED PROJECTS" value="4" icon={<FaTasks />} color="border-cyan-500" />
          <StatCard label="PENDING PROJECTS" value="3" icon={<FaHistory />} color="border-yellow-500" />
        </div>
        <ProjectTable title="Pending Projects" />
      </div>
    </div>
  );
}
