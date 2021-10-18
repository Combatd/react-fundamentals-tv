import React, {Component} from 'react';
import loaderSrc from '../../assets/gura-gura-a.gif';

class Loader extends Component {
    render() {
        return (
            <div>
                <img 
                alt='loader icon'
                src={loaderSrc} />
            </div>
        )
    }
}

export default Loader;