import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrctedRoute';
import { Contacts } from 'pages/Contacts/Contacts';
import { Home } from 'pages/Home/Home';
import { LogIn } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshCurrentUser } from 'redux/authOperationsFireBase';
import { getIsRefreshing } from 'redux/selectors';
import { Layout } from '../SharedLayout/SharedLayout';
import { Container } from './App.styled';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={LogIn} redirectTo="/contacts" />
              }
            />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </Container>
    )
  );
}
