import React from 'react'

import Portfolio from './Contact'
import Contact from './Portfolio'

function Main() {
     return (
          <main>
             <section id='Bio'>
               <h2>Bio</h2>
               <p>I am a person who love to code in HTML/CSS/React, Redux and many more. My main goal is to get certification in fullstack developing and get better in coding.</p>
             </section> 

             <section id='Skills'>
               <h2>Skills</h2>
               <ul>
                    <li>
                         <h3>Kronans Apotek (ehandel) Logistik (6 månader)</h3>
                         <p>mars 2020 - Augusti 2020</p>
                         <small>Enköping, Uppsala län, Sverige</small>
                         <p>Logistik / Lager - Truck körning, emballering, paketering, kassa, buffring mm.GDP GMP utförda.</p>
                    </li>
                    <li>
                         <h3>Nokas FLYGPLATSKONTROLLANT</h3>
                         <p>juni 2019 - mars 2020 (10 månader)</p>
                         <small>Stockholm, Sverige Sverige</small>
                         <p>Flygplatskontrollant.</p>
                    </li>
                    <li>
                         <h3>SBK Sweden AB Administrativ - Ekonomiassistent</h3>
                         <p>mars 2017 - maj 2019 (2 år 3 månader)</p>
                         <small>Årsta, Stockholms län, Sverige</small>
                         <p>Order in matning, fakturering, kassa, kundbemötande (direkt/mail/telefon),visma administration, Visma AutoCollect (Inkassotjänst) mm.</p>
                    </li>
               </ul>
             </section>

             <section id='Education'>
               <h2>Education</h2>
               <ul>
                    <li>
                         <h3>KYH Stockholm</h3>
                         <p>Augusti 2020 - Juni 2022</p>
                         <small>Stockholm, Sverige</small>
                         <p>Front-end Developer</p>
                    </li>
                    <li>
                         <h3>Udemy</h3>
                         <p>2019 juni - nu </p>
                         <small>http://www.udemy.com</small>
                         <p>MERN-Stack (MongoDB, ExpressJS, ReactJS, NodeJS), Javascript fundamentals, ReactJS, SQL-Database ...</p>
                    </li>
                    <li>
                         <h3>John bauer Hässleholm</h3>
                         <p>Augusti 2009 - maj 2012 (3 år)</p>
                         <small>Hässleholm, Sverige</small>
                         <p>It-Teknin</p>
                    </li>
               </ul>
             </section>
             <Portfolio />
             <Contact />
          </main>
     )
}

export default Main
