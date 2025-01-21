import { useEffect, useState } from "react";

function UseEffectExcersice() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);

  const fetchData = async () => {
     setLoading(true)
    try {
      let res = await fetch("https://api.example.com/data", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("No se ha podido obtener respuesta");
      }

      let response = await res.json(); // Usamos await aquí para esperar a que se resuelva la promesa
      setData(response);
    } catch (error) {
      setError(error as string);//captura el hilo de error que hicimos arriba
    } finally{
       setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

   if(loading){
      return (<div>Cargando</div>)
   }

  return (
     <div>
      {error && <p>{error}</p>}
      /**para poder utilizar el data que se ha guardado sin el error Object object podemos:*/
         <p>{JSON.stringify(data)}</p>
     </div>
  )  
}

export default UseEffectExcersice;
