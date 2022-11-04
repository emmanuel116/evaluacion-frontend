import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineCloudUpload } from 'react-icons/ai';
import logo from '../../assets/static/logo.svg';
import logo_white from '../../assets/static/logo_white.svg';
import logo_m from '../../assets/static/logo_m.svg';
import logo_m_white from '../../assets/static/logo_m_white.svg';
import {
  Aside,
  Top,
  Logo,
  Menu,
  Span,
  Ul,
  Category,
  LinkStyled,
} from './styles';

type AsideProps = {
  theme: boolean;
  toggleBar: boolean;
  toggleBarMouse: boolean;
  toggleMouseHover: () => void;
  toggleBarButton: (arg: boolean) => void;
};

const menu: { id: number; title: string; icon: any; link: string }[] =
  [
    {
      id: 1,
      title: 'Employees',
      icon: <AiOutlineHome />,
      link: '/',
    },
    {
      id: 2,
      title: 'Upload',
      icon: <AiOutlineCloudUpload />,
      link: '/upload',
    },
  ];

const AsideComponent = ({
  theme,
  toggleBar,
  toggleBarMouse,
  toggleMouseHover,
  toggleBarButton,
}: AsideProps) => {
  const location = useLocation();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const finalLogo = !theme
    ? !toggleBar || toggleBarMouse
      ? logo
      : logo_m
    : !toggleBar || toggleBarMouse
    ? logo_white
    : logo_m_white;

  return (
    <Aside
      toggleBar={toggleBar}
      toggleBarMouse={toggleBarMouse}
      onMouseEnter={toggleMouseHover}
      onMouseLeave={toggleMouseHover}
    >
      <Top>
        <Link to={'/'}>
          <Logo src={finalLogo} alt="logo" />
        </Link>
      </Top>
      <Menu>
        <Ul
          toggleBar={toggleBar}
          toggleBarMouse={
            windowSize.innerWidth > 781 ? toggleBarMouse : false
          }
        >
          <Category
            toggleBar={toggleBar}
            toggleBarMouse={
              windowSize.innerWidth > 781 ? toggleBarMouse : false
            }
          >
            Menú
          </Category>
          {menu.map((menu, index) => (
            <li key={index}>
              <LinkStyled
                toggleBar={toggleBar}
                toggleBarMouse={
                  windowSize.innerWidth > 781 ? toggleBarMouse : false
                }
                to={menu.link}
                onClick={() =>
                  windowSize.innerWidth > 781
                    ? null
                    : toggleBarButton(false)
                }
                className={
                  menu.link === location.pathname ? 'active' : ''
                }
              >
                <div>
                  {menu.icon}
                  <Span
                    toggleBar={toggleBar}
                    toggleBarMouse={
                      windowSize.innerWidth > 781
                        ? toggleBarMouse
                        : false
                    }
                  >
                    {menu.title}
                  </Span>
                </div>
              </LinkStyled>
            </li>
          ))}
        </Ul>
      </Menu>
    </Aside>
  );
};
const mapStateToProps = (state: any) => {
  return {
    user: state.reducerApp.user,
  };
};

export default connect(mapStateToProps, null)(AsideComponent);
