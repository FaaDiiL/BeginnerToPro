import React from 'react'
import Portfolio from './Portfolio'
import Contact from './Contact'

function Main() {
  return (
    <main>
      <section>
        <h2>Bio</h2>
        <p>
          Im Eyad Al Farhan, Im 31 year and I want to become a great developer!
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>
            <h3>Javascript</h3>
            <p>Javascript ES 6 and newer.</p>
          </li>
          <li>
            <h3>React</h3>
            <p>I can basic react, and still learning more.</p>
          </li>
          <li>
            <h3>CSS3 & HTML5</h3>
            <p>I can basic Css and html, and still learning more.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Javascript Fullstack developer</h3>
            <p>Javascript FullStack Developer</p>
            <small>2017-2019</small>
          </li>
          <li>
            <h3>HTML5 & CSS3</h3>
            <p>The easiest way to learn modern HTML and CSS interface.</p>
            <small>2020 - December</small>
          </li>
          <li>
            <h3>Mern Stack Front to Back</h3>
            <p>
              Build and deploy a social network with Node.js, Express, React,
              Redux & MongoDB.
            </p>
            <small>2019 April - July</small>
          </li>
        </ul>
      </section>

      <Portfolio />
      <Contact />
    </main>
  )
}

export default Main
