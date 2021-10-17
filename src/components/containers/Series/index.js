import React, { Component } from "react";
import SeriesList from '../SeriesList';

class Series extends Component {
    constructor() {
        super();
        this.state = {
        series: []
        }
    }

    onSeriesInputChange = (event) => {
        fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
        .then((response) => {
        return response.json()
        })
        .then((data) => {
        this.setState({ series: data });
        })
        .catch((err) => {
        console.log(err);
        });
        console.log(event.target.value);
    }
        
    render() {
        return (
            <div>
                The length of series array = {this.state.series.length}
                <div>
                    <input type='text' onChange={this.onSeriesInputChange} />
                </div>
                <SeriesList list={this.state.series} />
            </div>
        );
    }
}

export default Series;