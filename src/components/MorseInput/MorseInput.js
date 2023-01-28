import React from 'react';
import './MorseInput.css';

const MorseInput = ({onClick, onChange, onKey}) => {
    return(
        <div>
            <hr />
            <h3>Use "*" for short ticks and "-" for long ticks. You can use "/" for space. All characters must be separated with a space.</h3>
            <h4>Example: **** * *-** *-** --- / *-- --- *-* *-** -** = HELLO WORLD</h4>
            <div>
                <input className='field' data-testid='inputField' onChange={onChange} />
                <input className='button' data-testid='submitButton' type={'submit'} onClick={onClick} />
            </div>
        </div>
    );
}

export default MorseInput;