import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import './Advertisement.css';

function Advertisements() {
          const scrollContainerRef1 = useRef(null);

          useEffect(() => {
                    // Get the reference to the scroll container
                    const scrollContainer = scrollContainerRef1.current;

                    // Set the interval to scroll every 5 seconds (5000 milliseconds)
                    const scrollInterval = 3000;

                    // Function to scroll the container
                    function scrollContainerAutomatically() {
                              // Check if there is enough space to scroll to the right
                              const isScrollingRight = scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth;

                              // If there is space, scroll to the right; otherwise, reset to the first slide
                              if (isScrollingRight) {
                                        scrollContainer.scrollLeft += scrollContainer.clientWidth;
                              } else {
                                        scrollContainer.scrollLeft = 0;
                              }
                    }

                    // Set up the interval to call the scroll function
                    const intervalId = setInterval(scrollContainerAutomatically, scrollInterval);

                    // Clear the interval when the component unmounts
                    return () => clearInterval(intervalId);
          }, []);

          return (
                    <div>
                              <h1 style={{ color: 'orange', padding: '0 10px', fontSize: '25px', fontWeight: '800', textAlign: 'left', margin: '50px 0 0', color: '#fe5a1d' }}>
                                        DEFENCE EXAM COURSE</h1>
                              <div className="scroll-container-adv" ref={scrollContainerRef1}>
                                        {/* Repeat the scroll content to create a loop */}
                                        <div className="scroll-content-adv">
                                                  <Card img='/images/NDA-focus.jpg' link='/dec'></Card>
                                        </div>
                                        <div className="scroll-content-adv">
                                                  <Card img='/images/CDS-focus.jpg' link='/dec'></Card>
                                        </div>
                                        <div className="scroll-content-adv">
                                                  <Card img='/images/CAPF-focus.jpg' link='/dec'></Card>
                                        </div>
                                        {/* Repeat the scroll content to create a loop */}
                                        <div className="scroll-content-adv">
                                                  <Card img='/images/NDA-focus.jpg' link='/dec'></Card>
                                        </div>
                                        <div className="scroll-content-adv">
                                                  <Card img='/images/CDS-focus.jpg' link='/dec'></Card>
                                        </div>
                                        <div className="scroll-content-adv">
                                                  <Card img='/images/CAPF-focus.jpg' link='/dec'></Card>
                                        </div>
                                        {/* Repeat the scroll content to create a loop */}
                                        <div className="scroll-content-adv">
                                                  <Card img='/images/NDA-focus.jpg' link='/dec'></Card>
                                        </div>
                                        <div className="scroll-content-adv">
                                                  <Card img='/images/CDS-focus.jpg' link='/dec'></Card>
                                        </div>
                                        <div className="scroll-content-adv">
                                                  <Card img='/images/CAPF-focus.jpg' link='/dec'></Card>
                                        </div>
                              </div>
                              <Link to='dec' style={{ textDecoration: 'none' }}> <button style={{ textAlign: 'center', display: 'block', margin: '0 auto', marginBottom: '50px' }}>More info</button></Link>
                    </div>
          );
}

export default Advertisements;
