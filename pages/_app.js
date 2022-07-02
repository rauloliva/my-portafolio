import '../styles/globals.css';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const changeTheme = theme => {
    const newTheme = theme == 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    setTheme(localStorage.getItem('theme', theme));
  }, [theme]);

  return <Component {...pageProps} theme={theme} changeTheme={changeTheme} />;
}

export default MyApp;
