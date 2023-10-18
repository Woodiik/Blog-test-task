import { EditProfile } from 'components/EditProfile/EditProfile';
import { ModalContainer, ModalBackdrop, Title } from './Modal.styled';
import ReactDOM from 'react-dom';
import { useRef } from 'react';

export const Modal = ({ userData, updateUserData, toggleModal }) => {
  const portalRoot = document.getElementById('modal-root');
  const modalRef = useRef();

  const handleBackdropClick = event => {
    if (modalRef.current === event.target) {
      toggleModal();
    }
  };

  return ReactDOM.createPortal(
    <ModalBackdrop ref={modalRef} onClick={handleBackdropClick}>
      <ModalContainer>
        <Title>Edit your data</Title>
        <EditProfile
          userData={userData}
          updateUserData={updateUserData}
          toggleModal={toggleModal}
        />
      </ModalContainer>
    </ModalBackdrop>,
    portalRoot
  );
};
