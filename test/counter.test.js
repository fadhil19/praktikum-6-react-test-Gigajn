import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';
import Display from './display';

describe('Counter Component', () => {
    test('renders the initial count value as 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        expect(countValue).toHaveTextContent('0');
    });
    test('increments count when increment button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('1');
    });
    test('decrements count when decrement button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('-1');
    });
    test('Reset count when decrement button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const resetButton = screen.getByText('Reset');
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('1');
        fireEvent.click(resetButton);
        expect(countValue).toHaveTextContent('0');
    });
    test('Display shows the correct value from Counter', () => {
        render(<Counter />);

        const countValue = screen.getByTestId('counter-value');

        // Ambil nilai dari count yang ada di Counter
        const count = parseInt(countValue.textContent);
        render(<Display value={count} />);
        const displayValue = screen.getByTestId('display-value');

        // Pastikan Display menampilkan nilai yang benar pada render pertama
        expect(displayValue).toHaveTextContent('Value: 0');
    });
});
