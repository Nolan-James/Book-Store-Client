import React from "react";
import axios from "axios";
import baseUrl from './config';

function App() {
    axios(`${baseUrl}/api/v1/books`).then(books => {
        console.log(books);
    })
    return (
        <div>
            My First component
        </div>
    );
}

export default App;