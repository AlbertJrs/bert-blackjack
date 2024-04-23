import _ from 'underscore';


export const miNombre =' albert'
// lo que fue realizado aqui es una exportacion  independiente o individual, index.js:3


// lo reaqlizado aqui es para que al importar una funcion  se sepa el origen y que coocar en la funcion sin venir a cada archivo por separado (se puede visualizar un ejeplo de lo realizado colocando el cursosr encima de crearDeck )

/**
 * esta funcion crea un nuevo deck
 * @param {Array <string>} tiposDeCarta ejemplo: [`C`, 'D', 'H', 'S'],
 * @param {Array <string>} tiposEspeciales ejemplo: [`A`, 'J', 'Q', 'K'];
 * @returns {Array } retorna un nuevo deck de cartas
 */


export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    
    if ( !tiposDeCarta || tiposDeCarta.length ===0 )
         throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    
    if ( !tiposEspeciales || tiposEspeciales.length ===0 )
         throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    


    let deck = []

    // deck = [];

    for(let i =2; i <= 10; i++){
        for ( let tipo of tiposDeCarta ){ 
            deck.push (i + tipo);
        }
    }

    for ( let tipo of tiposDeCarta ){
        for (let esp of tiposEspeciales)  {
            deck.push (esp + tipo);
        }
    }
    
    return _.shuffle(deck); /* underscode para organizar aleatoriamente*/ 
}


// export default crearDeck;
// siendo esto una exportacion por defecto se puede crear en index.js:9


// SOLO SE PUEDE TEBNER UNA EXPORTACION POR DEFECTO POR ARCHIVO