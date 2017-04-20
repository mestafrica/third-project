import React from 'react';
import axios from 'axios';
class Weather extends React.Component {
    constructor() {
        super();

        this.state = {
            coords: {
                lat: 0,
                lng: 0
            }
        }
    }

    componentWillMount() {
        console.log('will mount');

        window.navigator.geolocation.getCurrentPosition((geo) => {
            let coords = geo.coords;

            this.setState({
                coords: {
                    lat: coords.latitude,
                    lng: coords.longitude
                }
            });
            console.log(this.state);
        }, (err)=> {
            console.log(err);
        });

        let url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e79f612637829c73099fa1926ed257c5';

        axios({
            url: url,
            method: 'get',
            })
            .then(function (response) {
                //todo: handle response
                console.log(response);
            })
            .catch(function (error) {
                //todo: handle error
                console.log(error);
            });
    }

    componentDidMount() {
        console.log('did mount');
    }

    render() {
        return <h2>Weather</h2>
    }
}

export default Weather;