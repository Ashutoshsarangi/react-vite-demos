import Card from "../../components/Card/Card";

const Dashboard = ({ setShowPanel, showPanel }) => {
  return (
    <div
      className="flex h-[calc(100vh-80px)] overflow-hidden shadow justify-center"
      id="container"
    >
      <div
        id="sidePanel"
        className={`shadow h-full bg-slate-800 lg:block min-w-[270px] text-slate-200 border-slate-100 ${
          showPanel ? "block fixed top-0" : "hidden"
        }`}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 lg:hidden">Company Name</h2>
          <button
            className="lg:hidden"
            onClick={() => setShowPanel(!showPanel)}
          >
            Close
          </button>
          <p>This is your side panel content.</p>
        </div>
      </div>
      <div className="container mt-3 mb-3 ml-2 mr-2 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card />
          <div className="bg-white shadow w-2xl h-52 p-3 m-1">2</div>
          <div className="bg-white shadow w-2xl h-52 p-3 m-1">3</div>
          <div className="bg-white shadow w-2xl h-52 p-3 m-1">4</div>
        </div>
        <h1> This Should be My container</h1>
      </div>
    </div>
  );
};

export default Dashboard;
