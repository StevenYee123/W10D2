import React from "react";

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
        this.interval = null;
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
        this.interval = null;
    }

    tick(){
        this.setState({time: new Date()});
    }

    render(){
        return (
            <div className="clock-container">
                <h1>Da Clock</h1>
                <div className="clock">
                    <div className="clock-time">
                        <strong>Time: </strong>
                        <span>{this.state.time.toTimeString()}</span>
                    </div>
                    <div className="clock-date">
                        <strong>Date: </strong>
                        <span>{this.state.time.toDateString()}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clock;