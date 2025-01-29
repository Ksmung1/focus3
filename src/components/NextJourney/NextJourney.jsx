import React from "react";
import { Link } from "react-router-dom";

function NextJourney() {
          return (
                    <div style={{ backgroundImage: 'url(image/graduation-hat.png)', background: 'white', margin: '0', padding: '0', height: '100vh', color: 'black' }}>
                              <style>
                                        {`
          @keyframes colorChange {
            0% { background-position: 0 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
                              </style>
                              <h1 style={{
                                        marginTop: '0',
                                        paddingTop: '50px',
                                        fontSize: '35px',
                                        textAlign: 'center',
                                        fontWeight: '800',
                                        background: 'linear-gradient(90deg, blue, pink, green)',
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                        animation: 'colorChange 5s linear infinite',

                              }}>
                                        NextJourney
                              </h1>
                              <h3 style={{ margin: '10px 0', fontSize: '15px', textAlign: 'center', wordSpacing: '2px', }}>We Build Top Projects</h3>
                              <p style={{ textAlign: 'center' }}><img src="images/lab-equipment.png" style={{ width: '30px', marginRight: '20px', marginTop: '50px', textAlign: 'center' }} alt="dimond"  /></p>
                              <h6 style={{ textAlign: 'center', }}>Laboratory</h6>

                              <div style={{ display: 'flex', margin: '50px', gap: '10px' }}>
                                        <p style={{ textAlign: 'center', border: '1px solid blue', borderRadius: '10px', padding: ' 30px 20px 20px', margin: '0 auto', width: '100px', height: '100px', background: 'orange' }}>
                                                  <Link to='/msproject' style={{ textDecoration: 'none', fontSize: '20px', color: 'black', fontWeight: '900', display: 'block' }}>ttt</Link>
                                        </p>
                                        <p style={{ textAlign: 'center', border: '1px solid blue', borderRadius: '10px', padding: ' 32px 0', margin: '0 auto', width: '100px', height: '100px', background: 'gray' }}>
                                                  <Link to='https://coin-buddy.netlify.app/' style={{ textDecoration: 'none', fontSize: '17px', color: 'black', fontWeight: '900', display: 'block' }}>CoinBuddy</Link>
                                        </p>
                                        <p style={{ textAlign: 'center', border: '1px solid blue', borderRadius: '10px', padding: ' 20px', margin: '0 auto', width: '100px', height: '100px', background: 'red' }}>
                                                  <Link to='https://moonfund.netlify.app/' style={{ textDecoration: 'none', fontSize: '20px', color: 'black', fontWeight: '900', display: 'block' }}>Moon Fund</Link>
                                        </p>
                              </div>
                    </div>
          );
}

export default NextJourney;
