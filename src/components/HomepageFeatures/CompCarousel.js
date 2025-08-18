import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CompData from '@site/static/jsonfolders/competitions.json'

/**
 * 
 * @returns A carousel containing posters for past ACM hackathons and contests
 * Made using the react-slick library: https://react-slick.neostack.com/
 * CompData is a JSON file for hackathon photos, which can be found in static/acm_hackathons folder
 * 
 * Date created: August 16th 2025 
 * Last updated: August 17th 2025
 */
export default function CompCarousel() {
    // Set up the carousel before adding items to it
    const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToDisplay: 1,
   };
      
   return(
    <div className="slide-container">
        <h1 className="comp-title">Past Competitions</h1>
        <Slider {...settings}>
            {/* Map objects from CompData JSON file into the carousel  */}
            {CompData.map((poster) => {
                return (
                    <img key={poster.id} src={poster.image} alt={poster.alt} className="slide-img"/>
                )
            })}
        
        </Slider>

    </div>
   );
}