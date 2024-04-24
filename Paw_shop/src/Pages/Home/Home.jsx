import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import Dog1 from "../../assets/animal/dog1.jpg";
import Dog2 from "../../assets/animal/dog2.jpg";
import Dog3 from "../../assets/animal/dog3.jpg";
import Dog4 from "../../assets/animal/dog4.jpg";
import Dog5 from "../../assets/animal/dog5.jpg";
import DogsVideo from "../../assets/animal/dogs.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Home.css";

const position = [51.505, -0.09];

const Home = ({}) => {
  return (
    <div style={{ scrollbarWidth: "none" }}>
      <div id="home">
        <div className="relative hidden md:block">
          <ReactPlayer
            width="100%"
            height="100%"
            url={DogsVideo}
            controls={false}
            playing={true}
            loop={true}
            light={<img src={Dog3} alt="Thumbnail" className="h-full w-full" />}
          />
          <div className="absolute top-[50px] md:left-[30%] l:left-[40%] xl:left-[45%] text-slate-100">
            <p className="text-6xl">Go To Services</p>
            <p className="text-center mt-5">
              <Link to="/service" className="text-6xl">
                <i className="fas fa-chevron-down"></i>
              </Link>
            </p>
          </div>
        </div>

        <div className="md:hidden">
          <Carousel
            interval={2000}
            infiniteLoop
            autoPlay
            showStatus={false}
            stopOnHover
            dynamicHeight={false}
            showThumbs={false}
          >
            <img src={Dog1} />
            <img src={Dog2} />
            <img src={Dog3} />
            <img src={Dog4} />
            <img src={Dog5} />
          </Carousel>
        </div>
      </div>
      <div className="card bg-yellow-400 shadow-xl m-2 mt-3" id="service">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Service</h1>
          <div className="flex items-center justify-evenly">
            <div className="stat">
              <div className="stat-title">Unique Clients</div>
              <div className="stat-value">100 +</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
            <div className="stat border-l-4">
              <div className="stat-title">Total Pets</div>
              <div className="stat-value">300 +</div>
              <div className="stat-desc">25% more than last month</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-xl m-3 mt-3" id="about">
        <div className="bg-base-200">
          <div className="p-4">
            <h1 className="text-5xl font-bold mb-2">About</h1>
            <ul className="list-decimal">
              <li>Tailored treatments cater to your pet's needs.</li>
              <li>Our spa offers aserene environment with soothing scents.</li>
              <li>
                Experienced professionals provide expert grooming and care.
              </li>
              <li>Each pet receives individualized attention and pampering.</li>
              <li>
                Paw Season Spa ensures ultimate relaxation for your furry
                friend.
              </li>
            </ul>
            <div className="text-end">
              <Link className="btn btn-primary mt-4 text-center" to="/service">
                Check Price
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="card shadow-xl m-3 mt-3 bg-base-200" id="contact">
          <div className="p-4">
            <h1 className="text-5xl font-bold mb-2">Contact</h1>
            <div className="space-y-3 items-center">
              <input
                type="text"
                placeholder="Enter Full Name"
                className="input input-bordered w-full max-w-s"
              />

              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered w-full max-w-s"
              />

              <textarea
                className="textarea textarea-bordered w-full max-w-s"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="text-end">
              <a
                className="btn btn-primary mt-4 text-center"
                href="mailto:ashutoshsarangi95@gmail.com?cc=someoneelse@example.com&subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
        <div className="card shadow-xl m-3 mt-3 bg-base-200" id="contact_map">
          <MapContainer
            center={[34.67430911682202, 32.92095258631397]}
            zoom={15}
            scrollWheelZoom={true}
            style={{ height: "400px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[34.67430911682202, 32.92095258631397]}>
              <Popup>
                Paw Seasons Spa
                <br /> Erimi, Limassole.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {/* <div id="map" style={{ height: "300px" }}></div> */}

      <div className="card shadow-xl m-3 bg-base-200 " id="footer">
        <div className="text-center">Made With ❤ By Subha</div>
      </div>
    </div>
  );
};

export default Home;
