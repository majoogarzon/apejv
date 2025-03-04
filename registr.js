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


opciones = parseInt (alert( "Desea ver \n\n1. Camisas \n2. Pantalones \n3. Vestidos \n4. Descuentos "));

 switch (opciones) {
   case 0: 
       alert ("Estas son nuestras camisas disponibles");
       break;
       case 1:
         alert ("Estos son nuestros pantalones disponibles" );
         break; 
   case 2: alert ("Vestidos en stock");
     break;
   case 3: alert  ( "Deja tu codigo de descuento!");
 }
 console.log (opciones);

 const inputNombre =document.getElementById ("input.nombre");
 inputNombre.onchange =()=> console.log;
 
 const usuario= JSON.parse(localStorage.getItem);
 const ingreso = document.getElementById ("Ingreso");
 
 ingreso.addEventListener("submit", (e) => {
     e.preventDefault();
     const usuario = e.target[0].value;
     const clave = e.target [1].value;
 
  const datos= {
     usuario,
     clave
  }  ;
  console. log ("Estos son los datos ingresados") 
 });
 
 const productos = (prendas) => {
     const card =document.createElement ("");
     card. className = "card";
     
 const productoNuevo= document.createElement ("p");
 productoNuevo.innerText = prendas.productos; 
 
 const precio = document.createElement("p");
 precio.innerText = `${prenda.precio}`;
 
 const agregarACarrito =document.createElement("button");
 agregarACarrito. onclick =() => agregarACarrito (productos.precio)
 }
