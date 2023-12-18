import { createContext, useState, useEffect } from 'react';

export const AllUsers = createContext(null);

function Context({ children }) {
  const [englishUsers, setEnglishUsers] = useState([]);
  const [mathUsers, setMathUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch('/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let { data } = await res.json();
      setEnglishUsers(data.englishUsers);
      setMathUsers(data.mathUsers);
    };

    fetchData();
  }, []);

  return (
    <AllUsers.Provider
      value={{
        englishUsers,
        mathUsers,
        setEnglishUsers,
        setMathUsers,
      }}
    >
      {children}
    </AllUsers.Provider>
  );
}

export default Context;
