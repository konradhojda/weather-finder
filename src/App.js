import React, {Component} from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from "./components/Weather";
import axios from "axios";

const API_KEY = '6e54d4d49a16d56ef4756ec5a1439e7d';

class App extends Component {

    state = {
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        error: null
    };

    getWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
            .then(response => response.data).then(data => {
            if (city && country) {
                this.setState({
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: ''
                });
            }
        }).catch(() => {
            this.setState({error: 'Please fill blank areas'})
        });
    };

    render() {

        const showWeather = (
            <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}/>
        );

        return (
            <>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                {showWeather}
            </>
        );
    }
}

export default App;
