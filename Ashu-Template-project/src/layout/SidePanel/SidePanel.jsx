import { Link } from "react-router-dom";
import useSidePanel from "../../context/sidepanel.context";
import "./SidePanel.css";

const SidePanel = () => {
  const { showPanel, setShowPanel } = useSidePanel();
  const handleMenuClick = (e) => {
    console.log(e);
    if (e.view.innerWidth <= 1024) {
      setShowPanel(!showPanel);
    }
  };

  return (
    <div
      id="sidePanel"
      className={`shadow h-full bg-slate-800 lg:block min-w-[270px] text-slate-200 border-slate-100 xl:min-w-[360px] ${
        showPanel ? "block fixed top-0 left-0" : "hidden"
      }`}
    >
      <div className="p-4">
        <div className="lg:hidden flex items-center mb-4 justify-between cursor-pointer">
          <h2 className="text-xl font-semibold ">
            <Link to="/dashboard">Company Name</Link>
          </h2>
          <i
            className="fa-solid fa-arrow-left h-[30px] w-[30px] bg-slate-500 pl-2 rounded-full text-xl text-white"
            onClick={() => setShowPanel(!showPanel)}
          ></i>
        </div>

        <ul
          className="menu text-l xl:text-xl "
          onClick={(e) => handleMenuClick(e)}
        >
          <li>
            <Link to="/item1">Item 1</Link>
          </li>
          <li>
            <details open>
              <summary>
                <Link to="/lalit">Lalit</Link>
              </summary>
              <ul className="border-l">
                <li>
                  <Link to="/lalit/amulya">Amulya</Link>
                </li>
                <li>
                  <Link to="/lalit/devi">Devi Prasad</Link>
                </li>
                <li>
                  <details>
                    <summary>
                      <Link to="/lalit/sasmita">Sasmita</Link>
                    </summary>
                    <ul className="border-l">
                      <li>
                        <Link to="/lalit/sasmita/sonu">Subhalaxmi</Link>
                      </li>
                      <li>
                        <Link to="/lalit/sasmita/kalu">Ram Sankar</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary>
                <Link to="bansi">Bansidhar</Link>
              </summary>
              <ul className="border-l">
                <li>
                  <a>Gangadhar</a>
                </li>
                <li>
                  <a>Srinibas</a>
                </li>
                <li>
                  <details open>
                    <summary>Sanghamitra</summary>
                    <ul className="border-l">
                      <li>
                        <a>Ashutosh</a>
                      </li>
                      <li>
                        <a>Anshuman</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/item3">Item 3</Link>
          </li>
          <li>
            <Link to="/data-table">Data Table</Link>
          </li>
          <hr></hr>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/setting">Settings</Link>
          </li>
          <li>
            <Link to="/price">Price</Link>
          </li>
          <li>
            <Link to="/contact/1">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
