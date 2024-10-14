// ColorDetail.js
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const ColorDetail = ({ colors }) => {
    const { color } = useParams();
    if (!colors.includes(color)) {
        return <Navigate to="/colors" />;
    }

    return (
        <div style={{ backgroundColor: color, height: '100vh' }}>
            <h1>{color}</h1>
        </div>
    );
};

export default ColorDetail;
