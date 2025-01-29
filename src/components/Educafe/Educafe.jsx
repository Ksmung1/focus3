import React, { useState, useRef, useEffect } from "react";
import "./Educafe.css";
import { Link } from "react-router-dom";

function Educafe() {
          const [currentSlide, setCurrentSlide] = useState(0);
          const sliderRef = useRef(null);
          const videoRefs = useRef([]);

          const slides = [
                    {
                              videoSrc: "./images/studyhall.mp4",
                              content: (
                                        <div className="educafe-pros">
                                                  <h1>Study Hall</h1>
                                                  <p>
                                                            The Study Hall is a unique space, a no-disturbance zone for self-studying and working independently. The hall is equipped with spacious cabins, power backup, ceiling fans, AC, and clean drinking water.
                                                  </p>
                                        </div>
                              ),
                    },
                    {
                              videoSrc: "./images/leisure.mp4",
                              content: (
                                        <div className="educafe-pros">
                                                  <h1>Leisure Space</h1>
                                                  <p>
                                                            The leisure area is a block for discussing, chatting, resting, relaxing, and meditation. This area has books, magazines, and newspapers for entrance and competitive examinations.
                                                  </p>
                                        </div>
                              ),
                    },
                    {
                              videoSrc: "./images/cafe.mp4",
                              content: (
                                        <div className="educafe-pros">
                                                  <h1>Cafeteria</h1>
                                                  <p>
                                                            Food for health, energy, and staying alert. The cafeteria is a self-service restaurant with healthy food, snacks, and light beverages on the counters.
                                                  </p>
                                        </div>
                              ),
                    },
          ];

          useEffect(() => {
                    videoRefs.current = videoRefs.current.slice(0, slides.length);
                    // Play the video of the current slide when the component mounts
                    playCurrentVideo(currentSlide);
          });

          const changeSlide = (slideIndex) => {
                    if (slideIndex >= 0 && slideIndex < slides.length) {
                              setCurrentSlide(slideIndex);
                              scrollToSlide(slideIndex);
                    }
          };

          const scrollToSlide = (slideIndex) => {
                    const slideWidth = sliderRef.current.offsetWidth;
                    sliderRef.current.scrollTo({
                              left: slideIndex * slideWidth,
                              behavior: "smooth",
                    });
          };

          const handleSliderScroll = () => {
                    const slideWidth = sliderRef.current.offsetWidth;
                    const scrollLeft = sliderRef.current.scrollLeft;
                    const newSlideIndex = Math.round(scrollLeft / slideWidth);
                    if (currentSlide !== newSlideIndex) {
                              setCurrentSlide(newSlideIndex);
                              playCurrentVideo(newSlideIndex);
                    }
          };

          const playCurrentVideo = (slideIndex) => {
                    // Pause all videos
                    videoRefs.current.forEach((video, index) => {
                              if (video) {
                                        try {
                                                  if (index === slideIndex) {
                                                            // Check if the video is not already playing before calling play
                                                            if (video.paused) {
                                                                      video.play();
                                                            }
                                                  } else {
                                                            video.pause();
                                                  }
                                        } catch (error) {
                                                  console.error("Video play/pause error:", error);
                                        }
                              }
                    });
          };

          return (
                    <div className="educafe">
                              <div className="heading">
                                        <h1>EDUCAFE</h1>
                                        <Link to='/focusApp'><img src="./images/diamond.gif" alt="dimonf" /></Link>
                                        <a href='/' ><img src="./images/kpop.gif" style={{ marginRight: '80px' }} alt="dimond" /></a>
                                        <a href="./images/educafe.jpg"><img src="./images/coffee-cup.gif" style={{ marginRight: '40px' }} alt="dimond" /></a>
                              </div>
                              <img src="./images/educafe-bg.jpg" alt="dimond"  />
                              <p>The perfect study environment with all the latest and modern facilities. A calm environment for aspirants.</p>
                              <p style={{ fontStyle: 'italic' }}>For those students preparing for UPSC, Regulatory-RBI, NABARD, SEBI, CA, MBA, SSC, Banking, JEE, NEET-UG & PG, NDA, CDS, School & College Exams, etc.</p>
                              <div className="educafe-slider" ref={sliderRef} onScroll={handleSliderScroll}>
                                        {slides.map((slide, index) => (
                                                  <div
                                                            key={index}
                                                            className={`educafe-slide ${currentSlide === index ? "active" : ""}`}
                                                            onClick={() => playCurrentVideo(index)}
                                                  >
                                                            <video
                                                                      ref={(video) => (videoRefs.current[index] = video)}
                                                                      src={slide.videoSrc}
                                                                      autoPlay={false}
                                                                      loop
                                                                      muted
                                                                      className="backgroundVideo"
                                                            ></video>
                                                            {slide.content}
                                                  </div>
                                        ))}
                              </div>
                              <div className="educafe-indicators">
                                        {slides.map((_, index) => (
                                                  <div
                                                            key={index}
                                                            className={`indicator ${currentSlide === index ? "active" : ""}`}
                                                            onClick={() => changeSlide(index)}
                                                  ></div>
                                        ))}
                              </div>
                              <div className="educafe-foot">
                                        <div className="contacts">
                                                  <ul>
                                                            <li><a href="https://maps.app.goo.gl/Q1V6WNUeQeTSR5oY6"><img src="./images/map.png" alt="dimond"  /></a></li>
                                                            <li><a href="https://wa.me/918974808279"><img src="./images/whatsapp.png" alt="dimond"  /></a></li>
                                                            <li><a href="https://www.instagram.com/123"><img src="./images/instagram.png" alt="dimond" /></a></li>
                                                            <li><a href="https://t.me/educafe"><img src="./images/telegram.png" alt="dimond"  /></a></li>
                                                  </ul>
                                        </div>
                              </div>
                              <div className="map"></div>
                    </div >
          );
}

export default Educafe;
