import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

export const FormHeader = styled.h2`
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  color: #333;
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 98%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

export const FormTextarea = styled.textarea`
  width: 98%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

export const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
