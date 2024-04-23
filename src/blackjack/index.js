import _ from 'underscore';

// una importaciond e barriles es crear un archivo donde esten todos los import y aqui solo utilizar una linea de codigo 
import { crearDeck, pedirCarta, valorCarta, crearCarta } from './usecases';

import { miNombre } from "./usecases/crear-deck";
// lo que fue realizado aqui es una importacion independiente o individual, 

// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';
// Lo que fue realizado aqui fue cambiar  el nombre de la funcion en este archivo y dicho nombre es el que se tiene que utilizar ahora

// import cualquierNombreParaCrearUNNUevoDeck from './usecases/crear-deck'
// de esta manera llamo la importacion por defecto




/**
 * AC = A`s de clubs (treboles)
 * AD = A`s de Diamons (diamantes)
 * AH = A`s de Heart (Corazon)
 * AS = A`s de spades (espada)
 * 
 * 
 * Patron modulo, es el patron de diseño mas comun que existe en Js, es compatible con cualquier version de Js, sirve para una encapsulacon de nuestro codigo (es decir que todo el codigo de Js quede en un contenedor privado, de manera en que nadie afuera va apoder manipular mis variables y tampoco llamar las variables o una funcion por el DOM) y tambien para proteger el mismo..... el patron modulo utiliza un sintaxis que es la siguiente
 * 
 * () => { };  "esto es llamar una funcion anonima"
 * 
 * 
 * si s enecesita llamar esta funcion inmediatamente despues de ser creada, entonces voy a poner....
 * 
 * (() => { 
 * 
 * })();
 * 
 * esto es denominado como funcion anonima autoinvocada
 * 
 *
 */


const miModulo= (() =>{
    
  'use strict'; // Le dice a Js que sea estricto al ejecutar este codigo 

  // esto se conoce como patron modulo, el cual es util por michas razones una de ellas es porteger el codigo de la interaccion del usuario en el navegador 


 let deck         = [ ];
 const tipos      = [`C`, 'D', 'H', 'S'],
       especiales = [`A`, 'J', 'Q', 'K'];


 // let puntosJugador = 0,
 //     puntosComputadora = 0;
 let puntosJugadores = [];

 //Referencias del html
 const btnNuevo            = document.querySelector ('#btnNuevo'),
       btnPedir            = document.querySelector( '#btnPedir'),
       btnDetener          = document.querySelector ('#btnDetener');

 const divCartasJugadores = document.querySelectorAll ('.divCartas'),
       puntosHTML = document.querySelectorAll('small');

       
       //     esta ducnion inicializa el juego 
       const inicializarJuego = ( numJugadores = 2) =>{
         
           
           puntosJugadores = []
           
           for ( let i= 0;i<numJugadores;i++){
               puntosJugadores.push(0);
            }
            
            puntosHTML.forEach( elem => elem.innerText = 0);
            divCartasJugadores.forEach (elem => elem.innerText = '');
            
            btnDetener.disabled = false;
            btnPedir.disabled = false;

  
     
    } 
    
    
     deck = crearDeck ( tipos, especiales );
    // importacion/exportacion de manera individual

    // deck = crearNuevoDeck ( tipos, especiales );
    // cambio de nombre atra vez del As al importar de manera individual

    // deck = cualquierNombreParaCrearUNNUevoDeck ( tipos, especiales );
    // importacion/exportancion de manera por defecto 

  
     // turno : 0 =primer jugador y el ultimo sera la computadora 
      
     const acumularPuntos =( carta, turno ) => {


             puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
             puntosHTML[turno].innerText = puntosJugadores[turno];
             return puntosJugadores[turno]

         }

     

     const determinarGanador = () =>{
         const [puntosMinimo, puntosComputadora] = puntosJugadores



         setTimeout(() => {
             if ( puntosComputadora === puntosMinimo ){
                 alert('Nadie gana :(');
                 } else if (puntosMinimo > 21) {
                     alert ('Computadora gana')
                 } else if (puntosComputadora > 21) {
                     alert ('Jugador gana')         
                 } else {
                     alert ('Computadora gana')
                 }
         }, 100 );

     }

     //  turno de la computador
     const turnoComputadora = ( puntosMinimo)  => {
             let puntosComputadora = 0;

         do {
             const carta = pedirCarta( deck); 
             puntosComputadora = acumularPuntos(carta,puntosJugadores.length - 1);
             crearCarta(carta,puntosJugadores.length - 1);   
         } while ( (puntosComputadora < puntosMinimo) && ( puntosMinimo <= 21 )  );

         determinarGanador ();
                 
     }

     /* const valor = valorCarta ( pedirCarta() );
     console.log({valor}); */


     /* DOM
     Document Objet model, que es basicamente un cojunto de objetos anidados para crear un documento HTML. la idea del DOm es tener acceso dinamico a traves de la programacion a sus elementos HTML y poder manipularlos utilizando unas setencias especiales que solo van a funcionar si estan ejecutnado el codigo de JS  en el navegador web. se utiliza las palabras reservada document.queryselector*/



 // Eventos

 btnPedir.addEventListener('click', () => {
    
     const carta = pedirCarta( deck);
     const puntosJugador = acumularPuntos( carta, 0 );
      crearCarta (carta, 0)
     

     if ( puntosJugador > 21 ) {
         console.warn( 'lo siento, perdiste ');
         btnDetener.disabled = true;
         btnPedir.disabled = true;
         turnoComputadora(puntosJugador);

     } else if ( puntosJugador === 21 ){
         console.warn('21, Genial');
         btnDetener.disabled = true;
         btnPedir.disabled = true;
         turnoComputadora(puntosJugador);
     }
 } )



 btnDetener.addEventListener ('click',() => {
     btnDetener.disabled = true;
     btnPedir.disabled = true;
     
     turnoComputadora( puntosJugadores[0])
     
 })


  btnNuevo.addEventListener ('click', () =>{
     inicializarJuego();
 } ) ;

 return {
     // lo que se que se coloque dentro de este ultimo return que esta dentro del modulo sera publico peros olo se podra acceder a el mediante el modulo 
     nuevoJuego: inicializarJuego
 }
}) ();



