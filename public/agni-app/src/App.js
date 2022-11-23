

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Splash from "./components/splash";
import Context from "./components/context";
import Wild from "./components/wild";
import Location from "./components/location";
import Impact from "./components/impact";
import Summary from "./components/summary";
import Help from "./components/help";
import About from "./components/about";


const anchors = ["home", "context", "wild", "location", "impact", "summary", "help", "about"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#212121","#dddddd","#212121", "#dddddd","#212121", "#dddddd","#212121", "#dddddd", ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <Splash/>
          <Context/>
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