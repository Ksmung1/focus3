import React from 'react';

const ScrollContainer = () => {

    return (
        <div
            className="scroll-container" style={{margin: '20px'}}>
            <div className="scroll-content">
                                                  <div className='glass-container' >
                                                            <div className="focus-item" style={{ padding: '10px 10px 0 0', gap: '0px' }}>
                                                                      <img style={{ width: '35%', height: '100%' }} src='/images/soldier.png' alt="dimond"  />
                                                                      <h3 style={{ textAlign: 'left', fontSize: '17px' }}>NDA EXAM COURSE</h3>


                                                            </div>
                                                            <div className="status-bar">
                                                               
                                                                      <p className="masterp">Foundation</p>
                                                                
                                                                      <p className="status">Status: <span style={{}}>Ongoing</span></p>
                                                                
                                                            </div>
                                                            <div>
                                                                      <p>
                                                                      <div className="class-content" style={{ padding: '7px 0', borderRadius: '5px' }}>
                              <ul>
                                        <li>✅ 6 Months of Offline Classes</li>
                                        <li>✅ 300 + Hours of Learning</li>
                                        <li>✅ Leadership and Soft Skills Training for SSB</li>
                                        <li>✅ Physical Fitness Training</li>
                                        <li>✅ Dedicated Career Coach and Personal Mentor</li>

                              </ul>
                    </div>
                                                                      </p>
                                                                     
                                                            </div>
                        


                                                  </div>
                                        </div>
        </div>
    );
};

export default ScrollContainer;
