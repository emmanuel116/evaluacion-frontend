import { useState } from 'react';
import styles from 'styled-components';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import image from '../../assets/static/bg.png';
import Button from '../../components/Button';

type LoginProps = {
  setUser: (user: Object, path: string) => void;
};

const Login = ({ setUser }: LoginProps) => {
  const [user, setCurrentUser] = useState({});
  const handlerInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target instanceof HTMLInputElement) {
      setCurrentUser({
        ...user,
        [target.name]: target.value,
      });
    }
  };
  const hanlderSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setUser(user, '/');
  };
  return (
    <LoginStyled>
      <Container>
        <Left className="login__container__left">
          <Form onSubmit={hanlderSubmit}>
            <h1 className="-small">Bienvenido</h1>
            <label htmlFor="user">
              <span>Usuario</span>
              <input
                type="text"
                name="user"
                onChange={handlerInput}
                onPaste={e => {
                  e.preventDefault();
                  return false;
                }}
                onCopy={e => {
                  e.preventDefault();
                  return false;
                }}
              />
            </label>
            <label htmlFor="password">
              <span>Password</span>
              <input
                type="password"
                name="password"
                onChange={handlerInput}
                onPaste={e => {
                  e.preventDefault();
                  return false;
                }}
                onCopy={e => {
                  e.preventDefault();
                  return false;
                }}
              />
            </label>
            <Button color="primary" type="submit">
              Iniciar Sesión
            </Button>
          </Form>
        </Left>
        <Right className="login__container__right">
          <img src={image} alt="" />
        </Right>
      </Container>
    </LoginStyled>
  );
};

const mapDispatchToProps = {
  setUser,
};

export default connect(null, mapDispatchToProps)(Login);

const LoginStyled = styles.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 600px) {
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      margin: 0 1rem;
      box-shadow: var(--boxShadowHover);
      height: auto;
      &__right {
        border-radius: 0;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        padding: 1rem;
        width: 100%;
        > form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          > button {
            margin-bottom: 2rem;
          }
        }

      }
      &__left{
        width: 100%;
        > img {
          object-fit: contain;
          height: 150px;
          padding: 2rem 0;
        }
      }
    }
  }

`;
const Container = styles.div`
    height: 500px;
    width: 800px;
    background-color: ${props => props.theme.backgroundButton};
    border-radius: 15px;
    box-shadow: ${props => props.theme.boxShadow};
    display: flex;

    @media (max-width: 680px) {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      margin: 0 1rem;
      box-shadow: var(--boxShadowHover);
      height: auto;
    }
`;

const Left = styles.div`
width: 40%;
height: 100%;
justify-content: center;
align-items: center;
display: flex;
background-color: #15161C;
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;
color: #FFF;
img {
  width: 200px;
}
@media (max-width: 680px) {

  width: 100%;
  
}
`;
const Right = styles.div`
box-sizing: border-box;
display: flex;
box-sizing: border-box;
flex-direction: column;
justify-content: center;
align-items: center;
width: 70%;
border-top-right-radius: 15px;
border-bottom-right-radius: 15px;
@media (max-width: 680px) {
  border-radius: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 1rem;
  width: 100%;
}
`;

const Form = styles.form`
  width: 70%;
  h1 {
    color: var(--white);
  }

  button {
    margin-top: 1rem;
    float: right;
  }
  label {
    display: flex;
    flex-direction: column;
    & > span {
      color: var(--white);
      font-size: 12px;
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
    & > input {
      height: 30px;
      max-width: 100%;
      border-radius: 5px;
      border: 1px solid var(--gray);

      &:focus {
        outline-color: var(--gray);
      }
    }
  }
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > button {
      margin-bottom: 2rem;
    }
  }
`;
