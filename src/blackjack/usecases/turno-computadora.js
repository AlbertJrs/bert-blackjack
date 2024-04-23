import { crearCarta } from "./crear-carta";
import { pedirCarta } from "./pedir-carta";
import { crearDeck } from "./crear-deck";


const tipos      = [`C`, 'D', 'H', 'S'],
   especiales = [`A`, 'J', 'Q', 'K'];
//  turno de la computador
export const turnoComputadora = ( puntosMinimo)  => {
    let puntosComputadora = 0;
    let deck = crearDeck ( tipos, especiales );

do {
    const carta = pedirCarta( deck); 
    puntosComputadora = acumularPuntos(carta,puntosJugadores.length - 1);
    crearCarta(carta,puntosJugadores.length - 1);   
} while ( (puntosComputadora < puntosMinimo) && ( puntosMinimo <= 21 )  );

determinarGanador ();
        
}