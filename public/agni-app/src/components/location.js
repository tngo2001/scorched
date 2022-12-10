import { Helmet } from "react-helmet"

export const Location = () => {
    return (
      <div className="section dark-bg">
        <h3>Fires, fires everywhere</h3>

        <p>Who is most impacted by these wildfires?</p>

        <div className='tableauPlaceholder' id='viz1669791521307' style={{margin: 'auto'}}>
          <noscript>
            <a href='/#'>
              <img alt='Which States Are Most Affected by Wildfires?' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Sc&#47;ScorchedLocation&#47;TotalAcresBurned&#47;1_rss.png' style={{border: 'none'}} />
            </a>
          </noscript>
          <object className='tableauViz' style={{display: 'none'}}>
              <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
              <param name='embed_code_version' value='3' />
              <param name='site_root' value='' />
              <param name='name' value='ScorchedLocation&#47;TotalAcresBurned' />
              <param name='tabs' value='yes' />
              <param name='toolbar' value='yes' />
              <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Sc&#47;ScorchedLocation&#47;TotalAcresBurned&#47;1.png' />
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
            var divElement = document.getElementById('viz1669791521307');
            var vizElement = divElement.getElementsByTagName('object')[0];
            vizElement.style.width = '100vh';
            vizElement.style.height = '55vh';
            var scriptElement = document.createElement('script');
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
            vizElement.parentNode.insertBefore(scriptElement, vizElement);
          </script>
        </Helmet>


      <p>Many communities are developed and developing on lands that are naturally prone to wildfires. This means that even more people and homes will be in harm's way.</p>
      </div>);
  };

  export default Location;