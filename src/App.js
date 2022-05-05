import React, { useState } from "react";
import NotFound from './components/404'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import ThemeSwitch from "./ThemeSwitch";
import  {useDarkMode} from "./components/useDarkMode"
import './App.css';


function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
      <div className="App">
        <ThemeSwitch theme={theme} onToggle={themeToggler} />
        <NotFound/>
      </div>
    </>
  </ThemeProvider>

  );
}

export default App;