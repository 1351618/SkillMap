import React, { useState } from 'react';
import AccountSection  from './components/account_section';
import NavigationPanel from './components/navigation_panel';
import Authorization from './components/authorization';
import ProfileSettings from './components/profile_settings';
import exit_icon from "../img/exit_icon.png"



function Main() {

    const [isOn, setIsOn] = useState(true);
    const [AccountIsVisible, AccountSetIsVisible] = useState(isOn);
    const [NavigationIsVisible, NavigationsStIsVisible2] = useState(isOn);
    
    const handleClick = () => {
      setIsOn(!isOn);
      console.log(isOn);
      AccountSetIsVisible(!isOn);
      NavigationsStIsVisible2(!isOn);
    };

    const [showModalWind, setShowModalWind] = useState(false);

    const handleClickModalWind = () => {
      setShowModalWind(true);
    };

    const handleCloseModalWind = () => {
        setShowModalWind(false);
      };

    
    

    return (
        <div className='main'>
            <div className="main__content">
                {/* <video className="main__content_video-intro" src="../img/animation/animation.MP4" autoPlay muted loop></video> */}
                <div className="main__map" id="main__map">
                    <script src="js/map.js"></script>
                </div>
            </div>
            {AccountIsVisible && <AccountSection handleClickModalWind={handleClickModalWind} isVisible={showModalWind} />}
            {NavigationIsVisible && <NavigationPanel />}
            {showModalWind && <div className='main__modal-windovs' onClick={(e) => e.target === e.currentTarget && handleCloseModalWind()}>
                <div className='main__modal-windovs_content' >
                    <button onClick={handleCloseModalWind}><img src={exit_icon} alt="" /></button>
                    <Authorization />
                    <ProfileSettings />
                </div>
                </div>}
            



            <button className="main__desk-elements" title="ВКЛ/ВЫЛК&#10;элементы&#10;рабочего&#10;стола"  onClick={handleClick}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24">
                <path fillRule="evenodd" clipRule="evenodd" d="M2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z" fill="#838585"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M21 9.93417C21 9.95604 21 9.97798 21 10L21 14.0658C21 14.9523 21.0001 15.7161 20.9261 16.3278C20.8468 16.9833 20.6679 17.6117 20.2092 18.1213C19.7505 18.631 19.185 18.8297 18.595 18.9179C18.0445 19.0001 17.3571 19 16.5592 19L7.44075 19C6.64292 19 5.95548 19.0001 5.40499 18.9179C4.81503 18.8297 4.24951 18.631 3.79081 18.1213C3.33212 17.6117 3.15325 16.9833 3.07393 16.3278C2.99992 15.7161 2.99996 14.9523 3 14.0658L3 9.93419C2.99996 9.0477 2.99992 8.28388 3.07393 7.67221C3.15325 7.0167 3.33212 6.38835 3.79082 5.87868C4.24951 5.36902 4.81503 5.17028 5.40499 5.08215C5.95549 4.99991 6.64292 4.99995 7.44076 5L16.5 5C16.5198 5 16.5396 5 16.5592 5C17.3571 4.99995 18.0445 4.99991 18.595 5.08215C19.185 5.17028 19.7505 5.36902 20.2092 5.87868C20.6679 6.38835 20.8468 7.0167 20.9261 7.67221C21.0001 8.28387 21 9.04768 21 9.93417Z" fill="#838585"/>
            </svg>
            </div>
        </button>
        </div>
    );
}

export default Main;