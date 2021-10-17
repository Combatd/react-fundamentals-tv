import React, { Component } from "react";
import SeriesList from '../SeriesList';

class Series extends Component {
    constructor() {
        super();
        this.state = {
        series: []
        }
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        .then((response) => {
        return response.json()
        })
        .then((data) => {
        this.setState({ series: data });
        })
        .catch((err) => {
        console.log(err);
        });
    }
        
    render() {
        return (
            <div>
                The length of series array = {this.state.series.length}
                <SeriesList list={this.state.series} />
            </div>
        );
    }
}

export default Series;