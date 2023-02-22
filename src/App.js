import './App.css';
import axios from "axios";
import {useRef, useState} from 'react';

function App() {
    const inputRef = useRef(null);

    const [updated, setUpdated] = useState('');

    const handleClick = () => {
        // 👇 "inputRef.current.value" is input value
        setUpdated(inputRef.current.value);
    };

    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts"
    });


    return (
        <div className="App">
            <p>
                What is your name
            </p>
            <input ref={inputRef}
                   type="text"
                   id="message"
                   name="message"/>
            <button onClick={handleClick}>submit</button>
            <p>{updated && 'hello'} {updated}</p>
        </div>
    );
}

export default App;
