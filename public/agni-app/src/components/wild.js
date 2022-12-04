import numFiresBubble from '../graph-placeholders/numFires-bubble-byCause.png';
import { Helmet } from "react-helmet"

export const Wild = () => {
    return (
      <div className="section">
        <h3>Wildfires are not <em>wild</em></h3>

        <p>Let's take a closer look at the number of fires by cause.</p>

        <div className='tableauPlaceholder' id='viz1670117970810' style={{position: 'relative'}}>
  <noscript>
    <a href='/#'>
      <img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;co&#47;count_of_fires_by_cause&#47;Dashboard1&#47;1_rss.png' style={{border: 'none'}} />
    </a>
  </noscript>
  <object className='tableauViz' style={{display:'none'}}>
    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
    <param name='embed_code_version' value='3' />
    <param name='site_root' value='' />
    <param name='name' value='count_of_fires_by_cause&#47;Dashboard1' />
    <param name='tabs' value='no' />
    <param name='toolbar' value='yes' />
    <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;co&#47;count_of_fires_by_cause&#47;Dashboard1&#47;1.png' />
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
  var divElement = document.getElementById('viz1670117970810');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.width = '130vh';
  vizElement.style.height = '100vh';
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>
</Helmet>

        {/* <img src={numFiresBubble} alt="Number of fires by cause" width="30%" height="70%"/> */}

        <p>Not only is the <span style={{color:"#D14337"}}>total number</span> growing over time, but the number of <span style={{color:"#D14337"}}>human-caused</span> fires makes up an increasing proportion of those fires.</p>

       
      </div>);
  };
  
  export default Wild;