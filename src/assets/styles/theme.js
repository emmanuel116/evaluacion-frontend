import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap');
  body {
    transition: all 0.2s ease-in,;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
  }  
`

export const lightTheme = {
  body: '#F0F1F8',
  text: '#000',
  colorButtonCircle: '#404C77',
  boxShadow: '0px 2px 3px rgba(4, 4, 7, 0.1)',
  backgroundButton: '#FFF',
  border: '1px solid #eaedf1',
  colorSublink: '#6A788E',
  primary: '#1D48D9',
  primary_scale1: 'rgba(19, 129, 230, 0.6)',
  primary_scale2: 'rgba(18, 139, 230, 0.2)',
  menu_category: 'rgb(138, 152, 172)',
  menu_link_active: '#FFF',
  hover_color: '#eaedf1',
  success: '#5eba00',
  info: '#49a8ee',
  warning: '#f1c40f',
  danger: '#cd201f',
  secondary: '#EA7634',
  purple: '#615BC6',
}
export const darkTheme = {
  body: '#1F1F34',
  text: '#fff',
  colorButtonCircle: '#fff',
  boxShadow: '0px 2px 3px #1a1a2f',
  backgroundButton: '#2A2B43',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  colorSublink: '#fff',
  primary: '#1D48D9',
  primary_scale1: 'rgba(19, 129, 230, 0.6)',
  primary_scale2: 'rgba(18, 139, 230, 0.2)',
  menu_category: 'rgb(138, 152, 172)',
  menu_link_active: '#FFF',
  hover_color: '#2e2e4a',
  success: '#5eba00',
  info: '#49a8ee',
  warning: '#f1c40f',
  danger: '#cd201f',
  secondary: '#EA7634',
  purple: '#615BC6',
}
