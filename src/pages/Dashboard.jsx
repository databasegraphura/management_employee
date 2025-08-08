import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ProjectTable from "../components/ProjectTable";
import Topbar from "../components/Topbar";
import { FaRupeeSign, FaClipboardCheck, FaTasks, FaHistory } from "react-icons/fa";
import axios from "axios";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completedLoading, setCompletedLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URI}/api/executive/my-projects`)
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    axios
      .get(`${process.env.REACT_APP_BACKEND_URI}/api/executive/completed-projects`)
      .then((res) => {
        setCompletedProjects(res.data);
        setCompletedLoading(false);
      })
      .catch(() => setCompletedLoading(false));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Topbar />
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard label="LAST MONTH INCOME" value="10" icon={<FaRupeeSign />} color="border-blue-500" />
          <StatCard label="CURRENT PROJECTS" value={projects.length} icon={<FaClipboardCheck />} color="border-green-500" />
          <StatCard
            label="COMPLETED PROJECTS"
            value={completedLoading ? "..." : completedProjects.length}
            icon={<FaTasks />}
            color="border-cyan-500"
          />
          <StatCard label="PENDING PROJECTS" value={projects.length} icon={<FaHistory />} color="border-yellow-500" />
        </div>
        <ProjectTable title="Pending Projects" data={projects} loading={loading} />
      </div>
    </div>
  );
}