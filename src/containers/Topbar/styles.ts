import styled from 'styled-components';

interface TopBarStyledProps {
  readonly toggleBar: boolean;
  readonly toggleBarMouse: boolean;
}

interface ButtonBarProps {
  readonly isOpen: boolean;
}

export const TopbarStyled = styled.div<TopBarStyledProps>`
  grid-area: topbar;
  position: fixed;
  width: ${props =>
    props.toggleBar && !props.toggleBarMouse
      ? 'calc(100% - 80px)'
      : 'calc(100% - 270px)'};

  margin-left: ${props =>
    props.toggleBar && !props.toggleBarMouse ? '80px' : '270px'};
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundButton};
  box-sizing: border-box;
  padding-left: 20px;
  border: ${({ theme }) => theme.border};
  border-collapse: collapse;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100vw;
    margin-right: 40px;
    position: relative;
  }
`;

export const ButtonBar = styled.div<ButtonBarProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
  @media (max-width: 768px) {
    transition: all 0.2s linear 0ms;
    position: absolute;
    background-color: ${({ theme }) => theme.backgroundButton};
    bottom: -100%;
    left: 0;
    width: 100vw;
    justify-content: space-around;
    box-size: border-box;
    height: 75px;
    border: ${({ theme }) => theme.border};
    transform-origin: 0 0 0;
    ${props =>
      props.isOpen
        ? `
     transform: scaleY(1);
      
      `
        : 'transform: scaleY(0)'}
  }
`;
export const MobileTopBar = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const Logo = styled.img`
  height: 36px;
`;
