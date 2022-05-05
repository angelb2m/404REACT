
import React from "react";
import { func, string } from 'prop-types';
import styled from "styled-components"


const Button = styled.button`
    background: ${({ theme }) => theme.background };
    border: none;
    color: ${({ theme }) => theme.invBackground};
    position: fixed;
    right: 0.2rem;
    top: 0.2rem;
    z-index: 10;
    border-style: none;
    border-radius: 50%;
    padding: 0.25rem/* 4px */;
    width: 2rem/* 32px */;
    height: 2rem/* 32px */;
    margin-right: 0.25rem/* 4px */;
    margin-left: 0.25rem/* 4px */;
`



const ThemeSwitch = ({theme, onToggle}) => {
  return (
    <Button onClick={onToggle} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={theme === 'light' ? "colorBlack" : 'colorWhite'}
      >
        {theme === 'dark' ? (
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        ) : (
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        )}
      </svg>
    </Button>
  )
}


ThemeSwitch.propTypes = {
  theme: string.isRequired,
  onToggle: func.isRequired,
}

export default ThemeSwitch
//className={theme === 'dark' ? "ml-1 mr-1 h-8 w-8 rounded p-1 switcher bgBlack" : 'ml-1 mr-1 h-8 w-8 rounded p-1 switcher bgWhite'}
