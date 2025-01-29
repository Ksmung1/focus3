import React from 'react'

const PhotoGallery = () => {
  return (
    <div className='photogallery'> 
    <div className='flex row gap mid' style={{justifyContent:'', alignItems:"center"}}>
                              <img src={`${process.env.PUBLIC_URL}/images/focus.png`} alt="target" style={{width:'20%',margin: '10px'}}/>
                              <h1 style={{ fontSize: '1.5rem', fontWeight: '800', marginTop: '10px', marginBottom: '20px', color: '#fe5a1d',fontFamily: '', textAlign: 'center' }}>Key Focus Areas</h1>
    </div>
                              <div className="photoalbum flex mid row">
          <div className="col">
          <img style={{width:'80%'}} src={`${process.env.PUBLIC_URL}/images/teaching.png`} alt="target" />

                    <p>Coaching</p>
                    <ul>
                    <li>Competitive <span style={{fontSize: '0', visibility: 'hidden'}}>hhjh‎ </span>Exposures</li>
                    <li>Test Series</li>
                    </ul>
          </div>
          <div className="col">
          <img style={{width:'67%'}} src={`${process.env.PUBLIC_URL}/images/tyre.png`} alt="target" />

                    <p>Training</p>
                    <ul>
                              <li>Physical Training</li>
                              <li>Personality Development</li>
                    </ul>
          </div>
          <div className="col">
          <img style={{width:'74%'}} src={`${process.env.PUBLIC_URL}/images/compass.png`} alt="target" />

                    <p>Guidance</p>
                    <ul>
                              <li>Career support</li>
                              <li>Motivation</li>
                    </ul>
          </div>
    </div>
    </div>
  )
}

export default PhotoGallery