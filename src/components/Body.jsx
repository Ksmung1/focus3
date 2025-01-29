import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchResults } from "./SearchBar/SearchResults";
import PhotoGallery from "./PhotoGallery";
import Slider from "./Slider";
import Founder from "./Founder";
import Typewriter from "./Typewriter";
import ArticleCalendar from "./ArticleCalendar";
import DeepFocus from "./DeepFocus";
function Body() {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [active, setActive] = useState(false);
  //eslint-disable-next-line
  const [clickCount, setClickCount] = useState(0);

  // Effect to show Typewriter first, then main content after 6 seconds
  useEffect(() => {
    const hasSeenTypewriter = sessionStorage.getItem("hasSeenTypewriter");
  
    if (!hasSeenTypewriter) {
      const timer = setTimeout(() => {
        setActive(true);
        sessionStorage.setItem("hasSeenTypewriter", "true");
      }, 6000);
  
      return () => clearTimeout(timer);
    } else {
      setActive(true);
    }
  }, []);
  
  

  // Handle the click event for the image
  const handleImageClick = () => {
    setClickCount((prevCount) => {
      if (prevCount + 1 === 4) {
        navigate("/secret");
        return 0; // Reset count after navigating
      }
      return prevCount + 1;
    });
  };



  return (
    <div className="Body">
      {!active ? (
        <>
          <Typewriter />
         
        </>
      ) : (
        <>
          <img
            src={`${process.env.PUBLIC_URL}/images/target.gif`}
            alt="target"
            style={{ margin: "80px 0 0 0", cursor: "pointer" }}
            onClick={handleImageClick}
          />
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "800",
              marginTop: "10px",
              marginBottom: "0",
              color: "#fe5a1d",
            }}
          >
            FOCUS
          </h1>
          <p
            style={{
              color: "white",
              margin: "0 0 30px 0 ",
              fontWeight: 10,
              letterSpacing: "3px",
            }}
          >
            all or nothing
          </p>

          <div className="search-bar-container">
            <SearchBar setResults={setResults} />
            <SearchResults results={results} />
          </div>

          <div className="available-course">
            <h1>AVAILABLE COURSES</h1>
            <div className="course-options flex mid">
              <div className="item ongoing indie-flower" onClick={() => navigate("/classx")}>
                Class X
              </div>
              <div className="item ongoing indie-flower" onClick={() => navigate("/classxii")}>
                Class XII
              </div>
              <div className="item ongoing indie-flower" onClick={() => navigate("/neet")}>
                NEET
              </div>
              <div className="item ongoing indie-flower" onClick={() => navigate("/dec")}>
                Defence
              </div>
            </div>
          </div>

          <PhotoGallery />
          <ArticleCalendar />
          
          <div className=" deep-link">
            <div className="info">
              <img style={{width: '80px'}} src={`${process.env.PUBLIC_URL}/images/deep-focus.png`} alt="" />
              <h1 style={{fontSize:'1.8rem'}}>PROJECT DEEP FOCUS</h1>
              <p onClick={() => (window.location.href = "https://edu-cafe.netlify.app/")}>
                Launching soon
              </p>
              <p class="loading"><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span></p>
              </div>

              <DeepFocus />
            <div className="educafe-link" style={{}}>
            <div className="info">
              <img src={`${process.env.PUBLIC_URL}/images/coffee-cup.gif`} alt="" />
              <h1>EDUCAFE</h1>
              <p onClick={() => (window.location.href = "https://edu-cafe.netlify.app/")}>
                Home is where love surrounds you — but so do distractions. Family chats, neighbors visiting, and friends calling can break your focus. That’s why we built{" "}
                <strong>EDUCAFE</strong> — a peaceful space where your goals get the attention they deserve.
              </p>
              <button onClick={() => (window.location.href = "https://edu-cafe.netlify.app/")}>Visit</button>
            </div>
          </div>
          </div>
          <div style={{ margin: "70px 20px" }}>
          <img
              style={{ width: "100%", border: "1px solid red" }}
              src="/images/WhatsApp Image 2025-01-21 at 23.19.31_41e6be10.jpg"
              alt=""
            />
         </div>
     

     


          <Slider />
          
          <Founder />

          <div className="contacts">
            <p>
              <a href="https://wa.me/918974808279">
                <img src="./images/whatsapp.png" alt="dimond" />
              </a>
            </p>
            <h1 style={{ marginBottom: "30px", fontSize: "16px", color: "white" }}>
              Made with ❤️ by Nextjourney
            </h1>
            <h5 style={{ background: "#fe5a1d", margin: " 0 0 -10px 0", padding: "10px" }}>
              Copyright © Focus
            </h5>
          </div>
        </>
      )}
    </div>
  );
}

export default Body;
