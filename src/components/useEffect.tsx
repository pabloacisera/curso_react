const UseEffect = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Módulo useEffect</h1>
      <p className="text-lg font-semibold text-gray-800 mb-2">¿Qué es un useEffect?</p>
      <p className="text-gray-700 mb-4">
        Es un hook (gancho) en React que permite ejecutar efectos secundarios en componentes
        funcionales. Un efecto secundario es cualquier operación que interactúe con el mundo
        externo o que no sea puramente funcional.
      </p>
      <p className="text-lg font-semibold text-gray-800 mb-2">¿Cuándo se utiliza?</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Manipulación del DOM</li>
        <li>Petición a un servidor</li>
        <li>Configurar o limpiar suscripciones</li>
      </ul>
      <p className='text-gray-700 mt-4 mb-1' >Estructura basica:</p>
      <img src='../../public/img/useEffect_1.png'></img>

      <p className='text-black mt-2'>
         Ejemplo con peticion a servidor
      </p>
      <img src='../../public/img/useEffect_req.png' />
    </div>
  );
};

export default UseEffect;

