import React, { useState } from 'react';
import { themes } from './style_themes';






function TopicSelection() {
  const [theme, setTheme] = useState(themes.minimalism.dark);
  const [themeNumber, setThemeNumber] = useState(1);

  function handleCheckboxChange(num: number) {
    if (num === 1) {
      setTheme(themes.minimalism.dark);
      setThemeNumber(1);
      
    } else {
      setTheme(themes.minimalism.light);
      setThemeNumber(2);
      
    }
  }

  return (
    <div className='topic_selection' style={{ 
                border: theme.borderStyles, 
                backgroundColor: theme.backgroundStyle,
                color:theme.textColor }}>
      <span>Минимализм</span>
      <label className='minimalism_dark_label' htmlFor='checkbox1'>
        dark
      </label>
      <input
        className='minimalism_dark_checkbox'
        id='checkbox1'
        type='checkbox'
        checked={themeNumber === 1}
        onChange={() => handleCheckboxChange(1)}
      />
      <label className='minimalism_light_label' htmlFor='checkbox2'>
        light
      </label>
      <input
        className='minimalism_light_checkbox'
        id='checkbox2'
        type='checkbox'
        checked={themeNumber === 2}
        onChange={() => handleCheckboxChange(2)}
      />
    </div>
  );
}

export default TopicSelection;
