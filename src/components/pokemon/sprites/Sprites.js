import React, { useContext, useState, Fragment } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Sprites = () => {
    const pokemonContext = useContext(PokemonContext);

    const [isShiny, setIsShiny] = useState(false);

    const { sprite } = pokemonContext;

    const onClick = () => {
        if (isShiny === false) {
            setIsShiny(true)
        } else {
            setIsShiny(false)
        }
    }

    return (
        <Fragment>
            <div className='spriteHolder'>
                <img src={!isShiny ? sprite.front_default : sprite.front_shiny} alt="" className='sprites' onClick={onClick} />
                <img src={!isShiny ? sprite.back_default : sprite.back_shiny} alt="" className='sprites' onClick={onClick} />

            </div>
            <p>Want to see the shiny version? Click on the pokemon!</p>
        </Fragment>
    )
}

export default Sprites


{/* <img src={sprite.front_default} alt="" className='sprites' onClick={onClick} />
<img src={sprite.back_default} alt="" className='sprites' onClick={onClick} /> */}