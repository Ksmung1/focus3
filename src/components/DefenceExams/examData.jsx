import React from 'react';

const examData = [

          {
                    urlName: "AgniveerGD",
                    name: 'Agniveer GD',
                    title: "Agniveer Army GD Exam",
                    imgURL: "/images/AGNIPATH.jpg",
                    frequency: "Once a Year (April)",
                    selectionProcess: (
                              <ul>
                                        <li>Common Entrance Exam(CEE)</li>
                                        <li>Physical Fitness Test</li>
                                        <li>Medical Test</li>
                              </ul>
                    ),
                    examPattern: (
                              <div>
                                        <p>Total Questions: 50</p>
                                        <p>Full Marks: 100</p>
                                        <p>Passing Marks: 80</p>
                                        <p>Marking Scheme: 2 marks for each correct answer</p>
                                        <p>Negative Marking: -0.5 marks for each incorrect answer</p>
                                        <p>Subjects:</p>
                                        <ul>
                                                  <li>General Knowledge: 15 Questions (30%)</li>
                                                  <li>General Science: 20 Questions (40%)</li>
                                                  <li>Maths: 10 Questions (20%)</li>
                                                  <li>Logical Reasoning: 5 Questions (10%)</li>
                                        </ul>
                              </div>
                    ),
                    qualification: "10th pass",
                    ageLimit: "17.5 yrs - 23 yrs",
                    vacancy: "4000 approx.",
                    post: "Agniveer Indian Army (GD)",
                    salary: "Rs.30000 - Rs.40000",
          },
          {
                    urlName: "NDA",
                    name: "NDA & NA Exam",
                    title: "NDA & NA Exam",
                    imgURL: "/images/NDA.jpg",
                    frequency: "Twice a year (April and September)",
                    selectionProcess: (
                              <ul>
                                        <li>Written Test</li>
                                        <li>SSB Interview</li>
                              </ul>
                    ),
                    examPattern: (
                              <div>
                                        <p>Total Questions: 270</p>
                                        <p>Full Marks: 900</p>
                                        <p>Passing Marks: 355</p>
                                        <p>Marking Scheme:
                                                  <ul>
                                                            <li>Maths (2.5 Marks per Question)</li>
                                                            <li>GAT (4 Marks per Question)</li>
                                                  </ul>
                                        </p>
                                        <p>Negative Marking:</p>
                                        <ul>
                                                  <li>Maths: -0.83</li>
                                                  <li>GAT: -1.33</li>
                                        </ul>
                                        <p>Subjects:</p>
                                        <ul>
                                                  <li>Maths: Questions: 120, Percentage: 33.3%</li>
                                                  <li>GAT: Questions: 150, Percentage: 66.7% (Mostly Class 11 and 12)</li>
                                        </ul>
                              </div >
                    ),
                    qualification: "12th pass",
                    ageLimit: "16.5 yrs - 19.5 yrs",
                    vacancy: "395 (NDA & NA 2 2023)",
                    post: "Lieutenant",
                    salary: "Rs.56100 - Rs.177500",
          },
          {
                    urlName: "CDS",
                    name: "CDS",
                    title: "UPSC CDS Exam",
                    imgURL: "/images/UPSCCDS.jpg",
                    frequency: "Twice a year (April and September)",
                    selectionProcess: (
                              <ul>
                                        <li>Written Test</li>
                                        <li>SSB Interview</li>
                              </ul>
                    ),
                    examPattern: (
                              <div>
                                        <p>Written (Objective type)</p>
                                        <p>Total Questions: 340</p>
                                        <p>Full Marks: 300</p>
                                        <p>Passing Marks: 140 (46%)</p>
                                        <p>Marking Scheme:
                                                  <ul>
                                                            <li>English (0.83 Marks per Question)</li>
                                                            <li>General Knowledge (0.83 Marks per Question)</li>
                                                            <li>Maths (1 Marks per Question)</li>
                                                  </ul>
                                        </p>
                                        <p>Negative Marking:</p>
                                        <ul>
                                                  <li>English: -0.27</li>
                                                  <li>General Knowledge: -0.27</li>
                                                  <li>Maths: -1</li>
                                        </ul>
                                        <p>Subjects:</p>
                                        <ul>
                                                  <li>English: Questions: 120, Percentage: 33.2%</li>
                                                  <li>General Knowledge: Questions: 120, Percentage: 33.2%</li>
                                                  <li>Elementary Mathematics: Questions: 100, Percentage: 33.6% (Mostly 10th Level)</li>
                                        </ul>
                              </div>
                    ),
                    qualification: "Graduate",
                    ageLimit: "19 yrs - 25 yrs",
                    vacancy: "349 (CDS 2 2023)",
                    post: "Lieutenant",
                    salary: "Rs.56100 - Rs.177500",
          },

          {
                    urlName: "SSCCPO",
                    name: "SSC CPO",
                    title: "SSC CPO Exam",
                    imgURL: "/images/SSCCPO.jpg",
                    frequency: "Once a year (October)",
                    selectionProcess: (
                              <ul>
                                        <li>Written Test</li>
                                        <li>Physical Endurance Test (PET)</li>
                              </ul>
                    ),
                    examPattern: (
                              <div>
                                        <p>Tier 1: Paper 1
                                                  <ul>
                                                            <p>Total Questions: 200</p>
                                                            <p>Full Marks: 200</p>
                                                            <p>Passing Marks: 78-102</p>
                                                            <p>Marking Scheme: 1 Mark for each Correct answer</p>
                                                            <p>Negative Marking: -0.33 Marks for each Incorrect answer</p>
                                                            <p>Subjects:
                                                                      <ul>
                                                                                <li>General Intelligence and Reasoning: Questions: 50, Percentage: 25%</li>
                                                                                <li>General Awareness and knowledge: Questions: 50, Percentage: 25%</li>
                                                                                <li>Quantitative Aptitude: Questions: 50, Percentage: 25%</li>
                                                                                <li>English Language: Questions: 50, Percentage: 25%</li>
                                                                      </ul>
                                                            </p>

                                                  </ul>
                                        </p>
                                        <p>Tier 2: Paper 2
                                                  <ul>
                                                            <p>Total Questions: 200</p>
                                                            <p>Full Marks: 200</p>
                                                            <p>Passing Marks: 113-153 (Paper 1 + 2)</p>
                                                            <p>Subjects:
                                                                      <ul>
                                                                                <li>English Language and Comprehension</li>
                                                                      </ul>
                                                            </p>                                              <p>Negative Marking: -0.33 Marks for each Incorrect answer</p>


                                                  </ul>
                                        </p>
                              </div>
                    ),
                    qualification: "Graduate",
                    ageLimit: "20 yrs - 25 yrs (+5 years relaxation for reserved categories)",
                    vacancy: "1874",
                    post: "SI and ASI",
                    salary: "Rs.35400 - Rs.112400",
          },

          {
                    urlName: "ARMYTES",
                    name: "ARMY TES",
                    title: "ARMY TES Exam",
                    imgURL: "/images/ARMYTES.jpg",
                    frequency: "Twice a year",
                    selectionProcess: (
                              <ul>
                                        <li>JEE Mains</li>
                                        <li>SSB Interview</li>
                                        <li>Medical Examination</li>
                              </ul>
                    ),
                    examPattern: (
                              <div>
                                        <p>Written Examination:
                                                  <li>JEE Mains</li>

                                        </p>
                              </div>
                    ),
                    qualification: "12th pass (PCM 70% min)",
                    ageLimit: "16.5 yrs - 19.5 yrs",
                    vacancy: "90 (TES 50 2023)",
                    post: "Lieutenant",
                    salary: "Rs.56100 - Rs.177500",
          },

          {
                    urlName: "CAPF",
                    name: "CAPF",
                    title: "UPSC CAPF Exam",
                    imgURL: "/images/CAPF.jpg",
                    frequency: "Once a year (August)",
                    selectionProcess: (
                              <ul>
                                        <li>Written Test</li>
                                        <li>Physical Fitness Test</li>
                                        <li> Interview</li>
                              </ul>
                    ),
                    examPattern: (
                              <div>
                                        <p>Paper 1 (Objective)
                                                  <ul>
                                                            <p>Total Questions: 125</p>
                                                            <p>Full Marks: 250</p>
                                                            <p>Passing Marks: 120-125</p>
                                                            <p>Marking Scheme: 2 Mark for each Correct answer</p>
                                                            <p>Negative Marking: -0.66 Marks for each Incorrect answer</p>
                                                            <p>Subjects:
                                                                      <ul>
                                                                                <li>General  and Mental Ability</li>
                                                                      </ul>
                                                            </p>

                                                  </ul>
                                        </p>
                                        <p>Paper 2 (Description)
                                                  <ul>
                                                            <p>Total Questions: 6</p>
                                                            <p>Full Marks: 200</p>
                                                            <p>Passing Marks: Minimum 25%</p>
                                                            <p>Marking Scheme: 33.3 Mark for each Correct answer</p>
                                                            <p>Negative Marking: Nil</p>
                                                            <p>Subjects:
                                                                      <ul>
                                                                                <li>General Studies</li>
                                                                                <li>Essay & Comprehension</li>
                                                                      </ul>
                                                            </p>
                                                  </ul>
                                        </p>
                              </div>
                    ),
                    qualification: "Graduate",
                    ageLimit: "20 yrs - 25 yrs (+5 years relaxation for reserved categories)",
                    vacancy: "322 (UPSC CAPF 2023)",
                    post: "Assistant Commandant (AC)",
                    salary: "Rs.56100 - Rs.177500",
          },

          {
                    urlName: "AFCAT",
                    name: "AFCAT",
                    title: "AFCAT Exam",
                    imgURL: "/images/AFCAT.jpg",
                    frequency: "Twice a year (February and August)",
                    selectionProcess: (
                              <ul>
                                        <li>Written Test</li>
                                        <li>AFSB Interview</li>
                                        <li>Medical Test</li>
                              </ul>
                    ),
                    examPattern: (
                              <div>
                                        <p>Written Exam
                                                  <ul>
                                                            <p>Total Questions: 100</p>
                                                            <p>Full Marks: 300</p>
                                                            <p>Passing Marks: 140-190</p>
                                                            <p>Marking Scheme: 3 Mark for each Correct answer</p>
                                                            <p>Negative Marking: -1 Marks for each Incorrect answer</p>
                                                            <p>Subjects:
                                                                      <ul>
                                                                                <li>General Awareness: Questions: 25, Percentage: 25%</li>
                                                                                <li>English : Questions: 30, Percentage: 30%</li>
                                                                                <li>Numerical Ability: Questions: 20, Percentage: 30%</li>
                                                                                <li>Reasoning and Military Aptitude Test: Questions: 25, Percentage: 25%</li>
                                                                      </ul>
                                                            </p>

                                                  </ul>
                                        </p>

                              </div>
                    ),
                    qualification: <p>
                              <ul>
                                        <li>60% in Maths & Physics in 10+2</li>
                                        <li>Graduate</li>
                              </ul>
                    </p>,
                    ageLimit: "20 yrs - 24 yrs",
                    vacancy: "276",
                    post: "FLying Officer (Flying Lieutenant)",
                    salary: "Rs.56100 - Rs.177500",
          },


          {
                    urlName: "IB",
                    name: "IB ACIO",
                    title: "IB ACIO Exam",
                    imgURL: "/images/IB.jpg",
                    frequency: "Once a year (July)",
                    selectionProcess: (
                              <p>
                                        <ul>
                                                  <li>Tier 1: Objective type</li>
                                                  <li>Tier 2: Descriptive type</li>
                                                  <li>Interview</li>
                                        </ul>
                              </p>
                    ),
                    examPattern: (
                              <div>
                                        <p>Tier 1
                                                  <ul>
                                                            <p>Total Questions: 100</p>
                                                            <p>Full Marks: 100</p>
                                                            <p>Passing Marks: 33-35</p>
                                                            <p>Marking Scheme: 1 Mark for each Correct answer</p>
                                                            <p>Negative Marking: -0.25 Marks for each Incorrect answer</p>
                                                            <p>Subjects:
                                                                      <ul>
                                                                                <li>English: Questions: 20, Percentage: 20%</li>
                                                                                <li>Numerical/ Analytical/ Logical Ability: Questions: 20, Percentage: 20%</li>
                                                                                <li>Quantitative Aptitude: Questions: 20, Percentage: 20%</li>
                                                                                <li>General Studies: Questions: 20, Percentage: 20%</li>
                                                                                <li>General Awareness: Questions: 20, Percentage: 20%</li>
                                                                      </ul>
                                                            </p>

                                                  </ul>
                                        </p>
                                        <p>Tier 2
                                                  <ul>
                                                            <p>Subjects:
                                                                      <ul>
                                                                                <li>Essay: 60%</li>
                                                                                <li>English Comprehension and precis writing: 40%</li>
                                                                      </ul>
                                                            </p>


                                                  </ul>
                                        </p>
                                        <p>Tier 3
                                                  <ul>
                                                            <p>Subjects:
                                                                      <ul>
                                                                                <li>Interview</li>
                                                                      </ul>
                                                            </p>


                                                  </ul>
                                        </p>
                              </div>
                    ),
                    qualification: "Graduate",
                    ageLimit: "18 yrs - 27 yrs (+5 age relaxation for reserved categories)",
                    vacancy: "1150 (IB ACIO Grade 2 Executive Post)",
                    post: "Grade 2 Executive",
                    salary: "Rs.44900 - Rs.142400",
          },


          {
                    urlName: "SSCGD",
                    name: "SSC Constable GD",
                    title: "SSC Constable GD Exam",
                    imgURL: "/images/SSCGD.jpg",
                    frequency: "Once a year (January - February)",
                    selectionProcess: (
                              <ul>
                                        <li>Computer Based Test-CBT</li>
                                        <li> Physical Efficiency Test (PET) / Physical Standards Test (PST) </li>
                                        <li>Medical Examination </li>
                              </ul>
                    ),
                    examPattern: (
                              <div>
                                        <p>Computer Based Test - CBT (Objective type)
                                                  <ul>
                                                            <p>Total Questions: 80</p>
                                                            <p>Full Marks: 160</p>
                                                            <p>Passing Marks: 54-76</p>
                                                            <p>Marking Scheme: 2 Mark for each Correct answer</p>
                                                            <p>Negative Marking: -0.5 Marks for each Incorrect answer</p>
                                                            <p>Subjects:
                                                                      <ul>
                                                                                <li>General Intelligence and Reasoning: Questions: 20, Percentage: 25%</li>
                                                                                <li>General Knowledge and General Awareness: Questions: 20, Percentage: 25%</li>
                                                                                <li>Elementary Mathematics: Questions: 20, Percentage: 25%</li>
                                                                                <li>English/ Hindi: Questions: 20, Percentage: 25%</li>
                                                                      </ul>
                                                            </p>

                                                  </ul>
                                        </p>
                              </div>
                    ),
                    qualification: "10th pass",
                    ageLimit: "18 yrs - 23 yrs (+5 age relaxation for reserved categories)",
                    vacancy: "50000",
                    post: "Constable GD",
                    salary: "Rs.21700 - Rs.69100",
          },

          {
                    urlName: "AgniveerTechnical",
                    name: "Agniveer Technical",
                    title: "Agniveer Technical Exam",
                    imgURL: "/images/AGNIPATH.jpg",
                    frequency: "Once a year (April)",
                    selectionProcess: (
                              <ul>
                                        <li>Common Entrance Exam (CEE)</li>
                                        <li> Physical Fitness Test</li>
                                        <li>Medical Test</li>
                              </ul>
                    ),
                    examPattern: (
                              <div>
                                        <p>Written Exam (Objective): CEE
                                                  <ul>
                                                            <p>Total Questions: 50</p>
                                                            <p>Full Marks: 200</p>
                                                            <p>Passing Marks: 80</p>
                                                            <p>Marking Scheme: 4 Mark for each Correct answer</p>
                                                            <p>Negative Marking: -1 Marks for each Incorrect answer</p>
                                                            <p>Subjects:
                                                                      <ul>
                                                                                <li>General Knowledge: Questions: 10, Percentage: 20%</li>
                                                                                <li>Mathematics: Questions: 15, Percentage: 30%</li>
                                                                                <li>Physics: Questions: 15, Percentage: 30%</li>
                                                                                <li>Chemistry: Questions: 10, Percentage: 20%</li>
                                                                      </ul>
                                                            </p>

                                                  </ul>
                                        </p>
                              </div>
                    ),
                    qualification: "12th pass (With Physics, Chemistry, Maths and English)",
                    ageLimit: "17.5 yrs - 23 yrs",
                    vacancy: "40000 approx. (Agnipath Scheme)",
                    post: "Agniveer Technical",
                    salary: "Rs.30000 - Rs.40000",
          },

          {
                    urlName: "AgniveerClerk",
                    name: "Agniveer Clerk",
                    title: "Agniveer Clerk Exam",
                    imgURL: "/images/AGNIPATH.jpg",
                    frequency: "Once a year (April)",
                    selectionProcess: (
                              <ul>
                                        <li>Common Entrance Exam (CEE)</li>
                                        <li> Physical Fitness Test</li>
                                        <li>Medical Test</li>
                              </ul>
                    ),
                    examPattern: (
                              <div>
                                        <p>Written Exam (Objective): CEE
                                                  <ul>
                                                            <p>Total Questions: 50</p>
                                                            <p>Full Marks: 200</p>
                                                            <p>Passing Marks: 80</p>
                                                            <p>Marking Scheme: 4 Mark for each Correct answer</p>
                                                            <p>Negative Marking: -1 Marks for each Incorrect answer</p>
                                                            <p>Subjects:
                                                                      <p>Part 1</p>
                                                                      <ul>
                                                                                <li>General Knowledge: Questions: 5, Percentage: 10%</li>
                                                                                <li>General Science: Questions: 5, Percentage: 10%</li>
                                                                                <li>Mathematics: Questions: 10, Percentage: 20%</li>
                                                                                <li>Computer Science: Questions: 5, Percentage: 10%</li>
                                                                      </ul>
                                                                      <p>Part 2</p>
                                                                      <ul>
                                                                                <li>General English: Questions: 25, Percentage: 50%</li>
                                                                      </ul>
                                                            </p>

                                                  </ul>
                                        </p>
                              </div>
                    ),
                    qualification: "12th pass (Any Stream)",
                    ageLimit: "17.5 yrs - 23 yrs",
                    vacancy: "40000 (Agnipath Scheme)",
                    post: "Agniveer Clerk",
                    salary: "Rs.30000 - Rs.40000",
          },

];

export default examData;
