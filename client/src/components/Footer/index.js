import React, {useState, useEffect} from 'react';
import "./style.css"

export default function Footer(){

    const [newStyle, setNewStyle] = useState({})
    const [newerStyle, setNewerStyle] = useState({})

    const isLoggedIn = (localStorage.getItem('lightOn') === 'true');

  useEffect(() => {
  if(isLoggedIn) {
    const newLight = setNewStyle("lightt")
    clearInterval(newLight)
    const newerLight = setNewerStyle("lighter")
    clearInterval(newerLight)
  }else{
    const newDark = setNewStyle("darkk")
  clearInterval(newDark)
  const newDarker = setNewerStyle("darker")
  clearInterval(newDarker)
  }
}, [isLoggedIn])

    return(
    <div className="Footer">    
        <div className="container">
          {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
          <p className="footerText" id={newStyle}>Early Bird, 2021</p>            
        </div>
    </div>    
    )
}
