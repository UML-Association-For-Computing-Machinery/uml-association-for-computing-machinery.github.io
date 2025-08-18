import React from "react";
import Link from '@docusaurus/Link';

/**
 * 
 * @param {*} image eboard officer's photo
 * @param {*} officer eboard officer's name
 * @param {*} position eboard officer's position 
 * @param {*} linkedin eboard officer's linkedin profile 
 * (this feature was commented out for safety reasons, it's your choice to keep it or get rid of it) 
 * @returns A card containing information about each eboard officer
 * 
 * Made using Infima, a library that comes with Docusaurus: https://infima.dev/ 
 * Card component: https://infima.dev/docs/components/card 
 * Grid component: https://infima.dev/docs/layout/grid
 * 
 * Date created: July 28th 2025 
 */
export default function ProfileCard({image, officer, position, linkedin}) {
    return(
         // Each card takes up a width of 3 per row
         <div className="col col--3">
                    <div className="card boardcard">
                        <div className="card__image">
                            <img className="team-image" src={image} alt="acm officer"></img>
                        </div>
                        <div className="card__header text--center">
                            <h2>{officer}</h2>
                        </div>
                        <div className="card__body text--center"> 
                            <p className="board_position">{position}</p>
                        </div>
                        {/* <div class="card__footer">
                            <Link className="button button--primary button--block" to={linkedin}>LinkedIn</Link>
                        </div> */}
                    </div>
                </div>
        
    )
}

