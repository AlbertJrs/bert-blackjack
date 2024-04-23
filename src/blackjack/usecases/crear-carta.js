/**
 * 
 * @param {String} carta 
 * @param {*} turno
 * 
 */

export const crearCarta = (carta, turno) => {
    if (!carta ) throw Error ('la carta es un argumente obligatorio ');

    const divCartasJugadores = document.querySelectorAll ('.divCartas');

    const imgCarta = document.createElement('img');
        imgCarta.src= `Assets/cartas/${carta}.png`;
        imgCarta.classList.add( 'carta');
        divCartasJugadores[turno].append (imgCarta)

        return imgCarta
}