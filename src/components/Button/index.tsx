import styles from 'styled-components';

const Button = (props: any) => {
  const { children, type = 'button', color } = props;
  return (
    <ButtonStyled type={type} color={color} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styles.button`
cursor: pointer;
display: inline-block;
font-weight: 400;
text-align: center;
margin-right: 5px;
white-space: nowrap;
vertical-align: middle;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
border: 1px solid transparent;
padding: 0.375rem 0.75rem;
font-size: 0.9375rem;
line-height: 1.84615385;
border-radius: 5px;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
background-color: ${props => {
  switch (props.color) {
    case 'warning':
      return props.theme.warning;
    case 'danger':
      return props.theme.danger;
    case 'info':
      return props.theme.info;
    case 'success':
      return props.theme.success;

    default:
      return props.theme.primary;
  }
}};
color: #FFF;
border: 1px solid ${props => {
  switch (props.color) {
    case 'warning':
      return props.theme.warning;
    case 'danger':
      return props.theme.danger;
    case 'info':
      return props.theme.info;
    case 'success':
      return props.theme.success;

    default:
      return props.theme.primary;
  }
}};
box-sizing: border-box;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
&:hover {
  background-color: ${props => props.theme.primary_scale1};
}
`;
