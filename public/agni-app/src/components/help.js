import smokeyBear from '../media/smokeyBear.jpeg';

export const Help = () => {
    return (
      <div className="section">
        <h3>How to help</h3>
       
<div className="layoutOne">
  <p>
      <li>New technology and <a href="https://www.bosch.com/stories/early-forest-fire-detection-sensors/#:~:text=The%20Bosch%20environmental%20sensor%20installed,carbon%20monoxide%2C%20and%20most%20hydrocarbons.">sensors</a> are being developed to help catch wildfires earlier and stop them 
      from spreading.</li>

      <li>Forest services are teaming up with indigenous groups to practice prescribed burns</li>
      </p>
      

       </div>
      
    <p>As an individual, you can</p>

      <div className="layoutOne">

        <p> 

        <li>be mindful about campfires, such as looking up whether there is a <a href="https://www.dnr.wa.gov/burn-restrictions">burn ban</a> in your 
      area because of dry conditions and making sure fires are <a href="https://smokeybear.com/en/prevention-how-tos/campfire-safety">put out properly</a></li>


      <li><a href="https://smokeybear.com/en/prevention-how-tos/equipment-use-and-maintenance">maintain machinery</a> to prevent sparks</li>
      
      <li>donate to wildfire relief funds, such as the <a href="https://www.uwpnw.org/wildfires">Pacific Northwest Wildfire Relief and Recovery Fund</a>.</li> 

      <li>help limit climate change to help the 
      situation from getting even worse</li>

      <div id="smokeyBear">

      <img src={smokeyBear} alt="" width="20%" height="20%"/>

      </div>




        </p>



      </div>
      


      </div>);
  };
  
  export default Help;