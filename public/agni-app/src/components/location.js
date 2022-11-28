import firesMap from '../graph-placeholders/firesMap.png';

export const Location = () => {
    return (
      <div className="section dark-bg">
        <h3>Fires, fires everywhere</h3>

        <p>Which areas are most affected by wildfires?</p>
        <img src={firesMap} alt="Contiguous US Map colored by severity of fires" width="70%" height="70%"/>

        {/*<div className='tableauPlaceholder' id='viz1669606140332' style={{position: 'relative'}}>
          <noscript>
            <a href='/#'>
              <img alt='Which States Are Most Affected by Wildfires?' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;7C&#47;7CNN6FNKB&#47;1_rss.png' style={{border: 'none'}} />
            </a>
          </noscript>
          <object className='tableauViz' style={{display: 'none'}}>
              <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
              <param name='embed_code_version' value='3' />
              <param name='path' value='shared&#47;7CNN6FNKB' />
              <param name='toolbar' value='yes' />
              <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;7C&#47;7CNN6FNKB&#47;1.png' />
              <param name='animate_transition' value='yes' />
              <param name='display_static_image' value='yes' />
              <param name='display_spinner' value='yes' />
              <param name='display_overlay' value='yes' />
              <param name='display_count' value='yes' />
              <param name='language' value='en-US' />
          </object>
        </div>

        <script type='text/javascript'>
          var divElement = document.getElementById('viz1669606140332');
          var vizElement = divElement.getElementsByTagName('object')[0];
          vizElement.style.width='100%';
          vizElement.style.height=(divElement.offsetWidth*0.75) + 'px';
          var scriptElement = document.createElement('script');
          scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
          vizElement.parentNode.insertBefore(scriptElement, vizElement);
        </script>*/}
      </div>);
  };

  export default Location;