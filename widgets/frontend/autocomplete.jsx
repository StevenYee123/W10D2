import React from 'react';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
        };
        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(e) {
        const inputVal = e.currentTarget.value;
        this.setState({inputVal});
    }

    render() {
        const foundNames = [];
        const that = this;
        this.props.names.forEach((name) => {
            // debugger
            if (name.slice(0, that.state.inputVal.length).toLowerCase() === that.state.inputVal.toLowerCase()) foundNames.push(
                <li>{name}</li>
            );
        });

        return (
            <div className="auto-container">
                <h1>Dat Autocomplete</h1>
                <div className="auto">
                    <input type="text" placeholder="Search..." onChange={this.updateInput}/>
                    <ul>
                        {foundNames}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Autocomplete;