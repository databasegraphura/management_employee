import Sidebar from "../components/Sidebar";
import ProjectTable from "../components/ProjectTable";
import Topbar from "../components/Topbar"; // <-- Import the Topbar component

export default function MyProjects() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Topbar /> {/* <-- Add Topbar here */}
        <ProjectTable title="Pending Projects" />
      </div>
    </div>
  );
}
