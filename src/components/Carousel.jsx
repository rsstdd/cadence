// import Card from './Card';
// import CarouselDots from './CarouselDots';
import React from 'react';

export default class Carousel extends React.Component {
  render() {
    return (
      <div className="carousel">
        <div className="row">
          <div className="one columns">◀︎</div>
          {/* <Card /> */}
          <div className="one columns">▶︎</div>
        </div>
        <div className="row carousel-dots">
          {/* <CarouselDots /> */}
        </div>
      </div>
    );
  }
}
