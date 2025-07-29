import React from "react";
import Link from '@docusaurus/Link';

export default function ProfileCard({image, officer, position, linkedin}) {
    return(
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
                        <div class="card__footer">
                            <Link className="button button--primary button--block" to={linkedin}>LinkedIn</Link>
                        </div>
                    </div>
                </div>
        
    )
}

