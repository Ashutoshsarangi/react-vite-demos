import { Outlet } from "react-router-dom";
import Card from "../../components/Card/Card";
import SidePanel from "../../layout/SidePanel/SidePanel";

const Dashboard = ({ showPanel, setShowPanel }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card />
        <div className="bg-white shadow w-2xl h-52 p-3 m-1">2</div>
        <div className="bg-white shadow w-2xl h-52 p-3 m-1">3</div>
        <div className="bg-white shadow w-2xl h-52 p-3 m-1">4</div>
      </div>
      <h1> This Should be My container</h1>
      <button className="btn btn-primary">Primary</button>
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-200 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-200 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      ​
    </div>
  );
};

export default Dashboard;
