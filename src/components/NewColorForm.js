// NewColorForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
    const [color, setColor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
        navigate('/colors');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Color:
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </label>
            <button type="submit">Add Color</button>
        </form>
    );
};

export default NewColorForm;
