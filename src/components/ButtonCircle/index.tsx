import styles from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  onClick: (arg: any) => void;
};

const ButtonCircle = ({ children, onClick }: ButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ButtonCircle;

const Button = styles.button`
background-color: transparent;
color: ${({ theme }) => theme.colorButtonCircle};
border: none;
outline: none;
font-size: 20px;
margin: 5px;
padding: 11px !important;
text-align: center;
height: 2.5rem;
width: 2.5rem;
font-size: 1.2rem;
position: relative;
border-radius: 50%;
box-shadow: 0px 2px 3px rgba(4, 4, 7, 0.1);
justify-content: center;
cursor: pointer;
`;
