import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledProps {
  toggleBar: boolean;
  toggleBarMouse: boolean;
}

export const Aside = styled.aside<StyledProps>`
  grid-area: aside;
  position: fixed;
  width: ${props => (props.toggleBar ? '80px' : '270px')};
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundButton};
  border: ${({ theme }) => theme.border};
  border-collapse: collapse;
  overflow-y: scroll;
  z-index: 999;
  ${props =>
    props.toggleBar
      ? `
    &:hover{
      width: 270px;
    }
  `
      : null}

  @media (max-width: 768px) {
    width: 270px;
    margin-top: 75px;
    z-index: 99;
    transform: ${props =>
      props.toggleBar ? 'translateX(0)' : 'translateX(-100%)'};
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Top = styled.div`
  height: 75px;
  border-bottom: ${({ theme }) => theme.border};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 36px;
`;

export const Menu = styled.div`
  padding-bottom: 20px;
`;

export const Span = styled.span<StyledProps>`
  ${props =>
    props.toggleBar && !props.toggleBarMouse ? 'display: none' : ''};

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const Ul = styled.ul<StyledProps>`
  list-style: none;
  margin: 0;
  margin-bottom: 0;
  padding: ${props =>
    props.toggleBar && !props.toggleBarMouse
      ? '10px 0px 0 0px'
      : '10px 15px 0 0px'};
  @media (max-width: 768px) {
    padding: 10px 15px 0 0px;
  }
`;

export const Category = styled.li<StyledProps>`
  color: ${({ theme }) => theme.menu_category};
  font-size: 12px;
  text-transform: uppercase;
  padding: 10px 30px;
  ${props =>
    props.toggleBar && !props.toggleBarMouse ? 'display: none' : ''};
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const LinkStyled = styled(Link)<StyledProps>`
  text-decoration: none;
  position: relative;
  display: flex;
  padding: 10px 30px;
  border-radius: ${props =>
    props.toggleBar && !props.toggleBarMouse
      ? ' 0 0 0 0'
      : ' 0 60px 60px 0'};
  color: ${({ theme }) => theme.colorButtonCircle};
  font-size: 14px;
  justify-content: space-between;
  svg {
    margin-right: 5px;
  }
  &.active {
    color: ${({ theme }) => theme.menu_link_active};
    background: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.primary} 0%, ${theme.primary_scale1} 100%) !important`};
    box-shadow: 0 7px 12px 0 ${({ theme }) => theme.primary_scale2};
  }

  @media (max-width: 768px) {
    border-radius: 0 60px 60px 0;
  }
`;