/** contexto de las optimizaciones realizadas en el laboratorio de black jack que fue realizado en 3 videos. aqui un breve resumen de cada uno de ellos y de los arreglos que se hicecieron 
* 
* optimizacion parte 1: en este video se optimizo las variables const repetidas, dando a entender que cada una se puede separar con una simple coma y posterior a ello colocar otra constante asi se reducia el codigo al menos un poco, tambien se reduce los return, en el archivo original de Js de este laboratio se puede visualizar que algunos return son llamados antes para luego ejecutarlos, eos no tendira sentido y se puede reducir llamando el return al evento que se requeira realizar ejemplo en  "Assets\js\seccion 5\01-laboratorio black jack\Assets\js\blackjack.js L:49" ( deck =_.shufle (deck)=== corriguendo esto a return _.shufle (deck) otro ejemplo en la L:60. tambien se lle colocar una const para crear el deck ya que atravez de ella se haran las otras optimizacion como el numero de jugadores y el puntaje. (L:50 del presente documento) a tra vez de un for para asi crear el ciclo 
* 
* 
* optimizacion parte 2: en este video se optimizo la acumulacion de los puntos ya que este se repite de forma individual. optimiza en L:109 del documento presente, donde se crea una variable dandole como condicon por turno siendo 0 el jugador y el ultimo la coputadora. este es llamado en la variable del evento en computadora/jugador  en L:151 y L:172 identificada de la manera antes explicada. tambien la optimizacion del reincio a 0 de la modificacion del puntaje L:47, L:59 L:113.. y Tambien se optimiza la introduccion de las cartas en imagenes, realizando un cambio en el index dandole una class por igual a ambos div donde se introduce la imagen de la carta llamando a ese div por una constante en el DOM luego creando una const en L:118 y cargando las imagenesatravez de ella, para luego llamar esa funcion creada en cada jugador con su respectivo identificador 0, -1
* 
* optmizacvion parte 3: en este vide se optimizo la respuedsta apra determianr el ganador simplemente creadno una constante en L:126 con los paramentros y luego llamando esa constante despues de que jugara la computadora. tambien se optimiza el botn nuevo juego, eliminando el reinciico por elemento y colocando un arreglo nuevo en L:59 y L:60 s epuiede visualizar cuales arreglos se utilizaron 
* 
*/

