

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Splash from "./components/splash";
import Context from "./components/context";
import Acres from "./components/acres";
import AcresExplain from "./components/acresExplain";
import Wild from "./components/wild";
import CauseExplain from "./components/causeExplain";
import Location from "./components/location";
import Impact from "./components/impact";
import Summary from "./components/summary";
import Help from "./components/help";
import Sources from "./components/sources";
import About from "./components/about";


const anchors = ["Introduction", "Overview", "Acres-burned", "Intensity-Explained", "Causes", "Causes-Explained", "Location", "Impact", "Summary", "How-to-help", "Sources", "About"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat

    sectionsColor={["#212121","#212121", "#212121", "#212121", "#212121", "#212121", "#212121", "#212121", "#212121", "#212121", "#212121", "#212121"]}
    onLeave={(origin, destination, direction) => {
      //console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      //console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <Splash/>
          <Context/>
          <Acres/>
          <AcresExplain/>
          <Wild/>
          {/* <CauseExplain/> -- incorporated into "Wild" text*/}
          <Location/>
          <Impact/>
          <Summary/>
          <Help/>
          <Sources/>
          <About/>
      
        </div>
      );
    }}
  />
);
export default App;