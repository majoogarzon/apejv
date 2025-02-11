//Bienvenida


let usuarioNuevo = prompt ("Bienvenido! Ingrese su Nombre");

console.log ( "Nuevo ingreso" + usuarioNuevo);

  let login = false
 let pass = "1 =< 10"
 let intentos = 0

 do {
     let passIngresada = prompt ("Ingrese su contraseña para descuentos")
     if( passIngresada === pass){
         login = true
         alert ("contraseña correcta")
     } else {
         alert ("contraseña equivocada")
         console.log ('le quedan ${3-intentos} intentos')
     }
  } while (!login && intentos ===3)
 if (login) {
     alert ("Bienvenido")
 };

let opciones;
const prendas =["camisa", "pantalones", "vestidos"];
const salida =[];


opciones = parseInt (prompt( "Desea ver \n\n1. Camisas \n2. Pantalones \n3. Vestidos \n4. Descuentos "));

 switch (opciones) {
   case 0: 
       prompt ("Estas son nuestras camisas disponibles");
       break;
       case 1:
         prompt ("Estos son nuestros pantalones disponibles" );
         break; 
   case 2: prompt ("Vestidos en stock");
     break;
   case 3: prompt  ( "Deja tu codigo de descuento!");
 }
 console.log (opciones);
