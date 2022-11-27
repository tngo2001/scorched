import numFiresGraph from '../graph-placeholders/numFires-vs-year.png';

export const Context = () => {
    return (
      <div className="section light-bg">
        <h3>Overview</h3>

        <p>The number of wildfires per year has been relatively constant...</p>

        <img src={numFiresGraph} alt="Number of fires over time" width="70%" height="60%"/>

        <p>...so why does it feel like wildfires appear on the news <span style={{color:"#D14337"}}>more and more</span> in the past few years?</p>

        <p><strong>Let's smoke out the data.</strong></p>
        {/* What if we made that text a button that scrolled to the next section? */}

        <p> Yet, why does it feel like we've seen wildfires on the news more and more in the past few years?</p>

        <p>Let's smoke out the data</p>




       
      </div>);
  };
  
  export default Context;