import React from "react";
import "./CurrentAffairs.css"
import Card from "./Card";

function CA() {
          return (
                    <div className="CA" style={{
                              margin: '20px', textAlign: 'center'
                    }}>
                              <h1 style={{
                                        textAlign: 'center',
                              }}>Choose Type of Current Affairs</h1>
                              <div className="CA-div">
                                        <Card link='/rhauIAS' h1="Rhau's IAS"></Card>
                                        <Card link='/soon' h1="Daily Current Affairs"></Card>
                              </div>
                    </div>
          )
}

export default CA;