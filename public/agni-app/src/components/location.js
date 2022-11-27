import firesMap from '../graph-placeholders/firesMap.png';

export const Location = () => {
    return (
      <div className="section dark-bg">
        <h3>Fires, fires everywhere</h3>

        <p>Which areas are most affected by wildfires?</p>

        <img src={firesMap} alt="Contiguous US Map colored by severity of fires" width="70%" height="70%"/>
       
      </div>);
  };
  
  export default Location;