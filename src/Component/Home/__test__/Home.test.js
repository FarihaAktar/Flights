import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../Home';

test("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div)
})
