import styles from 'styled-components';

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  buttonBar?: React.ReactNode;
};

const Container = ({
  children,
  title = 'Titulo Ventana',
  buttonBar,
}: ContainerProps) => {
  return (
    <Div>
      <PageHeader>
        <Title>{title}</Title>
        <Barbutton>{buttonBar}</Barbutton>
      </PageHeader>
      {children}
    </Div>
  );
};

export default Container;

const Div = styles.div`
  grid-area: container;
  min-height: calc(100vh - 75px);
  padding: 0 30px;
  @media (max-width: 768px) {
    max-width: 100vw;
    box-sizing: border-box;
  }
`;

const PageHeader = styles.div`
    margin: 1.5rem 0rem 1.5rem;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Barbutton = styles.div`
    display: flex;
`;

const Title = styles.h1`
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    margin-bottom: 0.2rem;
`;
