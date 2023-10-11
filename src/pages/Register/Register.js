import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperationsFireBase';
import { FormStyles, Label, SignUpButton } from './Register.styled';

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
  };
  return (
    <FormStyles onSubmit={handleSubmit}>
      <Label>
        Name
        <input type="text" name="name" onChange={handleChange} />
      </Label>
      <Label>
        Password
        <input type="password" name="password" onChange={handleChange} />
      </Label>
      <Label>
        Email
        <input type="mail" name="email" onChange={handleChange} />
      </Label>
      <SignUpButton type="submit">Sign Up</SignUpButton>
    </FormStyles>
  );
};
