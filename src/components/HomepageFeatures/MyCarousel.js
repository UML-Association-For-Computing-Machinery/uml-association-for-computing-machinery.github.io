import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PosterData from '@site/static/jsonfolders/posters.json'; 

/**
 * 
 * @returns A carousel containing posters for ACM meetings held between Fall 2019 and Spring 2025
 * CompData is a JSON file for Poster photos, which can be found in static/acm_posters folder
 * 
 * Made using the react-slick library: https://react-slick.neostack.com/
 * 
 * Date created: August 8th 2025 
 */
export default function MyCarousel() {
    {/*Set the properties of the carousel before loading items into it */}
    const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToDisplay: 1,
   };
   
   
   return(
    <div className="slide-container">
        <h1 className="meetings-title">Past Meetings</h1>
        <Slider {...settings}>
            {/* Map objects from PosterData JSON file into the carousel  */}
            {PosterData.map((poster) => {
                return (
                    <img key={poster.id} src={poster.image} alt={poster.alt} className="slide-img"/>
                )
            })}
        
        </Slider>

    </div>
    
    
    
    
    
   );
}