import React from "react";
import { Link } from "react-router-dom";
import "./Magazines.css"

function Magazines() {
          return (
                    <div className="magazines">
                              <h1>Choose The Type of Magazines</h1>
                              <ul>
                                        <Link style={{ textDecoration: 'none' }} to='/soon'><p>Yojana</p></Link>
                                        <Link style={{ textDecoration: 'none' }} to='/soon'><p>Kurukshetra</p></Link>

                              </ul>
                              <button style={{ margin: '100px 10px', textAlign: "center" }} onClick={() => { window.location.href = "/" }}>GO Back</button>

                    </div >
          )
}

export default Magazines;