import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Advertisement = () => {
          const [active, setActive] = useState(false)

          useEffect (()=>{
                    const timer = setInterval(()=>{
                              setActive((prev)=>!prev)
                    },10000);
                    return ()=> clearInterval(timer);
          },[])
  return (

    <div className='advertisement'>
                    <div><img src="./images/megaphone.gif" alt="" /></div>

          {active ? (
                     <a href='./images/NEET.pdf' download="NEET_Registration.pdf">
                              <div className="col">NEET 2025 Registration Starting Soon</div> </a> ):(
          <NavLink to={'https://upsconline.gov.in/upsc/OTRP/index.php'}>
            <div className="col">UPSC CSC 2025 Registration Opens</div></NavLink>
          )}
           <button>Apply Now</button>
                              {/* <div><img src="./images/hot-news.gif" alt="" /></div> */}

    </div>
  )
}

export default Advertisement;