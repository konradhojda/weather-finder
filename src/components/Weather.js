import React, {Component} from 'react';

class Weather extends Component {
    render() {
        return (
            <div>
                <p>Location: {this.props.city}, {this.props.country}</p>
                <p>Temperature: {this.props.temperature}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Description about weather: {this.props.description}</p>
                <p>Any error? : {this.props.error}</p>
            </div>
        );
    }
}

export default Weather;
