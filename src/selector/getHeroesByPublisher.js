import { heroes } from "../data/heroes"


export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = ['Marvel Comics', 'DC Comics'];

    if(!validPublisher.includes( publisher ) ){
        throw new Error( `${ publisher } no es valido`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher);

}