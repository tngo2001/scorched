import summaryGraph from '../graph-placeholders/summaryTrends.png';
export const Summary = () => {
    return (
      <div className="section dark-bg">
        <h3>Wildfires have been getting worse</h3>
        <p>Overall, wildfires hurt everyone. They hurt people, animals, homes, and 
          habitats, and alongside the increasing problem of climate change, wildfires have been burning 
          bigger than ever. And we are causing them.
</p>
      
        <img src={summaryGraph} alt="Summary of wildfire trends" width="50%" height="50%"/>

        <p><strong>But the situation isn't hopeless.</strong></p>
        
      </div>);
  };
  
  export default Summary;