import { AllUsers } from '@/context/context';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

const Profile = () => {
  const { id } = useRouter().query;
  const { englishUsers, mathUsers } = useContext(AllUsers);
  const users = [...englishUsers, ...mathUsers];
  const user = users.find((user) => user.id_code === id);
  return <div>Profile {id}</div>;
};

export default Profile;
