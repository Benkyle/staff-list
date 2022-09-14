import React from "react";
import Card from "./Card";
import { robots } from "./Robots";


const App = () => {
    return (
        <div>
            <h1>Staff Information</h1>
            <Card robots={robots} />
        </div>
    );
}


export default App;