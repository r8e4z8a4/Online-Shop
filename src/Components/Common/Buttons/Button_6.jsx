import React from 'react';
import styled from 'styled-components';
const Button_6 = ({children,handler}) => {
  return (
    <StyledWrapper>
      <button onClick={handler} className='after:bg-white px-2 dark:after:bg-[#071822] before:bg-white dark:before:bg-[#071822] text-blue-600 dark:text-white'>
        {children}
      </button>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  button {
    position: relative;
    height: 2.8em;
    border: 3px ridge #149CEA;
    outline: none;
    background-color: transparent;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
  button::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    transition: 0.5s;
    transform-origin: center;
  }

  button::before {
    content: "";
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    transition: 0.5s;
  }

  button:hover::before, button:hover::after {
    transform: scale(0)
  }

  button:hover {
    box-shadow: inset 0px 0px 25px #1479EA;
  }`;

export default Button_6;
