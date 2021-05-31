import React, { useState, useEffect } from 'react'

function HM() {
     const [fetchedData, setFetchedData] = useState([])
     useState(()=>{
          fetchData('')    
     },[])
const fetchData = (url) => {
     fetch("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/regions/list?x-rapidapi-key=c2ac9db4dcmsh42499389d56fdedp19ec25jsn3ac96eeefec8?x-rapidapi-host=apidojo-hm-hennes-mauritz-v1.p.rapidapi.com")
     .then(response => {
          console.log(response);
     })
     .catch(err => {
          console.error(err);
     });


}


     return (
          <>
               
          </>
     )
}

export default HM
