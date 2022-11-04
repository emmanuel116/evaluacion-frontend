import styles from 'styled-components';

type CardProps = {
  children: React.ReactNode;
  title: string;
  color: string;
};

const Card = ({ title = '', children, color = '' }: CardProps) => {
  return (
    <CardStyled color={color}>
      {title !== undefined ? <CardHead>{title}</CardHead> : null}
      <CardBody>{children}</CardBody>
    </CardStyled>
  );
};
export default Card;

const CardStyled = styles.div`
  background-color:  ${({ theme }) => theme.backgroundButton};
  box-shadow: var(--boxShadow);
  border-radius: 5px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 20px;
  ${({ theme, color }) =>
    color && color === 'primary'
      ? `background-color: ${theme.primary};
         color: ${theme.menu_link_active};
         border-color: ${theme.menu_link_active};`
      : ''}
`;

const CardHead = styles.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px 2px 0 0;
  background: none;
  padding: 1rem 1.5rem;
  border-bottom: ${({ theme }) => theme.border};
  font-weight: bold;
`;
const CardBody = styles.div`
  padding: 1rem 1.5rem; 
  background: none;
`;
