import { Outlet } from "react-router-dom";
import Card from "../../components/Card/Card";
import SidePanel from "../../layout/SidePanel/SidePanel";

const Dashboard = ({ showPanel, setShowPanel }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Card
          icon="globe"
          title="10+"
          subtitle="Web Applications"
          recentlyAdded="4"
        />
        <Card
          icon="mobile"
          title="5+"
          subtitle="Mobile Applications"
          recentlyAdded="2"
        />
      </div>
      ​
    </div>
  );
};

export default Dashboard;
