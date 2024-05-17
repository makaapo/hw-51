import React, { useState } from 'react';
import Ball from './components/Ball/Ball';
import './App.css';

const initialNumbers: number[] = [5, 11, 16, 23, 32];

const generateNumbers = (): number[] => {
    const numbers: number[] = [];
    while (numbers.length < 5) {
        const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
        if (!numbers.includes(randomNumber)) {
            const insertIndex = numbers.findIndex((num) => num > randomNumber);
            if (insertIndex === -1) {
                numbers.push(randomNumber);
            } else {
                numbers.splice(insertIndex, 0, randomNumber);
            }
        }
    }
    return numbers;
};

const App: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>(initialNumbers);

    const handleNewNumbers = (): void => {
        setNumbers(generateNumbers());
    };

    return (
        <div className="App">
            <div className="balls">
                {numbers.map((number) => (
                    <Ball key={number} number={number} />
                ))}
            </div>
            <button onClick={handleNewNumbers}>New numbers</button>
        </div>
    );
};

export default App;
