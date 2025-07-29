import React from "react";
import ProfileCard from "./ProfileCard";
import officers_data from '@site/static/jsonfolders/officers.json'; 

export default function ProfileGrid() {
    return(
            <div class="container team-container">
                <h1 class="team-title">Meet Our ACM Board</h1>
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