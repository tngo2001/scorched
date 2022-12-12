import costs from '../graph-placeholders/costComparison.png';
import fireCigarette from '../media/fireCigarette.png';

export const Impact = () => {
    return (
      <div className="section dark-bg">
        <h3>Wildfires are costly</h3>

          <img src={costs} alt="The costs of wildfires" width="40%" height="50%"/>

        <p><strong>Health Effects</strong></p>

        <div className='layoutOne'>
        
      
        <p>For individuals, wildfires can have devastating effects on their health. Not many people die in the actual fire each year, but an estimated number of <bold>30,000 people</bold> die prematurely in the world from health complications due to the fires.
           Usually, it’s from the smoke, which is fine particulate matter that gets trapped in the lungs and leads to respiratory and cardiovascular problems. For comparison, an Air Quality Index of 150 is equivalent to smoking seven cigarettes a day.
            This year, Seattle hit an all-time record of almost twice that.
        </p>
        </div>
        <img src={fireCigarette} alt="" width="40%" height="40%"/>


        <p><strong>Impact on wildlife</strong></p>

<div className='layoutOne'>

      
       
       <p>Natural wildfires can actually benefit wildlife by increasing biodiversity once a habitat recovers. However, too many frequent and intense fires can result in loss of habitats and food sources, forced migration, an opening for invasive species to move in before native flora grow, and flooding and erosion.</p>

         <p>Even after the fires burn out, huge areas of habitats are completely destroyed or end up fragmented. It can take up to <bold>80 years</bold> for a habitat to fully recover after a wildfire.

</p>

</div>
      
      
      </div>);
  };
  
  export default Impact;