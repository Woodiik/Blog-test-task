import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperationsFireBase';
import { FormStyles, Input, Label, SignUpButton } from './Register.styled';

export const Register = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ email, password }));
  };
  return (
    <FormStyles onSubmit={handleSubmit}>
      <Label>
        Email
        <Input type="mail" name="email" onChange={handleChange} />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" onChange={handleChange} />
      </Label>

      <SignUpButton type="submit">Sign Up</SignUpButton>
    </FormStyles>
  );
};
