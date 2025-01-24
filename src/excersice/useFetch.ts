// useFetch.ts
import { useState, useEffect } from 'react';

// Definir la interfaz para la respuesta de la API
interface ApiResponse {
  data: {
    users: {
      nombre: string;
      apellido: string;
      edad: number;
    }[];
  };
}

interface Params<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T,>(url: string): Params<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('No se ha podido ejecutar consulta');
        }
        const res: T = await response.json();
        setData(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
