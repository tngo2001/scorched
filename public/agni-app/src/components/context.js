import { Helmet } from "react-helmet"

export const Context = () => {
    return (
      <div className="section">
        <h3>Overview</h3>

        <p>The number of wildfires per year has been relatively constant, even slightly decreasing...</p>

        <div className='tableauPlaceholder' id='viz1669688958283' style={{margin: 'auto'}}>
          <noscript>
            <a href='/#'>
              <img alt='Number of Fires per Year' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;gr&#47;graphs_16696889523410&#47;Sheet1&#47;1_rss.png' style={{border: 'none'}} />
            </a>
          </noscript>
          <object className='tableauViz'  style={{display: 'none'}}>
              <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
              <param name='embed_code_version' value='3' />
              <param name='site_root' value='' />
              <param name='name' value='graphs_16696889523410&#47;Sheet1' />
              <param name='tabs' value='no' />
              <param name='toolbar' value='yes' />
              <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;gr&#47;graphs_16696889523410&#47;Sheet1&#47;1.png' />
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
            var divElement = document.getElementById('viz1669688958283');                    
            var vizElement = divElement.getElementsByTagName('object')[0];                    
            vizElement.style.width='100vh';
            vizElement.style.height='50vh';                
            var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
            vizElement.parentNode.insertBefore(scriptElement, vizElement);                
          </script>
        </Helmet>

        <p>...so why does it feel like wildfires appear on the news <span style={{color:"#D14337"}}>more and more</span> in the past few years?</p>

        <p><strong>Let's smoke out the data.</strong></p>
        {/* What if we made that text a button that scrolled to the next section? */}

       
       
      </div>);
  };
  
  export default Context;