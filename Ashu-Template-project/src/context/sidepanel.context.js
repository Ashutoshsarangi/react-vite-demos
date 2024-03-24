import { createContext, useContext } from "react";

const sidePanelContext = createContext({
  showPanel: false,
  setShowPanel: () => {},
});

export const SidePanelProvider = sidePanelContext.Provider;

const useSidePanel = () => useContext(sidePanelContext);

export default useSidePanel;
