import wildfireFeedback from '../media/wildfireFeedback.png';
export const AcresExplain = () => {
    return (
      <div className="section">

        <h3>Why are wildfires becoming more intense?</h3>
       
        <p>As climate change increases temperatures and droughts, it makes it easier for wildfires to start and spread.</p>
        <p>In turn, burning forests release more climate-changing gases that further the human-caused climate change.</p>

        <img src={wildfireFeedback} alt="" width="60%" height="60%"/>

      </div>);
  };
  
  export default AcresExplain;