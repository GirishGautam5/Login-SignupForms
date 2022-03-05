import React from 'react'
import "./dashstyles.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
const Dashboard = (props)=>{
    return(
        <div>
            <div className='welcome'>
            <h2>Welcome to VISIONIAS</h2>
            </div>
        {/* <div className='dash'>
            <h2>Welcome to Home Screen</h2>
            <img className='img' src='https://d19k0hz679a7ts.cloudfront.net/banner/achievement_2019_1.png' alt='toppers list' />
        </div> */}
        <div className="Carousel-area">
        <Carousel showArrows autoPlay showThumbs={false}>
          <div>
            <img
              src="https://d19k0hz679a7ts.cloudfront.net/misc/lmh4udo0plk01632592325.jpg"
              alt="Carousel 1"
            />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img
              src="https://d19k0hz679a7ts.cloudfront.net/misc/n2561jro9jm01645624043.jpg"
              alt="Carousel 2"
            />
            {/* <p className=" second-carousal" >Legend 2</p> */}
          </div>
          <div>
            <img
              src="https://d19k0hz679a7ts.cloudfront.net/misc/n4l0937f1nk01643997907.jpg"
              alt="Carousel 3"
            />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>
      </div>
    )
}
export default Dashboard