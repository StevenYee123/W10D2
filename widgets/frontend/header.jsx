import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.selectHeader = this.selectHeader.bind(this);
    }

    selectHeader(){
        this.props.selectTab(this.props.idx);
    }

    render(){
        // const bolded = this.props.selected ? ;
        let bolded = "";
        if (this.props.selected) bolded = "selected-header";
        return (
            <li onClick={this.selectHeader} className={bolded}>
                <header>{this.props.title}</header>
            </li>
        )
    }
}

export default Header;