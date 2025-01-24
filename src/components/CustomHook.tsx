function CustomHook() {
   return (
      <div className="p-8 bg-gray-100 rounded-lg shadow-md">
         <h1 className="text-2xl font-bold text-blue-600 mb-4">
            Módulo custom hook
         </h1>
         <p className="text-lg font-semibold text-gray-800 mb-2">
            ¿Qué es un custom hook?
         </p>
         <p className="text-gray-700 mb-4">
            Un custom hook en React es una función de JavaScript que utiliza
            hooks predefinidos de React (como useState, useEffect, etc.) para
            encapsular lógica reutilizable. Los custom hooks siempre empiezan
            con el prefijo use, lo que sigue la convención de React y permite
            que se comporten como hooks nativos.
         </p>
         <p className="text-gray-700 mb-4">
            Un custom hook no tiene un renderizado propio como un componente,
            pero puede encapsular y manejar lógica compleja que luego puede ser
            compartida entre múltiples componentes. Esto permite mantener el
            código limpio y fácil de mantener.
         </p>
         <p className="text-lg font-semibold text-gray-800 mb-2">
            ¿Cuándo se utiliza?
         </p>
         <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
               Gestión de estado compartido Cuando varios componentes necesitan
               manejar el mismo estado o lógica, puedes crear un custom hook
               para centralizar esa lógica. Ejemplo: Manejar el estado de
               autenticación del usuario (useAuth).
            </li>
            <li>
               Gestión de lógica repetitiva o compleja Si encuentras que repites
               lógica similar en múltiples componentes, encapsularla en un hook
               ayuda a reducir duplicación de código. Ejemplo: Lógica para
               manejar un temporizador (useTimer) o detectar clics fuera de un
               elemento (useClickOutside).
            </li>
            <li>
               Manejo de eventos del navegador Encapsular lógica relacionada con
               eventos del navegador, como cambios de tamaño de ventana o
               seguimiento del scroll. Ejemplo: Escuchar y responder a cambios
               de la ventana (useWindowSize)
            </li>
            <li>
               Consumo de APIs y datos asíncronos Simplificar la lógica para
               realizar solicitudes de datos con fetch o axios. Ejemplo: Obtener
               datos de una API (useFetch).
            </li>
         </ul>
         
      </div>
   );
}

export default CustomHook;

/*
<p className="text-gray-700 mt-4 mb-1">Estructura basica:</p>
         <img src="../../public/img/useEffect_1.png"></img>

         <p className="text-black mt-2">Ejemplo con peticion a servidor</p>
         <img src="../../public/img/useEffect_req.png" />
*/