import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logOut } from 'redux/authOperationsFireBase';
import { getIsLoggedIn, getUserName } from 'redux/selectors';
import { Header, Link, LogOutButton, UserMenu } from './SharedLayout.styled';
export const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <Header>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/contacts'}>Blog</Link>
        </div>
        {isLoggedIn ? (
          <UserMenu>
            <h3>Welcome, {user}!</h3>
            <LogOutButton
              type="LogOutButton"
              onClick={() => dispatch(logOut())}
            >
              Log Out
            </LogOutButton>
          </UserMenu>
        ) : (
          <div>
            <Link to={'/register'}>Sign Up</Link>
            <Link to={'/login'}>Log In</Link>
          </div>
        )}
      </Header>
      <Outlet />
    </div>
  );
};
