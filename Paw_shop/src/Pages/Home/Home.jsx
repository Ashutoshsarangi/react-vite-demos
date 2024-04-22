import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Dog1 from "../../assets/animal/dog1.jpg";
import Dog2 from "../../assets/animal/dog2.jpg";
import Dog3 from "../../assets/animal/dog3.jpg";
import Dog4 from "../../assets/animal/dog4.jpg";
import Dog5 from "../../assets/animal/dog5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = ({}) => {
  return (
    <div style={{ scrollbarWidth: "none" }}>
      <Carousel
        interval={2000}
        infiniteLoop
        autoPlay
        showStatus={false}
        stopOnHover
        dynamicHeight={false}
        showThumbs={false}
      >
        <div>
          <img src={Dog1} height={500} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={Dog2} height={500} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Dog3} height={500} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Dog4} height={500} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Dog5} height={500} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <Link to="/about">About</Link>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <i class="fa-solid fa-cart-shopping"></i>
      <Carousel
        interval={2000}
        infiniteLoop
        autoPlay
        showStatus={false}
        stopOnHover
        dynamicHeight={false}
        showThumbs={false}
      >
        <div>
          <img src={Dog1} height={500} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={Dog2} height={500} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Dog3} height={500} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Dog4} height={500} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Dog5} height={500} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
