import PayoutTable from "../components/PayoutTable";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import Topbar from "../components/Topbar";
import { FaRupeeSign } from "react-icons/fa";

export default function PayOut() {
  const payoutData = Array.from({ length: 7 }, (_, i) => ({
    company: "Bold text column",
    invoice: "Bold text column",
    service: "Bold text column",
    amount: "Bold text column",
    date: "Bold text column",
  }));

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <Topbar />

        <div className="bg-white rounded shadow mt-6 p-4">
          <h2 className="text-lg font-semibold mb-4">Pay Out</h2>

            <div className="px-8 flex w-full justify-between">
                <div className="flex flex-col gap-2 w-1/3">
                    <input type="date" placeholder="Start Date"  className="px-4 py-2 rounded-lg shadow"/>
                    <input type="date" placeholder="End Date" className="px-4 py-2 rounded-lg shadow"/>
                    <button className="w-[30%] text-white px-4 py-2 bg-blue-500 rounded-lg font-bold cursor-pointer">Search</button>
                </div>
                <div className="flex flex-col gap-4">
                    <StatCard label="TOTAL PAY OUT" value="4" icon={<FaRupeeSign />} color="border-[#36b9cc]"/>
                    <StatCard label="LAST MONTH PAY OUT" value="5" icon={<FaRupeeSign />} color="border-green-500"/>
                </div>
            </div>

          {/* Payout Table */}
            <PayoutTable/>
        </div>
      </div>
    </div>
  );
}