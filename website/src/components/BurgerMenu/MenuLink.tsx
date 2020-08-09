import React from 'react';
import './MenuLink.css';

type Props = {
  text: string,
  link: string
}

const MenuLink = (props:Props):JSX.Element => {
  return (
    <a className="MenuLink" href={props.link}>
      <div className="content">
        {props.text}
      </div> 
    </a>
  );
};

export default MenuLink;
