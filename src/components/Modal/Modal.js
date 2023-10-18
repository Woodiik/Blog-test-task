import { EditProfile } from 'components/EditProfile/EditProfile';
import { ModalContainer, ModalBackdrop, Title } from './Modal.styled';

export const Modal = ({ userData, updateUserData, toggleModal }) => {
  return (
    <ModalBackdrop>
      <ModalContainer>
        <Title>Edit your data</Title>
        <EditProfile
          userData={userData}
          updateUserData={updateUserData}
          toggleModal={toggleModal}
        />
      </ModalContainer>
    </ModalBackdrop>
  );
};
