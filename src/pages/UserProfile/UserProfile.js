import { Modal } from 'components/Modal/Modal';
import { useState, useEffect, useCallback } from 'react';
import { auth } from 'firebaseInit/firebaseInit';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { getUserEmail } from 'redux/selectors';
import {
  UserProfileWrapper,
  UserProfileInfo,
  ProfileData,
  ProfileButton,
} from './UserProfile.styled';

export const UserProfile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    number: '',
    additionalInfo: '',
  });
  const email = useSelector(getUserEmail);

  const updateUserData = newData => {
    setUserData(newData);
  };

  const toggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const firestore = getFirestore();
        const userDocRef = doc(firestore, 'users', auth.currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userDataFromFirebase = userDocSnap.data();
          setUserData(userDataFromFirebase);
        }
      } catch (error) {
        console.error('Downloading userData error', error);
      }
    };

    loadUserData();

    const handleEscapeKey = e => {
      if (e.key === 'Escape' && isOpenModal) {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpenModal, toggleModal]);

  return (
    <UserProfileWrapper>
      <UserProfileInfo>
        <ul>
          <ProfileData>
            <h3>Email</h3>
            <p>{email}</p>
          </ProfileData>
          <ProfileData>
            <h3>Name</h3>
            <p>{userData.name || '-'}</p>
          </ProfileData>
          <ProfileData>
            <h3>Number</h3>
            <p>{userData.number || '-'}</p>
          </ProfileData>
          <ProfileData>
            <h3>Additional info</h3>
            <p>{userData.additionalInfo || '-'}</p>
          </ProfileData>
        </ul>
      </UserProfileInfo>
      <ProfileButton onClick={toggleModal}>Edit</ProfileButton>
      {isOpenModal && (
        <Modal
          userData={userData}
          updateUserData={updateUserData}
          toggleModal={toggleModal}
        />
      )}
    </UserProfileWrapper>
  );
};
