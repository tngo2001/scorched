import { Helmet } from "react-helmet"
import { useRef } from "react";

export const Location = () => {
    const acresRef = useRef(null);
    const firesRef = useRef(null);

    const showAcres = () => {
      acresRef.current.className = "";
      firesRef.current.className = "hidden";
    }

    const showFires = () => {
      acresRef.current.className = "hidden";
      firesRef.current.className = "";
    }

    return (
      <div className="section dark-bg">
        <h3>Fires, fires everywhere</h3>

        <input type="radio" value="Acres" name="chart" defaultChecked onClick={showAcres}/> Total Acres Burned
        <input type="radio" value="Fires" name="chart" onClick={showFires} /> Total Fires

        <div ref={acresRef}>
          <div className='tableauPlaceholder' id='viz1669670537910' style={{margin: 'auto'}}>
            <noscript>
              <a href='/#'>
                <img alt='Which States Are Most Affected by Wildfires?' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CS&#47;CSE442FP&#47;Acres&#47;1_rss.png' style={{border: 'none'}} />
              </a>
            </noscript>
            <object className='tableauViz' style={{display: 'none'}}>
                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='' />
                <param name='name' value='CSE442FP&#47;Acres' />
                <param name='tabs' value='no' />
                <param name='toolbar' value='yes' />
                <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CS&#47;CSE442FP&#47;Acres&#47;1.png' />
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
                <param name='language' value='en-US' />
                <param name='filter' value='publish=yes' />
            </object>
          </div>
          <Helmet>
            <script type='text/javascript'>
              var divElement = document.getElementById('viz1669670537910');
              var vizElement = divElement.getElementsByTagName('object')[0];
              vizElement.style.width = '100vh';
              vizElement.style.height = '75vh';
              var scriptElement = document.createElement('script');
              scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
              vizElement.parentNode.insertBefore(scriptElement, vizElement);
            </script>
          </Helmet>
        </div>

        <div ref={firesRef} className='hidden'>
          <div class='tableauPlaceholder' id='viz1669670721822' style={{margin: 'auto'}}>
            <noscript>
              <a href='/#'>
                <img alt='Which States Are Most Affected by Wildfires?' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CS&#47;CSE442FP&#47;Fires&#47;1_rss.png' style={{border: 'none'}} />
              </a>
            </noscript>
            <object class='tableauViz' style={{display: 'none'}}>
                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='' />
                <param name='name' value='CSE442FP&#47;Fires' />
                <param name='tabs' value='no' />
                <param name='toolbar' value='yes' />
                <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CS&#47;CSE442FP&#47;Fires&#47;1.png' />
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
                <param name='language' value='en-US' />
                <param name='filter' value='publish=yes' />
            </object>
          </div>
          <Helmet>
            <script type='text/javascript'>
              var divElement = document.getElementById('viz1669670721822');
              var vizElement = divElement.getElementsByTagName('object')[0];
              vizElement.style.width = '100vh';
              vizElement.style.height = '75vh';
              var scriptElement = document.createElement('script');
              scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
              vizElement.parentNode.insertBefore(scriptElement, vizElement);
            </script>
          </Helmet>
        </div>
      </div>);
  };

  export default Location;