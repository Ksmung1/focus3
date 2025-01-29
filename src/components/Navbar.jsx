import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
          const [isActive, setIsActive] = useState(false);

          const toggleMenu = () => {
                    setIsActive(!isActive);
          };

          const closeMenu = () => {
                    setIsActive(false);
          };

          const navClass = isActive ? "navbar-links active" : "navbar-links";

          return (
                    <div id="Navbar">
                              <nav className="navbar">
  {/* eslint-disable-line jsx-a11y/anchor-is-valid */}                                        <a href="#" className="toggle-button" onClick={toggleMenu}>
                                                  <span className="bar"></span>
                                                  <span className="bar"></span>
                                                  <span className="bar"></span>
                                        </a>
                                        <div className={navClass}>
                                                  <ul>
                                                            <button style={{ fontSize: '27px', cursor: 'pointer', maxWidth: '40px', minHeight: '40px' }} onClick={closeMenu}>x</button>
                                                            <p></p>
                                                            <p><input type="text" placeholder="Search" style={{ backgroundColor: 'black', width: '200px', border:'1px solid white' }} /></p>

                                                            <li><Link to="/">Home</Link></li>
                                                            <li><Link to="/upExams">Upcoming Exams</Link></li>
                                                            <li><Link to="/ncert">NCERT</Link></li>
                                                            <li><Link to="/currentAffairs">Current Affairs</Link></li>
                                                            <li><Link to="/news">Newspaper</Link></li>
                                                            <li><Link to="/soon">PIB</Link></li>
                                                            <li><Link to="/magazines">Magazines</Link></li>
                                                            <li><Link to="/">General Awareness</Link></li>
                                                            <li><Link to="/">Career Guidance</Link></li>
                                                            <li><Link to="/ab">About</Link></li>
                                                            <li><a href="tel:89748 08279 ">Contact</a></li>

                                                  </ul>
                                        </div>
                              </nav >
                              {isActive && <div className="overlay" onClick={closeMenu}></div>
                              }
                    </div >
          );
}

export default Navbar;
