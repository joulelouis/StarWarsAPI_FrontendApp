import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Investree PH Coding Assignment</h1>
        <h2>Introduction</h2>
        <p>This is a test of proficiency for Investree Applicants to single out qualified developers with the required skill set.</p>
        <p>You are given a week to finish this assignment. Please submit your code to a public repository on Github and please email us the link.</p>
        <p>After you have finished the assignment, record a short, high-level walkthrough of your solution. You may use Loom (free account) or any other video recording software. Please send us the link to the video.</p>
        <p>Please make sure that:</p>
        <ol>
          <li>The code you write is clean, readable, well structured and documented.</li>
          <li>That it is well tested.</li>
          <li>The code you write is well optimized.</li>
        </ol>

        <h2>Requirements</h2>
        <ol>
          <li>Create a Front-end application that fetches data from the Star Wars REST API. You may choose to use any framework you are comfortable with.</li>
          <li>The application should display a list of Star Wars characters returned by the API.</li>
          <li>The application should be responsive on desktop and mobile.</li>
          <li>Unit testing is not required but a plus.</li>
          <li>Deployment to any cloud hosting is a plus.</li>
          <li>The application should be submitted to a public repository on Github.</li>
          <li>On your README file, please include screenshots for web and mobile version</li>
          <li>If you cannot complete the assignment, please submit what you have done.</li>
        </ol>

        <h3>API</h3>
        <p>Star Wars Chars API: https://develop.d3t5w79d05f5ds.amplifyapp.com/api/characters</p>
        <p>Sample UI: https://develop.d3t5w79d05f5ds.amplifyapp.com/starwars-chars</p>

        <h2>Important!</h2>
        <p>The application can be different compared to what is shown in the link. For questions/feedback kindly email Investree HR at mica.acenas@investree.ph</p>
    </div>
  )
}

export default Home