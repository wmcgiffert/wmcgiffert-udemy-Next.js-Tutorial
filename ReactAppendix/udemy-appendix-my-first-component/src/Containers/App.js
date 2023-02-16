import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components//Scroll";
import './App.css';
import ErrorBoundry from "../Components/ErrorBoundry";


function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
        console.log(count);
    }, [count]); 

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? 
        <h1 className="tc">Loading</h1>:
        (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click Me! The count is {count}</button>
            <SearchBox searchChange = {onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;