import { useState } from 'react';
import styles from 'styled-components';
import { connect } from 'react-redux';
import { logOut } from '../../actions';
import { FiLogOut } from 'react-icons/fi';
import profile from '../../assets/static/profile.png';

type ProfileProps = {
  logOut: (arg: any) => void;
  user: { user: string };
};

const Profile = ({ logOut, user }: ProfileProps) => {
  const [toggle, setToggle] = useState(false);

  const handleLogOut = () => {
    sessionStorage.clear();
    logOut({});
    window.location.href = '/login';
  };

  return (
    <ProfileImage>
      <Img
        src={profile}
        alt="profile_image"
        onClick={() => setToggle(!toggle)}
      />
      <Ul toggle={toggle}>
        <Header>{user.user}</Header>

        <Li onClick={handleLogOut}>
          <FiLogOut /> Sing out
        </Li>
      </Ul>
    </ProfileImage>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.reducerApp.user,
    themeApp: state.reducerApp.themeApp,
  };
};

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const ProfileImage = styles.div`
width: 2.4rem;
height: 2.4rem;
line-height: 2.2rem;
display: flex;
position: relative;
margin: 5px;
font-weight: 500;
font-size: 0.875rem;
-webkit-user-select: none;
text-align: center;
justify-content: center;
align-items: center;
> svg{
    animation:spin 1s linear infinite;
}
@-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}
`;

interface UlProps {
  toggle: boolean;
}

const Ul = styles.ul<UlProps>`
position: absolute;
top: 3.5rem;
right: 0;
left: auto;
margin: 0;
list-style: none;
padding: 0;
text-align: left;
background-color: ${({ theme }) => theme.backgroundButton};
border-radius: 5px;
box-shadow: ${({ theme }) => theme.boxShadow};
max-width: 150px;
width: 150px;
font-weight: 400;
display: ${({ toggle }) => (toggle ? 'block' : 'none')};
`;

const Header = styles.li`
padding: 1rem;
text-align: center;
display: flex;
flex-direction: column;
line-height: 1;
border-bottom: ${({ theme }) => theme.border};
`;

const Li = styles.li`
cursor: pointer;
padding: .2rem 1rem;
border-bottom: ${({ theme }) => theme.border};
&:hover{
    background-color: ${({ theme }) => theme.hover_color};
}
> svg{
    margin-right: .3rem;
}
`;

const Img = styles.img`
cursor: pointer;
width: 2.4rem;
height: 2.4rem;
line-height: 2.2rem;
border-radius: 50%;
object-fit: cover;
display: inline-block;
position: relative;
text-align: center;
color: #fff;
font-weight: 500;
font-size: 0.875rem;
-webkit-user-select: none;
`;
