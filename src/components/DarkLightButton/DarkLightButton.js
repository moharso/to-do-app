import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import "./DarkLightButton.css"

 const DarkLightButton = () => {
     const { theme, toggleTheme } = useContext(ThemeContext);

  return (
//     <button className="DarkLightButton" onClick={toggleTheme}>
//       Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//     </button>
//   );
// };

<label className="DarkLightButton">
      <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
      <span className='Slider'></span>
    </label>
  );
 };


export default DarkLightButton;
