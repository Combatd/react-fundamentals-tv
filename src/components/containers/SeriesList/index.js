import React from 'react';
import './index.css';

const SeriesListItem = (props) => {
    const { series } = props;
    return(
        <li key={series.show.id}>
            {series.show.name}
        </li>
    )
}

const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
                {props.list.map((series) => {
                    return (
                        <SeriesListItem series={series} />
                    )
                })}
            </ul>
        </div>
    );
}

export default SeriesList;