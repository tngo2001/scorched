import people from '../graph-placeholders/peopleAffected.png';
import costs from '../graph-placeholders/costComparison.png';
import fireCigarette from '../media/fireCigarette.png';

export const Impact = () => {
    return (
      <div className="section dark-bg">
        <h3>Wildfires are costly</h3>

          <img src={costs} alt="The costs of wildfires" width="40%" height="50%"/>

        <p><strong>Health Effects</strong></p>
        
      
        <p>For individuals, wildfires can have devastating effects on their health. Not many people die in the actual fire each year, but an estimated number of 30,000 people die prematurely in the world from health complications due to the fires.
           Usually, it’s from the smoke, which is fine particulate matter that gets trapped in the lungs and leads to respiratory and cardiovascular problems. For comparison, an Air Quality Index of 150 is equivalent to smoking seven cigarettes a day.
            This year, Seattle hit an all-time record of almost twice that.
</p>
        <img src={fireCigarette} alt="" width="40%" height="40%"/>


        <p><strong>Impact on wildlife</strong></p>
       
       <p>Natural wildfires actually benefit wildlife by increasing biodiversity. However, too many frequent and intense fires can result in loss of
         habitats and food sources, forced migration, allow invasive species to move into burned areas before native flora grow, and cause flooding and erosion.</p>

         <p>Even after the fires burn out, huge areas of habitats are completely destroyed or end up fragmented. It can take up to 80 years for a habitat to fully recover after a wildfire.

</p>
      
      
      </div>);
  };
  
  export default Impact;