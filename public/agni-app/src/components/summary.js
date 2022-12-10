import { Helmet } from "react-helmet"

export const Summary = () => {
    return (
      <div className="section dark-bg">
        <h3>Wildfires have been getting worse</h3>
        <p>Overall, wildfires hurt everyone. They hurt people, animals, homes, and 
          habitats, and alongside the increasing problem of climate change, wildfires have been burning 
          bigger than ever. And we are most causing them.
        </p>
      
        <div className="tableauPlaceholder" id="viz1670647688695" style={{margin: 'relative'}}>
            <noscript>
                <a href="/#">
                    <img
                        alt="Sample of fires from the past few years"
                        src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;su&#47;summary_graph&#47;Sheet1&#47;1_rss.png"
                        style={{border: 'none'}}
                    />
                </a>
            </noscript>
            <object className="tableauViz" style={{display: 'none'}}>
                <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" /> 
                <param name="embed_code_version" value="3" /> 
                <param name="site_root" value="" />
                <param name="name" value="summary_graph&#47;Sheet1" />
                <param name="tabs" value="no" />
                <param name="toolbar" value="yes" />
                <param name="static_image" value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;su&#47;summary_graph&#47;Sheet1&#47;1.png" />
                <param name="animate_transition" value="yes" />
                <param name="display_static_image" value="yes" />
                <param name="display_spinner" value="yes" />
                <param name="display_overlay" value="yes" />
                <param name="display_count" value="yes" />
                <param name="language" value="en-US" />
                <param name="filter" value="publish=yes" />
            </object>
        </div>
        <Helmet>
          <script type="text/javascript">
              var divElement = document.getElementById("viz1670647688695");
              var vizElement = divElement.getElementsByTagName("object")[0];
              vizElement.style.width = '100vh';
              vizElement.style.height = '55vh';
              var scriptElement = document.createElement("script");
              scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
              vizElement.parentNode.insertBefore(scriptElement, vizElement);
          </script>
        </Helmet>
      
        <p><strong>But the situation isn't hopeless.</strong></p>
        
      </div>);
  };
  
  export default Summary;