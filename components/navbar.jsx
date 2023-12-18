import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <Link href={'/'}>Home page</Link>
      <Link href={'/math-rating'}>Matematika</Link>
      <Link href={'/english-rating'}>English</Link>
    </div>
  );
};

export default Navbar;
