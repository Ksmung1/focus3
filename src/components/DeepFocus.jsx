import React from 'react'

const DeepFocus = () => {
          // const defaultMessage = encodeURIComponent("")
  return (
    <div className='deepfocus flex' onClick={()=>window.location.href='https://t.me/focus10thexam'}>
          
       {/* <img className='focus-link' src="./images/focus-link.png" alt="" /> */}

       {/* <div className='flex deepfocus-heading'>
         <div className='flex gap'>
            <img src="./images/focus2.png" alt="" />
            <div>
               <h1 className='lspace'>FOCUS</h1>
               <p>all or nothing</p>
            </div>
         </div>
          <h1>CLASS X</h1>
          </div> */}

<div>
   <h1>FREE GUIDANCE & REVISION PROGRAM FOR CLASS X</h1>
</div>
<p style={{textAlign:'center'}}>REFINING YOUR PREPARATIONS WITH:</p>
<ul>
          <li>
      
      <div className="col">
                <p>SMART MIND MAPS</p>
      </div>
</li>
          <li>
                    <div className="col">
                              <p>NCERT QUESTIONS</p>
                    </div>
          </li>
        
          <li>
                    <div className="col">
                              <p>SAMPLE QUESTIONS</p>
                    </div>
          </li>
         
          <li>
                    <div className="col">
                              <p>HOTS QUESTIONS</p>
                    </div>
          </li>
          <li>
                    <div className="col">
                              <p>ASSERTIONS_REASON QUESTIONS</p>
                    </div>
                    </li>
                    <li>
                    <div className="col ">
                              <p>CASE BASED QUESTIONS</p>
                    </div>

          </li>
         
       </ul>
<h1 className='deepfocus-button'>JOIN NOW!</h1>
      
    </div>
  )
}

export default DeepFocus