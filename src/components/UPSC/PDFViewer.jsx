import React from "react";
import { useParams } from "react-router-dom";

function PDFViewer() {
          const classname = useParams();
          const className = classname.classname
          if (className === 'politicsClass-6') {
                    return (
                              <div className="class-watcher">
                                        <p>Politics Class-6</p>
                                        <iframe className="pdf-content" src='/pdf/polityclass-6.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'politicsClass-7') {
                    return (
                              <div className="class-watcher">
                                        <p>Politics Class-7</p>
                                        <iframe className="pdf-content" src='/pdf/polityclass-7.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'politicsClass-8') {
                    return (
                              <div className="class-watcher">
                                        <p>Politics Class-8</p>
                                        <iframe className="pdf-content" src='/pdf/polityclass-8.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'politicsClass-9') {
                    return (
                              <div className="class-watcher">
                                        <p>Politics Class-9</p>
                                        <iframe className="pdf-content" src='/pdf/polityClass-9.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          } else if (className === 'politicsClass-10') {
                    return (
                              <div className="class-watcher">
                                        <p>Politics Class-10</p>
                                        <iframe className="pdf-content" src='/pdf/polityclass-10.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'politicsClass-11 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Politics Class-11 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/polityclass-11I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          } else if (className === 'politicsClass-11 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Politics Class-11 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/polityclass-11II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          } else if (className === 'politicsClass-12 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Politics Class-12 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/polityclass-12I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          } else if (className === 'politicsClass-12 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Politics Class-12 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/polityclass-12II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'historyClass-6') {
                    return (
                              <div className="class-watcher">
                                        <p>History Class-6</p>
                                        <iframe className="pdf-content" src='/pdf/history6.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'historyClass-7') {
                    return (
                              <div className="class-watcher">
                                        <p>History Class-7</p>
                                        <iframe className="pdf-content" src='/pdf/history7.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'historyClass-8') {
                    return (
                              <div className="class-watcher">
                                        <p>History Class-8</p>
                                        <iframe className="pdf-content" src='/pdf/history8.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'historyClass-9') {
                    return (
                              <div className="class-watcher">
                                        <p>History Class-9</p>
                                        <iframe className="pdf-content" src='/pdf/history9.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'historyClass-10') {
                    return (
                              <div className="class-watcher">
                                        <p>History Class-10</p>
                                        <iframe className="pdf-content" src='/pdf/history10.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'historyClass-11') {
                    return (
                              <div className="class-watcher">
                                        <p>History Class-11</p>
                                        <iframe className="pdf-content" src='/pdf/history11.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'historyClass-12 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>History Class-12 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/history12I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'historyClass-12 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>History Class-12 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/history12II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'historyClass-12 Part-III') {
                    return (
                              <div className="class-watcher">
                                        <p>History Class-12 Part-III</p>
                                        <iframe className="pdf-content" src='/pdf/history12III.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'geographyClass-6') {
                    return (
                              <div className="class-watcher">
                                        <p>Geography Class-6</p>
                                        <iframe className="pdf-content" src='/pdf/geography6.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'geographyClass-7') {
                    return (
                              <div className="class-watcher">
                                        <p>Geography Class-7</p>
                                        <iframe className="pdf-content" src='/pdf/geography7.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'geographyClass-8') {
                    return (
                              <div className="class-watcher">
                                        <p>Geography Class-8</p>
                                        <iframe className="pdf-content" src='/pdf/geography8.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'geographyClass-9') {
                    return (
                              <div className="class-watcher">
                                        <p>Geography Class-9</p>
                                        <iframe className="pdf-content" src='/pdf/geography9.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'geographyClass-10') {
                    return (
                              <div className="class-watcher">
                                        <p>Geography Class-10</p>
                                        <iframe className="pdf-content" src='/pdf/geography10.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'geographyClass-11 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Geography Class-11 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/geography11I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'geographyClass-11 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Geography Class-11 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/geography11II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'geographyClass-11 Part-III') {
                    return (
                              <div className="class-watcher">
                                        <p>Geography Class-11 Part-III</p>
                                        <iframe className="pdf-content" src='/pdf/geography11III.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'geographyClass-12 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Geography Class-12 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/geography12I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'geographyClass-12 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Geography Class-12 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/geography12II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }

          else if (className === 'economicsClass-9') {
                    return (
                              <div className="class-watcher">
                                        <p>Economics Class-9</p>
                                        <iframe className="pdf-content" src='/pdf/economics9.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'economicsClass-10') {
                    return (
                              <div className="class-watcher">
                                        <p>Economics Class-10</p>
                                        <iframe className="pdf-content" src='/pdf/economics10.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'economicsClass-11') {
                    return (
                              <div className="class-watcher">
                                        <p>Economics Class-11</p>
                                        <iframe className="pdf-content" src='/pdf/economics11.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'economicsClass-12 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Economics Class-12 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/economics12I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'economicsClass-12 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Economics Class-12 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/economics12II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'sociologyClass-11 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Sociology Class-11 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/sociology11I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'sociologyClass-11 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Sociology Class-11 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/sociology11II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'sociologyClass-12 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Sociology Class-12 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/sociology12I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'sociologyClass-12 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Sociology Class-12 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/sociology12II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'artsClass-11 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Arts Class-11 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/arts11I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'artsClass-11 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Arts Class-11 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/arts11II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }

          else if (className === 'artsClass-12') {
                    return (
                              <div className="class-watcher">
                                        <p>Arts Class-12</p>
                                        <iframe className="pdf-content" src='/pdf/arts12.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }

          else if (className === 'chemistryClass-11 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Chemistry Class-11 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/chemistry11I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'chemistryClass-11 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Chemistry Class-11 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/chemistry11I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'chemistryClass-12 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Chemistry Class-12 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/chemistry12I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'chemistryClass-12 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Chemistry Class-12 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/chemistry12II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'biologyClass-11') {
                    return (
                              <div className="class-watcher">
                                        <p>Biology Class-11</p>
                                        <iframe className="pdf-content" src='/pdf/bio11.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'biologyClass-12') {
                    return (
                              <div className="class-watcher">
                                        <p>Biology Class-12</p>
                                        <iframe className="pdf-content" src='/pdf/bio12.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'physicsClass-11 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Physics Class-11 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/physics11I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'physicsClass-11 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Physics Class-11 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/physics11II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'physicsClass-12 Part-I') {
                    return (
                              <div className="class-watcher">
                                        <p>Physics Class-12 Part-I</p>
                                        <iframe className="pdf-content" src='/pdf/physics12I.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else if (className === 'physicsClass-12 Part-II') {
                    return (
                              <div className="class-watcher">
                                        <p>Physics Class-12 Part-II</p>
                                        <iframe className="pdf-content" src='/pdf/physics12II.pdf' frameBorder="0" title="PDF Viewer" width="100%" height="500px" ></iframe>

                              </div>
                    )
          }
          else {
                    return (
                              <div className="class-watcher">
                                        {className}
                              </div>
                    )
          }
}

export default PDFViewer;
