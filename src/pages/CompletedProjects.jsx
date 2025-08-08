import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import ProjectTable from "../components/ProjectTable";
import Topbar from "../components/Topbar";

export default function CompletedProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URI}/api/executive/completed-projects`)
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Topbar />
        <ProjectTable title="Completed Projects" data={projects} loading={loading} />
      </div>
    </div>
  );
}