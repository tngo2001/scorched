import { Helmet } from "react-helmet"

export const Acres = () => {
    return (
      <div className="section dark-bg">
        <h3>It's getting hot</h3>

        <p>Instead of looking at the number of fires per year, now we're looking at the number of <em>acres burned.</em></p>

        <div className='tableauPlaceholder' id='viz1669791137335' style={{margin: 'auto'}}>
          <noscript>
            <a href='/#'>
              <img alt='How Many Acres of Land Were Burned by Wildfires Over Time?' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Sc&#47;ScorchedAcresBurned&#47;AllFires&#47;1_rss.png' style={{border: 'none'}} />
            </a>
          </noscript>
          <object className='tableauViz' style={{display: 'none'}}>
              <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
              <param name='embed_code_version' value='3' />
              <param name='site_root' value='' />
              <param name='name' value='ScorchedAcresBurned&#47;AllFires' />
              <param name='tabs' value='yes' />
              <param name='toolbar' value='yes' />
              <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Sc&#47;ScorchedAcresBurned&#47;AllFires&#47;1.png' />
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
            var divElement = document.getElementById('viz1669791137335');
            var vizElement = divElement.getElementsByTagName('object')[0];
            vizElement.style.width = '100vh';
            vizElement.style.height = '500px';
            var scriptElement = document.createElement('script');
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
            vizElement.parentNode.insertBefore(scriptElement, vizElement);
          </script>
        </Helmet>

        <div className="layoutOne">

        <p>The overall acres burned is <bold>steadly increasing</bold>. This is a scary trend because it means fires have become more <span style={{color:"#D14337"}}>intense</span> and <span style={{color:"#D14337"}}>destructive</span>.</p>
        </div>
      
      </div>);
  };

  export default Acres;