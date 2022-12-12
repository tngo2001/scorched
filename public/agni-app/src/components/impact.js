import fireCigarette from '../media/fireCigarette.png';
import { Helmet } from "react-helmet"

export const Impact = () => {
    return (
      <div className="section dark-bg">
        <h3>Wildfires are costly</h3>

        <div class="tableauPlaceholder" id="viz1670824218071" style={{margin: 'auto'}}>
          <noscript>
            <a href="/#"><img alt="How much do wildfires cost?" src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;co&#47;cost_16708238772940&#47;Sheet1&#47;1_rss.png" style={{border: 'none'}} /></a>
          </noscript>
          <object class="tableauViz" style={{display: 'none'}}>
            <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" /> <param name="embed_code_version" value="3" /> <param name="site_root" value="" /><param name="name" value="cost_16708238772940&#47;Sheet1" />
            <param name="tabs" value="no" /><param name="toolbar" value="yes" /><param name="static_image" value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;co&#47;cost_16708238772940&#47;Sheet1&#47;1.png" />
            <param name="animate_transition" value="yes" /><param name="display_static_image" value="yes" /><param name="display_spinner" value="yes" /><param name="display_overlay" value="yes" /><param name="display_count" value="yes" />
            <param name="language" value="en-US" />
          </object>
        </div>
        <Helmet>
          <script type="text/javascript">
              var divElement = document.getElementById("viz1670824218071");
              var vizElement = divElement.getElementsByTagName("object")[0];
              vizElement.style.width = '100vh';
              vizElement.style.height = '50vh';
              var scriptElement = document.createElement("script");
              scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
              vizElement.parentNode.insertBefore(scriptElement, vizElement);
          </script>
        </Helmet>

        <p><strong>Health Effects</strong></p>

        <div className='layoutOne'>
          <p>
            For individuals, wildfires can have devastating effects on their health. Not many people die in the actual fire each year, but an estimated number of <bold>30,000 people</bold> die prematurely in the world from health complications due to the fires.
            Usually, it’s from the smoke, which is fine particulate matter that gets trapped in the lungs and leads to respiratory and cardiovascular problems. For comparison, an Air Quality Index of 150 is equivalent to smoking seven cigarettes a day.
            This year, Seattle hit an all-time record of almost twice that.
          </p>
        </div>

        <img src={fireCigarette} alt="" width="40%" height="40%"/>

        <p><strong>Impact on wildlife</strong></p>

        <div className='layoutOne'>
          <p>Natural wildfires can actually benefit wildlife by increasing biodiversity once a habitat recovers. However, too many frequent and intense fires can result in loss of habitats and food sources, forced migration, an opening for invasive species to move in before native flora grow, and flooding and erosion.</p>
          <p>Even after the fires burn out, huge areas of habitats are completely destroyed or end up fragmented. It can take up to <bold>80 years</bold> for a habitat to fully recover after a wildfire.</p>
        </div>
      </div>);
  };

  export default Impact;