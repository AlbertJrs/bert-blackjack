


export const determinarGanador = () =>{
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