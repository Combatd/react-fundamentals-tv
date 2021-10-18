import React, { Component } from "react";
import SeriesList from '../SeriesList';
import Loader from "../../Loader";

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
        this.setState({ series: data, isFetching: false });
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
                { 
                    isFetching && series.length === 0 && seriesName.trim() === '' 
                    &&
                    <p>Please enter series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== '' 
                    &&
                    <p>No TV series has been found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }               
            </div>
        );
    }
}

export default Series;