import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
    it('should render with initial count of 0', () => {
        render(<Counter />);
        const counterValue = screen.getByTestId('counter-value');
        expect(counterValue).toHaveTextContent('0');
    });

    it('should increment the count when Increment button is clicked', () => {
        render(<Counter />);
        const incrementButton = screen.getByTestId('increment-button');
        fireEvent.click(incrementButton);
        const counterValue = screen.getByTestId('counter-value');
        expect(counterValue).toHaveTextContent('1');
    });

    it('should decrement the count when Decrement button is clicked', () => {
        render(<Counter />);
        const decrementButton = screen.getByTestId('decrement-button');
        fireEvent.click(decrementButton);
        const counterValue = screen.getByTestId('counter-value');
        expect(counterValue).toHaveTextContent('-1');
    });

    it('should reset the count to 0 when Reset button is clicked', () => {
        render(<Counter />);
        const incrementButton = screen.getByTestId('increment-button');
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton); // Count becomes 2
        const resetButton = screen.getByTestId('reset-button');
        fireEvent.click(resetButton);
        const counterValue = screen.getByTestId('counter-value');
        expect(counterValue).toHaveTextContent('0');
    });
});

describe('Greeting Component', () => {
    it('should render the correct greeting message with the provided name', () => {
        render(<Greeting name="John" />);
        const greetingElement = screen.getByTestId('greeting');
        expect(greetingElement).toHaveTextContent('Hello, John');
    });

    it('should render the correct greeting message when the name changes', () => {
        const { rerender } = render(<Greeting name="Alice" />);
        let greetingElement = screen.getByTestId('greeting');
        expect(greetingElement).toHaveTextContent('Hello, Alice');

        // Re-render with a new name
        rerender(<Greeting name="Bob" />);
        greetingElement = screen.getByTestId('greeting');
        expect(greetingElement).toHaveTextContent('Hello, Bob');
    });
});


describe('AlertButton Component', () => {
    it('should trigger alert with correct message when button is clicked', () => {
        const alertMessage = 'Hello, World!';
        window.alert = jest.fn(); // Mock the alert function

        render(<AlertButton message={alertMessage} />);
        const alertButton = screen.getByTestId('alert-button');

        fireEvent.click(alertButton); // Trigger click event

        // Check if alert was called with the correct message
        expect(window.alert).toHaveBeenCalledWith(alertMessage);
    });
});

