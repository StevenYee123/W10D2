import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

const Root = () => (
    <div>
        <Clock />
        <Weather />
        <div className = "besties">
            <Tabs tabs={[
                {title: "one", content: "I am the first"},
                {title: "two", content: "Second pane here"},
                {title: "three", content: "Third pane here"}
            ]}/>
            <Autocomplete names={["Abba", "Barney", "Barbara", "Jeff", "Jenny", "Sarah", "Sally", "Steve", "Xander"]}/>
        </div>
    </div>
);

export default Root;
