import summaryGraph from '../graph-placeholders/summaryTrends.png';
export const Summary = () => {
    return (
      <div className="section dark-bg">
        <h3>Wildfires have been getting worse</h3>
        <p>They hurt people. They hurt animals. They hurt homes and habitats.</p>
        <p>Alongside global warming and drier conditions, wildfires are burning bigger than ever.</p>
        <p><strong><span style={{color:"#D14337"}}>We are causing more and more of them.</span></strong></p>
        
        <img src={summaryGraph} alt="Summary of wildfire trends" width="70%" height="60%"/>

        <p><strong>But the situation isn't hopeless.</strong></p>
        {/* What if we made that text a button that scrolled to the next section? */}
        
      </div>);
  };
  
  export default Summary;