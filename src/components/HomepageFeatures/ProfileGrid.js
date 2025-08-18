import React from "react";
import ProfileCard from "./ProfileCard";
import officers_data from '@site/static/jsonfolders/officers.json'; 

/**
 * 
 * @returns A grid containing all of the eboard officers and their names
 * 
 * Made using the Grid component from Infima: https://infima.dev/docs/layout/grid
 *
 * Date created: July 28th 2025 
 * Last modified: August 17th 2025
 */
export default function ProfileGrid() {
    return(
            // title, followed by officer information mapped onto a separate card
            <div class="container team-container">
                <h1 class="team-title">Meet Our ACM Board</h1>
            
            {/* Map objects from officers_data file into the grid as cards */}
            <div class="row">
                {officers_data.map((card, idx) => {
                    return(
                        <ProfileCard key={idx} image={card.image} officer={card.officer} position={card.position} linkedin={card.linkedin}/>
                    )
                }
                )}   
            </div>
        </div>
       
       
    )
}