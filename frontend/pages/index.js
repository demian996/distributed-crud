import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <main>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.length === 0 && <li>No hay usuarios</li>}
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </main>
  );
}
