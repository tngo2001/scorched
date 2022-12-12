import wildfireFeedback from '../media/wildfireFeedback.png';
export const AcresExplain = () => {
    return (
      <div className="section">

        <h3>Why are wildfires becoming more intense?</h3>
       
       <div className='layoutOne'>
        <p>As climate change increases temperatures and leads to droughts, it makes it easier for wildfires to start and spread.</p>
        <p>In turn, those burning forests release more climate-changing gases that only further climate change.</p>

        </div>
        <img src={wildfireFeedback} alt="" width="60%" height="60%"/>

        <p>It's a cycle of destruction.</p>

      </div>);
  };
  
  export default AcresExplain;