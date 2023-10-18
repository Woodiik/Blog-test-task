import { useState } from 'react';
import {
  updateDoc,
  doc,
  getFirestore,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { auth } from 'firebaseInit/firebaseInit';
import {
  EditProfileContainer,
  Label,
  ProfileInput,
  ProfileTextarea,
  SaveButton,
} from './EditProfile.styled';

export const EditProfile = ({ userData, updateUserData, toggleModal }) => {
  const [newName, setNewName] = useState(userData.name || '');
  const [newNumber, setNewNumber] = useState(userData.number || '');
  const [newAdditionalInfo, setNewAdditionalInfo] = useState(
    userData.additionalInfo || ''
  );

  const handleSave = async () => {
    try {
      const firestore = getFirestore();
      const userDocRef = doc(firestore, 'users', auth.currentUser.uid);

      const updatedUserData = {
        name: newName,
        number: newNumber,
        additionalInfo: newAdditionalInfo,
      };

      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        await updateDoc(userDocRef, updatedUserData);
      } else {
        await setDoc(userDocRef, updatedUserData);
      }

      updateUserData(updatedUserData);
      toggleModal();
    } catch (error) {
      // Обробка помилок
      console.error(error);
    }
  };

  return (
    <EditProfileContainer>
      <Label>New name </Label>
      <ProfileInput
        type="text"
        placeholder="New name"
        defaultValue={userData.name}
        onChange={e => setNewName(e.target.value)}
      />

      <Label>New number </Label>
      <ProfileInput
        type="text"
        placeholder="New number"
        defaultValue={userData.number}
        onChange={e => setNewNumber(e.target.value)}
      />

      <Label>Additional info </Label>
      <ProfileTextarea
        placeholder="Additional info"
        defaultValue={userData.additionalInfo}
        onChange={e => setNewAdditionalInfo(e.target.value)}
      />

      <SaveButton onClick={handleSave}>Зберегти</SaveButton>
    </EditProfileContainer>
  );
};
