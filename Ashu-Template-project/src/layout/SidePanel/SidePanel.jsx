import { useState } from "react";

const SidePanel = ({ showPanel, setShowPanel }) => {
  return (
    <div
      id="sidePanel"
      className={`shadow h-full bg-slate-800 lg:block min-w-[270px] text-slate-200 border-slate-100 xl:min-w-[360px] ${
        showPanel ? "block fixed top-0 left-0" : "hidden"
      }`}
    >
      <div className="p-4">
        <div className="lg:hidden flex items-center mb-4 justify-between cursor-pointer">
          <h2 className="text-xl font-semibold ">Company Name</h2>
          <i
            className="fa-solid fa-arrow-left h-[30px] w-[30px] bg-slate-500 pl-2 rounded-full text-xl text-white"
            onClick={() => setShowPanel(!showPanel)}
          ></i>
        </div>

        <ul className="menu text-l xl:text-xl">
          <li>
            <span>Item 1</span>
          </li>
          <li>
            <details open>
              <summary>Parent</summary>
              <ul className="border-l">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
                <li>
                  <details>
                    <summary>Parent</summary>
                    <ul className="border-l">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary>Parent</summary>
              <ul className="border-l">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
                <li>
                  <details open>
                    <summary>Parent</summary>
                    <ul className="border-l">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
          <li>
            <a>Item 4</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
