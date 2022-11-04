import { useState, useEffect, createContext } from 'react';
import styles, { ThemeProvider } from 'styled-components';
import Topbar from '../containers/Topbar';
import Aside from '../containers/Aside';
import Container from '../containers/Container';
import { connect } from 'react-redux';
import { lightTheme, darkTheme } from '../assets/styles/theme';
import { GlobalStyles } from '../assets/styles/theme';
import { setThemeApp } from '../actions';

type LayoutProps = {
  children: React.ReactNode;
  loggedIn: boolean;
  topbar: {
    title: string;
    buttonBar: React.ReactNode;
  };
  setThemeApp: (arg: any) => void;
};

const Layout = ({
  children,
  loggedIn,
  topbar,
  setThemeApp,
}: LayoutProps) => {
  const [theme, setTheme] = useState('light');
  const [toggleBar, settoggleBar] = useState(false);
  const [toggleBarMouse, settoggleBarMouse] = useState(false);
  const isDarkTheme = theme === 'dark' ? true : false;
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };
  const toggleBarButton = (e: boolean) => {
    if (e === false) {
      settoggleBar(false);
    }
    settoggleBar(!toggleBar);
  };
  const toggleMouseHover = () => {
    settoggleBarMouse(!toggleBarMouse);
  };
  const title = topbar.title;

  const buttonBar = topbar.buttonBar;

  createContext(theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    setThemeApp({ theme, lightTheme, darkTheme });
  }, [setThemeApp, theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {loggedIn ? (
        <Main toggleBar={toggleBar} toggleBarMouse={toggleBarMouse}>
          <Topbar
            onTheme={toggleTheme}
            theme={isDarkTheme}
            toggleBarButton={toggleBarButton}
            toggleBar={toggleBar}
            toggleBarMouse={toggleBarMouse}
          />
          <Aside
            theme={isDarkTheme}
            toggleBarButton={toggleBarButton}
            toggleBar={toggleBar}
            toggleBarMouse={toggleBarMouse}
            toggleMouseHover={toggleMouseHover}
          />
          <Container title={title} buttonBar={buttonBar}>
            {children}
          </Container>
        </Main>
      ) : (
        <>{children}</>
      )}
    </ThemeProvider>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.reducerApp.loggedIn,
    topbar: state.reducerApp.topbar,
  };
};

const mapDispatchToProps = {
  setThemeApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

interface StyledProps {
  toggleBar: boolean;
  toggleBarMouse: boolean;
}

const Main = styles.main<StyledProps>`
  display: grid;
  width: 100vw;
  transition: all 0.3s ease-in-out;
  grid-template-columns: ${props =>
    props.toggleBar && !props.toggleBarMouse ? '80px' : '270px'} 1fr;
  grid-template-rows: 75px 1fr;
  grid-template-areas:
    'aside topbar'
    'aside container';

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 75px 1fr;
    grid-template-areas:
      'topbar'
      'container';
  }
`;
