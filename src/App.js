// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ColorsList from './components/ColorList';
import ColorDetail from './components/ColorDetail';
import NewColorForm from './components/NewColorForm';

const App = () => {
    const [colors, setColors] = useState(['red', 'blue', 'green']); // Example colors

    const addColor = (newColor) => {
        setColors([newColor, ...colors]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/colors" element={<ColorsList colors={colors} />} />
                <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
                <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
                <Route path="*" element={<Navigate to="/colors" />} />
            </Routes>
        </Router>
    );
};

export default App;
