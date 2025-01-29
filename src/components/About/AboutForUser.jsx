import React, { useEffect } from "react";
import "./About.css";
import Navbar from "../Navbar";

const AboutForUs = () => {

          useEffect(() => {
                    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                              anchor.addEventListener("click", function (e) {
                                        e.preventDefault();

                                        const sectionId = this.getAttribute("href").substring(1); // Get the target section id
                                        const section = document.getElementById(sectionId);

                                        if (section) {
                                                  const offset = section.getBoundingClientRect().top + window.scrollY - 70;
                                                  window.scrollTo({
                                                            top: offset,
                                                            behavior: "smooth",
                                                  });
                                        }
                              });
                    });
          }, []);

          return (
                    <div>
                              <Navbar />

                              <div id="About">
                                        <h1>FOCUS Academy Website Development Manual</h1>

                                        <h2>Introduction</h2>
                                        <p>Welcome to the FOCUS Academy Website Development Manual. This guide will help you create a visually appealing, user-friendly, and informative online learning platform using React. The primary focus is on creating an engaging learning experience while adhering to the design principles you've mentioned.</p>

                                        <div className="table-of-contents">
                                                  <h2>Table of Contents</h2>
                                                  <ul >
                                                            <li><a href="#section-1">1. Design and Layout</a>
                                                                      <ul className="sub-sections">
                                                                                <li><a href="#section-1-1">1.1 Black Background</a></li>
                                                                                <li><a href="#section-1-2">1.2 Minimalistic Design</a></li>
                                                                                <li><a href="#section-1-3">1.3 Typewriter Fonts</a></li>
                                                                                <li><a href="#section-1-4">1.4 Flash Card Style Contents</a></li>
                                                                      </ul>
                                                            </li>
                                                            <li><a href="#section-2">2. Functionality and Features</a>
                                                                      <ul className="sub-sections">
                                                                                <li><a href="#section-2-1">2.1 Homepage</a></li>
                                                                                <li><a href="#section-2-2">2.2 Navigation</a></li>
                                                                                <li><a href="#section-2-3">2.3 Course Pages</a></li>
                                                                                <li><a href="#section-2-4">2.4 User Profiles</a></li>
                                                                                <li><a href="#section-2-5">2.5 Note-Taking Feature</a></li>
                                                                      </ul>
                                                            </li>
                                                            <li><a href="#section-3">3. User Engagement and Productivity</a>
                                                                      <ul className="sub-sections">
                                                                                <li><a href="#section-3-1">3.1 Gamification</a></li>
                                                                                <li><a href="#section-3-2">3.2 Progress Tracking</a></li>
                                                                                <li><a href="#section-3-3">3.3 Community Interaction</a></li>
                                                                      </ul>
                                                            </li>
                                                            <li><a href="#section-4">4. Testing and Optimization</a>
                                                                      <ul className="sub-sections">
                                                                                <li><a href="#section-4-1">4.1 Cross-Browser Compatibility</a></li>
                                                                                <li><a href="#section-4-2">4.2 Mobile Responsiveness</a></li>
                                                                                <li><a href="#section-4-3">4.3 Speed Optimization</a></li>
                                                                      </ul>
                                                            </li>
                                                            <li><a href="#section-conclusion">Conclusion</a></li>
                                                  </ul>
                                        </div>

                                        <h2 id="section-1">1. Design and Layout</h2>
                                        <div className="sub-sections">

                                                  <h3 id="section-1-1">1.1 Black Background</h3>
                                                  <ul>
                                                            <li>Use a dark, elegant black background to create a sleek and immersive learning environment.</li>
                                                  </ul>
                                                  <h3 id="section-1-2">1.2 Minimalistic Design</h3>
                                                  <ul>
                                                            <li>Keep the design minimal, focusing on content presentation. Use clean lines and subtle elements to enhance user focus.</li>
                                                  </ul>

                                                  <h3 id="section-1-3">1.3 Typewriter Fonts</h3>
                                                  <ul>
                                                            <li>Select typewriter-style fonts that evoke a sense of focus and learning.</li>
                                                  </ul>

                                                  <h3 id="section-1-4">1.4 Flash Card Style Contents</h3>
                                                  <ul>
                                                            <li>Organize content in a flash card style, making it visually engaging and easy to digest.</li>
                                                  </ul>
                                        </div>
                                        <h2 id="section-2">2. Functionality and Features</h2>
                                        <div className="sub-sections">

                                                  <h3 id="section-2-1">2.1 Homepage</h3>
                                                  <ul>
                                                            <li>Create an appealing homepage that introduces users to your academy and highlights the available courses.</li>
                                                  </ul>

                                                  <h3 id="section-2-2">2.2 Navigation</h3>
                                                  <ul>
                                                            <li>Implement an intuitive navigation system for easy course selection and site exploration.</li>
                                                  </ul>

                                                  <h3 id="section-2-3">2.3 Course Pages</h3>
                                                  <ul>
                                                            <li>Develop dedicated pages for each course, presenting course materials in flash card style and providing information on instructors, syllabus, and prerequisites.</li>
                                                  </ul>

                                                  <h3 id="section-2-4">2.4 User Profiles</h3>
                                                  <ul>
                                                            <li>Allow users to create profiles, track their progress, and customize their learning experience.</li>
                                                  </ul>

                                                  <h3 id="section-2-5">2.5 Note-Taking Feature</h3>
                                                  <ul>
                                                            <li>Integrate a note-taking feature that enables users to take and organize course-related notes for better learning retention.</li>
                                                  </ul>
                                        </div>
                                        <h2 id="section-3">3. User Engagement and Productivity</h2>
                                        <div className="sub-sections">

                                                  <h3 id="section-3-1">3.1 Gamification</h3>
                                                  <ul>
                                                            <li>Add gamification elements like badges, achievements, and leaderboards to motivate users and reward their progress.</li>
                                                  </ul>

                                                  <h3 id="section-3-2">3.2 Progress Tracking</h3>
                                                  <ul>
                                                            <li>Provide tools for users to track their course progress, including completion percentages and time spent on courses.</li>
                                                  </ul>

                                                  <h3 id="section-3-3">3.3 Community Interaction</h3>
                                                  <ul>
                                                            <li>Implement a discussion forum or chat feature to encourage community interaction and collaborative learning.</li>
                                                  </ul>
                                        </div>
                                        <h2 id="section-4">4. Testing and Optimization</h2>
                                        <div className="sub-sections">

                                                  <h3 id="section-4-1">4.1 Cross-Browser Compatibility</h3>
                                                  <ul>
                                                            <li>Test the website on various browsers to ensure consistent functionality and appearance.</li>
                                                  </ul>

                                                  <h3 id="section-4-2">4.2 Mobile Responsiveness</h3>
                                                  <ul>
                                                            <li>Optimize the design and layout for mobile devices, ensuring a seamless experience for all users.</li>
                                                  </ul>

                                                  <h3 id="section-4-3">4.3 Speed Optimization</h3>
                                                  <ul>
                                                            <li>Optimize the website's performance to reduce loading times and provide a smooth learning experience.</li>
                                                  </ul>
                                        </div>
                                        <h2 id="section-conclusion">Conclusion </h2>

                                        <p>
                                                  The <span style={{ fontWeight: '800' }}>F<span style={{ color: 'red' }}>O</span>CUS </span>Academy Website Development Manual outlines the key elements and features required to create the best online learning platform using React. By following these guidelines, you can build an engaging, user-friendly, and informative website that fosters productivity and focus for your learners. Regularly update and improve your platform based on user feedback to enhance the learning experience further.
                                        </p>

                              </div>
                    </div>
          )
}

export default AboutForUs;