import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchResults } from "./SearchBar/SearchResults";
import PhotoGallery from "./PhotoGallery";
import Slider from "./Slider";
import Founder from "./Founder";
import Typewriter from "./Typewriter";
// import DeepFocus from "./DeepFocus";
function Body() {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [active, setActive] = useState(false);
  //eslint-disable-next-line
  const [clickCount, setClickCount] = useState(0);

    const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-18T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  // Effect to show Typewriter first, then main content after 6 seconds
  useEffect(() => {
    const hasSeenTypewriter = sessionStorage.getItem("hasSeenTypewriter");
  
    if (!hasSeenTypewriter) {
      const timer = setTimeout(() => {
        setActive(true);
        sessionStorage.setItem("hasSeenTypewriter", "true");
      }, 9000);
  
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
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
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
              margin: "10px 0 30px 0 ",
              fontWeight: 10,
              letterSpacing: "3px",
            }}
          >
            The leading force in Class X & XII. NEET, NDA, CDS, & CAPF Coaching
          </p>


          <div className="search-bar-container">
            <SearchBar setResults={setResults} />
            <SearchResults results={results} />
          </div>

          
          <section className="" style={{padding: "50px 0"}}>
            <div className="available-course adver max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
              <h1 style={{fontSize: "1.9rem"}}>New Updates</h1>
              <img className="w-full adv-image h-full" src={`${process.env.PUBLIC_URL}/images/adver.jpg`} alt="" />
                        <div>
<h2
  style={{
    fontWeight: 600, // font-semibold
    lineHeight: 1.625, // leading-relaxed
    fontSize: "1.1rem", // text-md
    color: "#eceff4ff", // text-gray-900
    marginTop: "0.75rem", // mt-3
  }}
>
  🚀 40 focused days. One final push. One powerful result.
</h2>

            
            {/* Countdown UI */}
<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
  <div
    style={{
      marginTop: "1rem",
      padding: "0.75rem",
      width: "100%",
      maxWidth: "24rem",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f3f4f6", // gray-100
      borderRadius: "0.5rem",
    }}
  >
    <h3
      style={{
        fontWeight: 600,
        textAlign: "center",
        color: "#111827", // gray-900
        marginBottom: "0.25rem",
      }}
    >
      ⏳ Countdown to December 18:
    </h3>

    <div
      style={{
        display: "flex",
        gap: "0.75rem",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div>
        <span style={{ fontWeight: 700, fontSize: "1.25rem" }}>
          {timeLeft.days}
        </span>
        <p style={{ fontSize: "0.75rem", color: "#4b5563" /* gray-600 */ }}>
          Days
        </p>
      </div>

      <div>
        <span style={{ fontWeight: 700, fontSize: "1.25rem" }}>
          {timeLeft.hours}
        </span>
        <p style={{ fontSize: "0.75rem", color: "#4b5563" }}>
          Hours
        </p>
      </div>

      <div>
        <span style={{ fontWeight: 700, fontSize: "1.25rem" }}>
          {timeLeft.minutes}
        </span>
        <p style={{ fontSize: "0.75rem", color: "#4b5563" }}>
          Minutes
        </p>
      </div>

      <div>
        <span style={{ fontWeight: 700, fontSize: "1.25rem" }}>
          {timeLeft.seconds}
        </span>
        <p style={{ fontSize: "0.75rem", color: "#4b5563" }}>
          Seconds
        </p>
      </div>
    </div>
  </div>
</div>

          </div>
            </div>
          </section>

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
          {/* <ArticleCalendar /> */}
          
          <div className=" deep-link">
            {/* <div className="info">
              <img style={{width: '80px'}} src={`${process.env.PUBLIC_URL}/images/deep-focus.png`} alt="" />
              <h1 style={{fontSize:'1.8rem'}}>PROJECT DEEP FOCUS</h1>
              <p onClick={() => (window.location.href = "https://edu-cafe.netlify.app/")}>
                Launching soon
              </p>
              <p class="loading"><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span></p>
              </div> */}

              {/* <DeepFocus /> */}
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
