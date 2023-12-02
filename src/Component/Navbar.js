// src/components/Navbar.js
import React from 'react';

const Navbar = ({currentSection, handleNavigation }) => {
  console.log("~~~~~~~~~~~~~~~~~~",currentSection)
  return (
    <nav>
    <div className='navbar'>
    <div className={currentSection === 'home'? 'selected':'notselected'} onClick={()=>{handleNavigation('home');console.log('here')}} >Home</div>
    <div className={currentSection === 'work'? 'selected':'notselected'} onClick={()=>handleNavigation('work')}>Work</div>
    <div className={currentSection === 'projects'? 'selected':'notselected'} onClick={()=>handleNavigation('projects')}>Project</div>
    {/* <div className='home'>Contact us</div> */}
    </div>
    </nav>
  );
};

export default Navbar;
