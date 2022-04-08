import { useState } from 'react'
import PropTypes from 'prop-types'

const CountButton = ( { step } ) => {

    const [initial, setInitial] = useState(0)
    const [Ultimos, setUltimos] = useState([])
    
    const contador = () => {
        
        setInitial(initial + step)
        setUltimos(Ultimos.concat(initial))
       
    }
    
    return (
        <>
        <button onClick={contador}>
            {initial}
        </button>
        <div>Ultimos: {Ultimos.join(', ')}</div>
        </>
    )

    
}
CountButton.defaultProps = {
    step: 1
}

CountButton.propTypes = {
    count: PropTypes.number
}


export default CountButton