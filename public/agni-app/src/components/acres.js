import numAcresGraph from '../graph-placeholders/numAcres-vs-year.png';

export const Acres = () => {
    return (
      <div className="section dark-bg">
        <h3>It's getting hot</h3>

        <p>Although the number of fires per year has stayed relatively the same, the number of acres burned has not.</p>

        <img src={numAcresGraph} alt="Number of acres over time" width="60%" height="60%"/>

        <p>Fires have become more <span style={{color:"#D14337"}}>intense</span> and <span style={{color:"#D14337"}}>destructive</span>.</p>

    
      </div>);
  };
  
  export default Acres;