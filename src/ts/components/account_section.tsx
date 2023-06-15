import React from 'react';
import {  themes } from './style_themes';
import Account_Avatar_Profile from "../../img/Account-Avatar-Profile.png";



function AccountSection({ handleClickModalWind }: { handleClickModalWind: () => void, isVisible: boolean}) {


  const handleClick = () => {
    console.log("123")
    handleClickModalWind();
  };
  return (
    <div className="account__section" style={{ border: themes.minimalism.dark.borderStyles }}>
      <button className="account__section-button" id="open_profile" title="Авторизуйтесь для&#10;сохранения прогресса" onClick={handleClick}>
        <img src={Account_Avatar_Profile} alt=""/>
        <figcaption style={{ color: themes.minimalism.dark.textColor }}>ВОЙТИ</figcaption>
      </button>
    </div>
  );
}

export default AccountSection;