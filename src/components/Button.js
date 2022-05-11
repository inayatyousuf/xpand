

import React from 'react';
import './Button.css';
import { Link , useNavigate, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectUser} from '../components/Redux/userSlice'


const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  const user = useSelector(selectUser)

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
 
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const redirectpath = location.pathname
 
  return (
     <Link to='/log-in' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
