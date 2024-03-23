import Card from "../../components/Card/Card";
import SidePanel from "../../layout/SidePanel/SidePanel";

const Dashboard = ({ showPanel, setShowPanel }) => {
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden shadow flex justify-center">
      <SidePanel {...{ showPanel, setShowPanel }} />
      <div className="container mt-3 mb-3 mr-2 p-2 ml-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card />
          <div className="bg-white shadow w-2xl h-52 p-3 m-1">2</div>
          <div className="bg-white shadow w-2xl h-52 p-3 m-1">3</div>
          <div className="bg-white shadow w-2xl h-52 p-3 m-1">4</div>
        </div>
        <h1> This Should be My container</h1>
        <button className="btn btn-primary">Primary</button>
      </div>
    </div>
  );
};

export default Dashboard;
