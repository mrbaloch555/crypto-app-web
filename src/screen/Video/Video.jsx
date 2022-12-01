import React, { useRef, useState } from "react";
import "./Video.scss";
import Heading from "../../components/Heading/Heading";
import Navbar from "../../components/Navbar/Navbar";
import movie from "../../assest/movie.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import toast, { Toaster } from "react-hot-toast";
import previousArrow from "../../assest/previousArrow.png";
import nextArrow from "../../assest/nextArrow.png";
import AliceCarousel from "react-alice-carousel";
import SliderVideo from "../../components/SliderVideo/SliderVideo";

const Videos = () => {
  const ref = useRef(null);

  const videos = [
    {
      id: 0,
      video: movie
    },
    {
      id: 1,
      video: movie
    },
    {
      id: 2,
      video: movie
    }
  ]

  const [current, setCurrent] = useState(0);
  const length = videos.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function onSlideChanged(e) {
    setCurrent(e.item);
  }

  const items = videos.map((item, index) => (
    <div style={{ height: "50%" }}>
      <SliderVideo
        video={item.video}
        flag={index == current}
      />
    </div>
  ));

  return (
    <>
    <Toaster
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="video-page">
        <div className="video-page-topbar">
          <Navbar />
        </div>

        <div className="analysis-container">
          {/* Slider Section */}
          <div className="analysis-container-heading">
            <Heading text="Today's Analysis" />
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <AliceCarousel
              items={items}
              ref={ref}
              mouseTracking
              disableDotsControls
              activeIndex={current}
              dotsDisabled={true}
              disableButtonsControls
              onSlideChanged={onSlideChanged}
              responsive={{
                520: {
                  items: 1,
                },
                680: {
                  items: 2,
                },
                1024: {
                  items: 2,
                },
                1100: {
                  items: 3,
                },
              }}
              justifyContent="center"
              alignItems="center"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
            <img
              src={previousArrow}
              onClick={prevSlide}
              width={22}
              height={22}
              style={{ cursor: "pointer" }}
            />
            <img
              src={nextArrow}
              onClick={nextSlide}
              width={22}
              height={22}
              style={{ marginLeft: 10, cursor: "pointer" }}
            />
          </div>
        </div>

        {/* Remaining Cards Section */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Heading text="More from this week" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
          <div style={{ width: '30%' }}>
            {videos.map((item) => (
              <div style={{ marginTop: '10px', borderRadius: '5px', overflow: 'hidden' }}>
                <Video
                  autoPlay
                  loop
                  muted
                  controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                >
                  <source src={item.video}></source>
                </Video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
