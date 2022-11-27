

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Splash from "./components/splash";
import Context from "./components/context";
import Acres from "./components/acres";
import Wild from "./components/wild";
import Location from "./components/location";
import Impact from "./components/impact";
import Summary from "./components/summary";
import Help from "./components/help";
import About from "./components/about";


const anchors = ["Introduction", "Overview", "Acres-burned", "Causes", "Location", "Impact", "Summary", "How-to-help", "About"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#212121","#EEE8E7","#212121", "#EEE8E7","#212121", "#EEE8E7","#212121", "#EEE8E7", "#212121"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <Splash/>
          <Context/>
          <Acres/>
          <Wild/>
          <Location/>
          <Impact/>
          <Summary/>
          <Help/>
          <About/>
      
        </div>
      );
    }}
  />
);
export default App;