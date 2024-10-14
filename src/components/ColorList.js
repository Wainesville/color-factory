// ColorsList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ColorsList = ({ colors }) => {
    return (
        <div>
            <h1>Colors</h1>
            <Link to="/colors/new">Add New Color</Link>
            <ul>
                {colors.map((color, index) => (
                    <li key={index}>
                        <Link to={`/colors/${color}`}>{color}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ColorsList;
