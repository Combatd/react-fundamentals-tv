import React from 'react';
import './index.css';

const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
                {props.list.map((series) => {
                    return(
                        <li>
                            {series.show.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default SeriesList;