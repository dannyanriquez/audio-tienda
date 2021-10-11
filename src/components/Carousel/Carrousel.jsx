import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const Carrousel = () => {
    return (
        <div>
           <Carousel>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src="./images/WebBannerA.jpeg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src="./images/WebBannerB.jpeg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src="./images/WebBannerC.jpeg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}
