import React from 'react';
import { useLocation } from 'react-router-dom';

const OngoingCourses = () => {
  const location = useLocation();  // Get the current URL location

  return (
    <div className='ongoingcourses'>
      {location.pathname === '/classx' && (
          <>
          <h1 className='mid'>CLASS X</h1>
        <div className='classx flex col gap'>
          <div className="col indie-flower">40 Days Exam Booster Course 
                    <span  className='status-badge ongoing-badge'>Ongoing</span>
          </div>
          <div className="col indie-flower">Class X Masterclass
                    <span className='status-badge coming-soon-badge'>Coming soon</span>
          </div>
        </div>
        </>
      )}
      {location.pathname === '/classxii' && (
           <>
           <h1 className='mid'>CLASS XII</h1>
         <div className='classx flex col gap'>
           <div className="col indie-flower">40 Days Exam Booster Course
           <span  className='status-badge ongoing-badge'>Ongoing</span>
           </div>
           <div className="col indie-flower">Class XII Masterclass
           <span  className='status-badge coming-soon-badge'>Coming soon</span>
           </div>
         </div>
         </>
      )}
       {location.pathname === '/defencecourse' && (
        <>
        <h1 className='mid'>DEFENCE COURSE</h1>
      <div className='classx flex col gap '>
        <div className="col indie-flower">40 Days Exam Booster Course
        <span  className='status-badge ongoing-badge'>Ongoing</span>
        </div>
        <div className="col indie-flower">Class X Booster Course
        <span  className='status-badge coming-soon-badge'>Coming soon</span>
        </div>
      </div>
      </>
      )}
       {location.pathname === '/neet' && (
         <>
         <h1 className='mid'>NEET</h1>
       <div className='classx flex col gap'>
         <div className="col indie-flower">40 Days Exam Booster Course
         <span  className='status-badge ongoing-badge'>Ongoing</span>
         </div>
         <div className="col indie-flower">NEET Masterclass
         <span  className='status-badge coming-soon-badge'>Coming soon</span>
         </div>
       </div>
       </>
      )}
    </div>
  );
};

export default OngoingCourses;
