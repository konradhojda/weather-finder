import React, {Component} from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from "./components/Weather";
import axios from "axios";

const API_KEY = '6e54d4d49a16d56ef4756ec5a1439e7d';

class App extends Component {

    getWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
            .then(response => console.log(response.data) );
    };

    render() {

        return (
            <>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather/>
            </>
        );
    }
}

export default App;
