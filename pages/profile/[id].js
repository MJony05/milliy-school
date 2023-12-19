import { AllUsers } from '@/context/context';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

const Profile = () => {
  const { id } = useRouter().query;
  const { englishUsers, mathUsers } = useContext(AllUsers);
  const users = [...englishUsers, ...mathUsers];
  const user = users.find((user) => user.id_code === id);

  return (
    <div>
      {user ? (
        <>
          <h1>Profile</h1>
          <h1>Ism: {user.full_name}</h1>
          <h1>Manzil: {user.viloyat}</h1>
          <h1>Id kod : {user.id_code}</h1>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Profile;
