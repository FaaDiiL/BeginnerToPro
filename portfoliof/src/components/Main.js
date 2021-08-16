import React from 'react'

import Contact from './Contact'
import Project from './Project/Project';

function Main() {
  return (
    <main>
      <section id='Bio'>
        <h3>Bio</h3>
        <p>
          I am a person who love to code in HTML/CSS/React, Redux and many more.
          My main goal is to get certification in fullstack developing and get
          better in coding.
        </p>
      </section>

      <section id='Skills'>
        <h3>Work experience</h3>
        <ul>
          <li>
            <h4><b>Company: </b>Kronans Apotek (ehandel) Logistik (6 månader)</h4>
            <p><b>Date: </b>Mars 2020 - Augusti 2020</p>
            <p><b>Location: </b> Enköping, Uppsala län, Sverige</p>
            <p><b>Description: </b> 
              Logistik / Lager - Truck körning, emballering, paketering, kassa,
              buffring mm.GDP GMP utförda.
            </p>
          </li>
          <li>
            <h4><b>Company: </b>Nokas FLYGPLATSKONTROLLANT</h4>
            <p><b>Date: </b>juni 2019 - mars 2020 (10 månader)</p>
            <small><b>Location: </b>Stockholm, Sverige Sverige</small>
            <p><b>Description: </b>Flygplatskontrollant.</p>
          </li>
          <li>
            <h4><b>Company: </b>SBK Sweden AB Administrativ - Ekonomiassistent</h4>
            <p><b>Date: </b>mars 2017 - maj 2019 (2 år 3 månader)</p>
            <p><b>Location: </b>Årsta, Stockholms län, Sverige</p>
            <p><b>Description: </b>
              Order in matning, fakturering, kassa, kundbemötande
              (direkt/mail/telefon),visma administration, Visma AutoCollect
              (Inkassotjänst) mm.
            </p>
          </li>
        </ul>
      </section>

      <section id='Education'>
        <h3>Education</h3>
        <ul>
          <li>
            <h4><b>School: </b>KYH Stockholm</h4>
            <p><b>Date: </b>Augusti 2020 - Juni 2022</p>
            <p><b>Location: </b>Stockholm, Sverige</p>
            <p><b>Description: </b>Front-end Developer</p>
          </li>
          <li>
            <h4><b>School: </b>Udemy</h4>
            <p><b>Date: </b>2019 juni - nu </p>
            <p><b>Location: </b>http://www.udemy.com</p>
            <p><b>Description: </b>
              MERN-Stack (MongoDB, ExpressJS, ReactJS, NodeJS), Javascript
              fundamentals, ReactJS, SQL-Database ...
            </p>
          </li>
          <li>
            <h4><b>School: </b>John bauer Hässleholm</h4>
            <p><b>Date: </b>Augusti 2009 - maj 2012 (3 år)</p>
            <p><b>Location: </b>Hässleholm, Sverige</p>
            <p><b>Description: </b>It-Teknin</p>
          </li>
        </ul>
      </section>
      <section id='Portfolio'>
        <h3>3 last edited projects</h3>
        <Project last={3} />
        <h3>All projects</h3>
        <Project />
      </section>
      <section id='Contact'>
        <Contact />
      </section>
    </main>
  )
}

export default Main
