import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const SeriesListItem = (props) => {
    const { series } = props;
    return(
        <li> 
            <Link to={`/series/${series.show.id}`}>
                {series.show.name}
            </Link>
        </li>
    )
}

const SeriesList = (props) => {
    return (
        <div>
            <ul className="series-list">
                {props.list.map((series) => {
                    return (
                        <SeriesListItem  series={series} key={series.show.id} />
                    )
                })}
            </ul>
        </div>
    );
}

export default SeriesList;