
/**
 * 
 * @param {Array <string>} deck  es un arreglo string
 * @returns {string} retorna la carta del deck
 */

    // Esta funcion me permite tomar una carta. 
     export const pedirCarta = (deck) => {

        

        if ( !deck || deck.length === 0){
            throw 'No hay cartas en el deck'; 
        }
 
     return deck.pop(); //deck.pop( remueve el ultmo elemento y devuelve)
 }


