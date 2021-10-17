import React, { Component } from "react";
import SeriesList from '../SeriesList';

class Series extends Component {
    constructor() {
        super();
        this.state = {
        series: [],
        seriesName: '',
        isFetching: false,
        }
    }

    onSeriesInputChange = (event) => {
        this.setState({  
            seriesName: event.target.value,
            isFetching: true
        })
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
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                The length of series array = {this.state.series.length}
                <div>
                    <input 
                    value={seriesName}
                    type='text' 
                    onChange={this.onSeriesInputChange} />
                </div>
                <SeriesList list={this.state.series} />
            </div>
        );
    }
}

export default Series;