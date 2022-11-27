import people from '../graph-placeholders/peopleAffected.png';
import costs from '../graph-placeholders/costComparison.png';

export const Impact = () => {
    return (
      <div className="section light-bg">
        <h3>The impact</h3>

        <p><strong>ON NATURE</strong></p>
       
        <p>Millions of animals are <span style={{color:"#D14337"}}>killed</span> or <span style={{color:"#D14337"}}>burned</span> while trying to escape fires.</p>
        <p>Even after the fire burns out, wildfires cause <span style={{color:"#D14337"}}>habitat destruction</span> and <span style={{color:"#D14337"}}>fragmentation</span>.</p>
        <p>It can take up to <span style={{color:"#D14337"}}>## years</span> for a habitat to grow back after a wildfire.</p>
      
        <p><strong>ON PEOPLE</strong></p>

        <img src={people} alt="The number of people hurt by wildfires" width="30%" height="40%"/>
        <img src={costs} alt="The costs of wildfires" width="40%" height="50%"/>
      </div>);
  };
  
  export default Impact;