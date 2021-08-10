import React from 'react'
import Portfolio from './Portfolio'
import Contact from './Contact'

function Main() {
  return (
    <main>
      <section>
        <h2>Bio</h2>
        <p>
          Im Eyad Al Farhan, Im 31 year and I want to become a great Javascript
          developer!
        </p>
      </section>

      <section>
        <h3>Work Experience</h3>
        <ul>
          <li>
            <p>
              <b>Company: </b> Kristianstad Kommun - Kulltorp School
            </p>
            <p>
              <b>Date: </b>Feb 2015 - Dec 2016 {/* (2 år 3 månader) */}
            </p>
            <p>
              <b>Location: </b>Kristianstad City, Sweden
            </p>
            <p>
              <b>Description: </b>I worked at a municipal school as a student
              assistant and extra resource.
            </p>
          </li>

          <li>
            <p>
              <b>Company: </b> Markona AB - Construction worker
            </p>
            <p>
              <b>Date: </b>Jan 2014 - Okt 2014{/* (2 år 3 månader) */}
            </p>
            <p>
              <b>Location: </b>Uppsala City, Sweden
            </p>
            <p>
              <b>Description: </b>I worked as a construction worker on a project
              where we would develop and enlarge the train station in Knivsta,
              Uppsala.
            </p>
          </li>

          <li>
            <p>
              <b>Company: </b> Aleris AB - Care assistant
            </p>
            <p>
              <b>Date: </b>Jan 2013 - August 2014{/* (2 år 3 månader) */}
            </p>
            <p>
              <b>Location: </b>Uppsala City, Sweden
            </p>
            <p>
              <b>Description: </b>Here at Aleris, I worked as a care assistant,
              visited elderly people and people who need support to offer them
              service and care and give them help with everyday care.
            </p>
          </li>

          <li>
            <p>
              <b>Company: </b> Reffect AB - Telemarketer
            </p>
            <p>
              <b>Date: </b>Jan 2012 - April 2013{/* (2 år 3 månader) */}
            </p>
            <p>
              <b>Location: </b>Uppsala City, Sweden
            </p>
            <p>
              <b>Description: </b>This company collaborated with other companies
              and marketed their services and products. I was a salesman who
              sold electricity contracts for one of Sweden's largest electricity
              companies, Vattenfall AB. I was selected as the best seller of the
              month on several occasions.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <p>
              <b>School: </b>Udemy.com - HTML5 & CSS3
            </p>
            <p>
              <b>Date: </b>Dec 2022 - Feb 2021
            </p>
            <p>
              <b>Location: </b>Kristianstad City, Sweden
            </p>
            <p>
              <b>Description: </b> This is a course that i bought on Udemy.com
              to learn more advanced ways to learn modern web design, in HTML5 &
              CSS3. <p>Certificate based Course.</p>
            </p>
          </li>

          <li>
            <p>
              <b>School: </b>Udemy.com - MERN Stack Front to Back
            </p>
            <p>
              <b>Date: </b>April 2019 - Juli 2019
            </p>
            <p>
              <b>Location: </b>Kristianstad City, Sweden
            </p>
            <p>
              <b>Description: </b> This is a course that i bought on Udemy.com
              to learn how to build and deploy a social network application.
              With Node.js, Express, React, Redux & MongoDB.
              <p>Certificate based Course.</p>
            </p>
          </li>

          <li>
            <p>
              <b>School: </b>Lernia polytechnic - Javascript Fullstack
              Webdeveloper
            </p>
            <p>
              <b>Date: </b>Jan 2017 - Juni 2019
            </p>
            <p>
              <b>Location: </b>Malmö City, Sweden
            </p>
            <p>
              <b>Description: </b> Here I learned about web development
              Javascript, HTML5, CSS3, Api, Database and much more. Both
              frontend and backend.
            </p>
          </li>

          <li>
            <p>
              <b>School: </b>Soderport high school
            </p>
            <p>
              <b>Date: </b>Augusti 2009 - Juni 2012
            </p>
            <p>
              <b>Location: </b>Kristianstad City, Sweden
            </p>
            <p>
              <b>Description: </b> Business and Administration
            </p>
          </li>
        </ul>
      </section>

      <Portfolio />
      <Contact />
    </main>
  )
}

export default Main
