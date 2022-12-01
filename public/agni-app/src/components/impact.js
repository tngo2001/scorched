import people from '../graph-placeholders/peopleAffected.png';
import costs from '../graph-placeholders/costComparison.png';
import fireCigarette from '../media/fireCigarette.png';

export const Impact = () => {
    return (
      <div className="section dark-bg">
        <h3>The impact</h3>

        <p>Wildfires are costly</p>

        <p>Average supression cost: $2,862,884,200</p>
        <p>Rehabilitation cost/property damage: 16.5 billion</p>
        <p>Insurance losses: 8.69 billion</p>
        <p>Economic losses: 20.36 billion</p>

        
        <p><strong>Health Effects</strong></p>
        
        <p>Wildfires produce smoke that has a fine particulate matter. When inhaled, it gets trapped in lungs, can enter the bloodstream leads to respiratory, cardiovascular problems</p>

        <p>Bad air quality of _____ is equivalent to smoking 7 cigarettes a day</p>
        <img src={fireCigarette} alt="" width="40%" height="40%"/>



        <p>Hard to quantify the full extent of wildfires' impact on health. Estimated that wildfires across the world cause about 30,000 premature deaths every year</p>



        <p><strong>ON NATURE</strong></p>
       
        <p>Millions of animals are <span style={{color:"#D14337"}}>killed</span> or <span style={{color:"#D14337"}}>burned</span> while trying to escape fires.</p>
        <p>Even after the fire burns out, wildfires cause <span style={{color:"#D14337"}}>habitat destruction</span> and <span style={{color:"#D14337"}}>fragmentation</span>.</p>
        <p>It can take up to <span style={{color:"#D14337"}}>## years</span> for a habitat to grow back after a wildfire.</p>
      

        <img src={people} alt="The number of people hurt by wildfires" width="30%" height="40%"/>
        <img src={costs} alt="The costs of wildfires" width="40%" height="50%"/>
      </div>);
  };
  
  export default Impact;