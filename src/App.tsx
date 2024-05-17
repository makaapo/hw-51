import React from 'react';
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
console.log(initialNumbers)
console.log(generateNumbers())

const App: React.FC = () => {

    return (
        <div className="App">

        </div>
    );
};

export default App;
