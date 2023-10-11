import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperationsFireBase';
import { FormStyles, Label, LogInButton } from './Login.styled';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };
  return (
    <FormStyles onSubmit={handleSubmit}>
      <Label>
        Email
        <input type="mail" name="email" onChange={handleChange} />
      </Label>
      <Label>
        Password
        <input type="password" name="password" onChange={handleChange} />
      </Label>
      <LogInButton type="submit">Log In</LogInButton>
    </FormStyles>
  );
};
