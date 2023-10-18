import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrctedRoute';
import { Blog } from 'pages/Blog/Blog';
import { Home } from 'pages/Home/Home';
import { LogIn } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { UserProfile } from 'pages/UserProfile/UserProfile';
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
              path="blog"
              element={<PrivateRoute component={Blog} redirectTo="/login" />}
            />
            <Route
              path="profile"
              element={
                <PrivateRoute component={UserProfile} redirectTo="/login" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute component={Register} redirectTo="/blog" />
              }
            />
            <Route
              path="login"
              element={<RestrictedRoute component={LogIn} redirectTo="/blog" />}
            />

            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </Container>
    )
  );
}
