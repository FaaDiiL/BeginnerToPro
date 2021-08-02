import React, {useContext} from 'react'
import { ThemeContext } from './../../Components/context/context';

function About() {
     const dark = useContext(ThemeContext)
     return (
          <div>
               <h2>This is my About page!</h2>
          </div>
     )
}

export default About