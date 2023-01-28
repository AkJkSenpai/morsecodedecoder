import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const headerElement = screen.getByText('Morsecode decoder');
    expect(headerElement).toBeInTheDocument();
});

const dummyCodes = [
    {
        code: '*',
        expected: 'E'
    },
    {
        code: '-',
        expected: 'T'
    },
    {
        code: '**',
        expected: 'I'
    },
    {
        code: '*-',
        expected: 'A'
    },
    {
        code: '-*',
        expected: 'N'
    },
    {
        code: '--',
        expected: 'M'
    },
    {
        code: '***',
        expected: 'S'
    },
    {
        code: '**-',
        expected: 'U'
    },{
        code: '*-*',
        expected: 'R'
    },
    {
        code: '*--',
        expected: 'W'
    },
    {
        code: '-**',
        expected: 'D'
    },
    {
        code: '-*-',
        expected: 'K'
    },
    {
        code: '--*',
        expected: 'G'
    },
    {
        code: '---',
        expected: 'O'
    },
    {
        code: '****',
        expected: 'H'
    },
    {
        code: '***-',
        expected: 'V'
    },
    {
        code: '**-*',
        expected: 'F'
    },
    {
        code: '**--',
        expected: 'Ü'
    },
    {
        code: '*-**',
        expected: 'L'
    },
    {
        code: '*-*-',
        expected: 'Ä'
    },
    {
        code: '*--*',
        expected: 'P'
    },
    {
        code: '*---',
        expected: 'J'
    },
    {
        code: '-***',
        expected: 'B'
    },
    {
        code: '-**-',
        expected: 'X'
    },
    {
        code: '-*-*',
        expected: 'C'
    },
    {
        code: '-*--',
        expected: 'Y'
    },
    {
        code: '--**',
        expected: 'Z'
    },
    {
        code: '--*-',
        expected: 'Q'
    },
    {
        code: '---*',
        expected: 'Ö'
    },
    {
        code: '----',
        expected: 'Š'
    },
];

test('decoding morsecode', () => {
    render(<App />);

    const inputField = screen.getByTestId('inputField');
    const submitButton = screen.getByTestId('submitButton');
    const code = screen.getByTestId('code');

    dummyCodes.forEach(element => {
        fireEvent.change(inputField, { target: { value: element.code} })
        fireEvent.click(submitButton);
        expect(code).toHaveTextContent(element.expected);
    });
});