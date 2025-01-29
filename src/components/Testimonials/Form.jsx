import React from "react";
import "./Testimonials.css"

function Form(props) {
          return (
                    <div className="Testimonials">
                              <div className="testimonials">
                                        <div className="testis">
                                                  <div className="img-container">
                                                            <img src={props.img} alt="dimond" />
                                                  </div>
                                                  <div className="testimonial-details">
                                                            <div className="personal">
                                                                      <p>{props.name}</p>
                                                            </div>
                                                            <div className="general">
                                                                      <p id="profession">{props.profession}</p>
                                                                      <p id="rating">{props.rating}</p>

                                                            </div>
                                                  </div>

                                        </div>
                                        <p>{props.comment}</p>

                              </div>
                    </div>
          )
}

export default Form;