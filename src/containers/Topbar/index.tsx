import { useState } from 'react';
import { connect } from 'react-redux';
import Profile from '../../components/Profile';
import {
  BsMoon,
  BsSun,
  BsFullscreenExit,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import { BiMenuAltLeft } from 'react-icons/bi';
import ButtonCircle from '../../components/ButtonCircle';
import logo from '../../assets/static/logo.svg';
import logo_white from '../../assets/static/logo_white.svg';
import {
  TopbarStyled,
  Menu,
  MobileTopBar,
  ButtonBar,
  Logo
} from './styles'

type TopbarProps = {
  onTheme: () => void;
  theme: boolean;
  toggleBarButton: (e: boolean) => void;
  toggleBar: boolean;
  toggleBarMouse: boolean;
};

const Topbar = ({
  onTheme,
  theme,
  toggleBarButton,
  toggleBar,
  toggleBarMouse,
}: TopbarProps) => {
  const fullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const finalLogo = !theme ? logo : logo_white;

  return (
    <TopbarStyled
      toggleBar={toggleBar}
      toggleBarMouse={toggleBarMouse}
    >
      <Menu>
        <ButtonCircle onClick={toggleBarButton}>
          <BiMenuAltLeft />
        </ButtonCircle>
        <MobileTopBar>
          <Logo src={finalLogo} alt="logo" />
        </MobileTopBar>
        <MobileTopBar>
          <ButtonCircle onClick={() => setIsOpen(!isOpen)}>
            <BsThreeDotsVertical />
          </ButtonCircle>
        </MobileTopBar>
      </Menu>
      <ButtonBar isOpen={isOpen}>
        <ButtonCircle onClick={onTheme}>
          {theme ? <BsSun /> : <BsMoon />}
        </ButtonCircle>
        <ButtonCircle onClick={() => fullScreen()}>
          <BsFullscreenExit />
        </ButtonCircle>
        <Profile />
      </ButtonBar>
    </TopbarStyled>
  );
};

export default connect(null, null)(Topbar);
