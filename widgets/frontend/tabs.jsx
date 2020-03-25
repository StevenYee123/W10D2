import React from 'react';
import Header from './header';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0
        };

        this.selectTab = this.selectTab.bind(this);
    }

    // update Tab position when given idx
    selectTab(idx){
        this.setState({position: idx});
    }

    render() {
        const titleLis = this.props.tabs.map((tab, idx) => {
            return (
                <Header key={tab.title} title={tab.title} selected={this.state.position === idx} 
                selectTab={this.selectTab} idx={idx}/>
            );
        });

        return (
            <div className="tabs-container">
                <h1>Dese Tabs</h1>
                <div className="tabs">
                    <ul className="tabs-titles">
                        {titleLis}
                    </ul>
                    <article className="tabs-content">
                        {this.props.tabs[this.state.position].content}
                    </article>
                </div>
            </div>
        )
    }
}

export default Tabs;