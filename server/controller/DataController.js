const data = {
   users: [
      { nombre: 'Javier', apellido: 'Milei', edad: 57 },
      { nombre: 'María', apellido: 'González', edad: 32 },
      { nombre: 'Carlos', apellido: 'Pérez', edad: 45 },
      { nombre: 'Ana', apellido: 'Martínez', edad: 28 },
      { nombre: 'Luis', apellido: 'Rodríguez', edad: 39 }
   ]
}


export class DataController {

   static getData(req, res){
      console.log(data)
      res.json({
         data: data
      })
   }
}
