import { useNavigate } from 'react-router-dom';
import { Container, StartButton } from './Home.styled';

export const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/login');
  };

  return (
    <Container>
      <h1>
        Hello, we propose a service for saving your contacts. If you have a lot
        of contacts and you memory can't remember all - welcome!
      </h1>
      <StartButton type="button" onClick={handleStartClick}>
        Start
      </StartButton>
    </Container>
  );
};
