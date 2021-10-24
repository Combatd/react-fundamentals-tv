import React, { Component } from 'react';

class SingleSeries extends Component {
    render() {
        const {id} = this.props.match.params;
        return(
            <div>
                <p>Single Series: show id is {id}</p>
            </div>
        )
    }
}

export default SingleSeries;