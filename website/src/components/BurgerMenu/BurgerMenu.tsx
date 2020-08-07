import React from 'react';
import './BurgerMenu.css';
import Menu from './Menu';

const BurgerMenu = ():JSX.Element => {
  return (
    <div className="BurgerMenu">
      
      <input type="checkbox" />
      
      <svg viewBox="0 0 100 80">
        <rect y=" 0" rx="8"></rect>
        <rect y="34" rx="8"></rect>
        <rect y="68" rx="8"></rect>
      </svg>

      <Menu /> 
    </div>
  );
}

export default BurgerMenu;

