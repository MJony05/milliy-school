import { AllUsers } from '@/context/context';
import Link from 'next/link';
import React, { useContext } from 'react';
const MathRating = () => {
  const { mathUsers } = useContext(AllUsers);
  return (
    <div>
      <h1>Maath Users</h1>
      {mathUsers?.map((user) => (
        <Link href={`profile/${user.id_code}`} key={user._id}>
          <h3>{user.full_name}</h3>
          <p>{user.school_num}</p>
          <p>{user.place_name}</p>
        </Link>
      ))}
    </div>
  );
};
export default MathRating;
