import numFiresBubble from '../graph-placeholders/numFires-bubble-byCause.png';

export const Wild = () => {
    return (
      <div className="section light-bg">
        <h3>Wildfires are not <em>wild</em></h3>

        <p>Let's take a closer look at the number of fires by cause.</p>

        <img src={numFiresBubble} alt="Number of fires by cause" width="30%" height="70%"/>

        <p>Not only is the <span style={{color:"#D14337"}}>total number</span> growing over time, but the number of <span style={{color:"#D14337"}}>human-caused</span> fires makes up an increasing proportion of those fires.</p>

       
      </div>);
  };
  
  export default Wild;