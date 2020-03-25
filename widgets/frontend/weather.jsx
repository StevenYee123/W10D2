import React from 'react';

// API Key: 67e1a392756cae05f888f6b42d8f012e
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            temperature: null 
        };
    }

    // C = K -273.15;
    componentDidMount(){ 
        navigator.geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords
            
            //step 1 - create xhr object
            const xhr = new XMLHttpRequest();
            
            xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=67e1a392756cae05f888f6b42d8f012e`);
    
            xhr.onload = () => {
                const res = JSON.parse(xhr.response);
                this.setState({
                    location: res.name,
                    temperature: Math.floor(res.main.temp - 273.15)
                });
            }

            xhr.send();
            
        });
    }

    render() {
        let display = (<p>loading weather...</p>);
        if (this.state.location) {
            display = (
                <>
                    <p>{this.state.location}</p>
                    <p>{this.state.temperature} degrees C</p>
                </>
            );
        }

        return (
            <div className="weather-container">
                <h1>Dem Weather</h1>
                <div className="weather">
                    {display}
                </div>
            </div>
        )
    }

}

export default Weather;