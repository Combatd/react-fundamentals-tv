import React from 'react';
import './index.css';

const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
                {props.list.map((series) => {
                    return(
                        <li key={series.show.id}>
                            {series.show.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default SeriesList;