import React from "react";
import Card from "./Card";
import "./Milestone.css";
import Clock from "./Clock";
import ReactCalendar from "./ReactCalendar";
import Quotes from "../DailyQuotes/Quote";
function MilestoneProject() {

          const gradientStyle = {
                    color: "#fff", // Olive green color
          };

          return (
                    <div className="Milestone-projects" >

                              <h1 className="milestone-head" style={gradientStyle}>Think Tank Town</h1>
                              <div className="Time">
                                        <Clock></Clock>
                                        <ReactCalendar />
                              </div>
                              <div className="quote">
                                        <Quotes></Quotes>
                              </div>
                              <div className="Milestone-project">
                                        <Card img="images/graduation-hat.png" link='/focusApp' topic="Focus" SubTopic="Exam Boosters" style='yellow'></Card>
                                        <Card img='images/bulb.png' link='/' topic='mindfuel' SubTopic='Self Improvement' style="skyblue"></Card>
                                        <Card img='images/hand.png' link='' topic='HVS' SubTopic="Skill Up" style='silver'></Card>
                                        <Card img='images/plus.png' link='' topic='lifeline' SubTopic='Health and Fitness' style='Lightgreen'></Card>
                              </div>
                              <div className="end">
                                        <h1 style={{ textAlign: 'center', fontSize: '20px', fontFamily: 'sans-serif', marginTop: '50px' }}>Made with ❤️ by <span style={{ color: 'blue', fontSize: '20px', fontFamily: 'cursive' }}>Nextjourney</span></h1>
                              </div>
                    </div >
          )
}

export default MilestoneProject;