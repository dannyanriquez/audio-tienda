import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import BannerA from '../../assets/images/WebBannerA.jpeg'
import BannerB from '../../assets/images/WebBannerB.jpeg'
import BannerC from '../../assets/images/WebBannerC.jpeg'

export const Carrousel = () => {
    return (
        <div>
           <Carousel>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src= {BannerA}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src={BannerB}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src={BannerC}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}
