// CustomHookExercise.tsx
import React from 'react';
import useFetch from './useFetch';

// Definir la interfaz para los usuarios
interface Users {
  nombre: string;
  apellido: string;
  edad: number;
}

function CustomHookExercise() {
  // Usamos el hook `useFetch` con la URL del backend
  const { data, loading, error } = useFetch<{ data: { users: Users[] } }>('http://localhost:3000/api/data');

  if (loading) return <p className="text-center text-gray-500 text-xl">Cargando...</p>;

  if (error)
    return (
      <p className="text-center text-red-500 text-xl font-semibold">
        Error: {error.message}
      </p>
    );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Custom Hooks Module
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Acceder a data?.data.users para mapear los usuarios */}
        {data?.data.users.map((u, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-bold text-gray-800">
              {u.nombre} {u.apellido}
            </h2>
            <p className="text-gray-600">Edad: {u.edad}</p>
          </div>
        ))}
        {/* Mensaje si no hay datos */}
        {!data?.data.users.length && (
          <p className="text-center text-gray-500">No se encontraron datos.</p>
        )}
      </div>
    </div>
  );
}

export default CustomHookExercise;

