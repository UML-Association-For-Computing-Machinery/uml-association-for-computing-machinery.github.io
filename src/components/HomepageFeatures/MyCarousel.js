import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyCarousel({data}) {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToDisplay: 3,
   };
   
   
   return(
    <Slider {...settings}>
        {data.map((item) => (

                <div className={"card infocard"}>
                    <div className="card__header text--center">
                        <h3>{item.title}</h3>
                    </div>
                    <div className={"card__body text--center"}>
                        <p>{item.description}</p>
                    </div>
                    <div className={"card__footer"}>
                        <Link className="button button--secondary button--block" to={item.buttonLink}>{item.buttonTitle}</Link>
                    </div>
                </div>

             ))}
    </Slider>
    
    
   );
}