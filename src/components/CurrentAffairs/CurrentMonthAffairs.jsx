import React from "react";
import { useParams } from "react-router-dom";
import monthContent from "./monthContent";
import "./CurrentAffairs.css"

function CurrentMonthAffairs() {
          const { currentMonth } = useParams();

          console.log(currentMonth)
          // Check if the currentMonth exists in the monthContent object
          // If it exists, render the corresponding content; otherwise, show a default message

          const contentToRender = monthContent[`${currentMonth}`] || <h6 style={{ color: 'red' }}>Content is not available right now. <br /> <span><a href="/currentAffairs/2023/September" style={{ textDecoration: 'underline', color: 'blue' }}>Try this</a></span></h6>

          return (
                    <div className="currentAffairs-details">
                              <h1>{currentMonth} 2023</h1>
                              <p>{contentToRender}</p>
                    </div>
          );
}

export default CurrentMonthAffairs;
