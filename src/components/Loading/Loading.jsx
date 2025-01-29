import React from "react";
import "./Loading.css";

function Loading() {
          return (
                    <div>

                              <div className="loading-screen">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                              </div>
                              <h3 style={{ margin: '100px 0', textAlign: 'center' }}>Loading...</h3>
                    </div>
          )
}

export default Loading;