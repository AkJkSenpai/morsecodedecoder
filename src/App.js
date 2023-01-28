import './App.css';
import React from 'react';
import MorseInput from './components/MorseInput/MorseInput';

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        fieldValue: '',
        morseCode: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.decodeMorsecode = this.decodeMorsecode.bind(this);
    } 

    handleChange(e) {
        let length = e.target.value.length;
        const regex = new RegExp('^[*\-/\\s]+$');

        // Check if input length is invalid
        if (length > 4 || !regex.test(e.target.value)) {
            document.querySelector('.field').classList.add('dcInvalidInput');

            if (length > 4) {
                document.querySelector('.field').setAttribute('title', 'Max input length is 4')
            } else {
                document.querySelector('.field').setAttribute('title', 'Input can only contain characters *, -, / and space')
            }
        } else {
            document.querySelector('.field').classList.remove('dcInvalidInput');
            document.querySelector('.field').removeAttribute('title');
        }

        // Remove all errors if input is empty
        if (length === 0) {
            document.querySelector('.field').classList.remove('dcInvalidInput');
            document.querySelector('.field').removeAttribute('title');
        }

        this.setState({fieldValue: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.decodeMorsecode(this.state.fieldValue);
    }

    decodeMorsecode(code) {
        let decodedCode = '';
        let splitCode = code.split(' ');

        let newArr = splitCode.map((item) => {
            let length = item.length;

            if(length === 1) {
                // Decode 1 character
                if (item.charAt(0) === '*') {
                    decodedCode += 'E';
                } else if (item.charAt(0) === '/') {
                    decodedCode += ' ';
                } else if (item.charAt(0) === '-') {
                    decodedCode += 'T';
                }
            } else if (length === 2) {
                // Decode 2 characters
                if (item.charAt(0) === '*') {
                    if (item.charAt(1) === '*') {
                        decodedCode += 'I';
                    } else if (item.charAt(1) === '-') {
                        decodedCode += 'A';
                    }
                } else {
                    if (item.charAt(1) === '*') {
                        decodedCode += 'N';
                    } else if (item.charAt(1) === '-') {
                        decodedCode += 'M';
                    }
                }
            } else if (length === 3) {
                // Decode 3 character
                if (item.charAt(0) === '*') {
                    if (item.charAt(1) === '*') {
                        if (item.charAt(2) === '*') {
                            decodedCode += 'S';
                        } else if (item.charAt(2) === '-') {
                            decodedCode += 'U';
                        }
                    } else {
                        if (item.charAt(2) === '*') {
                            decodedCode += 'R';
                        } else if (item.charAt(2) === '-') {
                            decodedCode += 'W';
                        }
                    }
                } else {
                    if (item.charAt(1) === '*') {
                        if (item.charAt(2) === '*') {
                            decodedCode += 'D';
                        } else if (item.charAt(2) === '-') {
                            decodedCode += 'K';
                        }
                    } else {
                        if (item.charAt(2) === '*') {
                            decodedCode += 'G';
                        } else if (item.charAt(2) === '-') {
                            decodedCode += 'O';
                        }
                    }
                }
            } else if (length === 4) {
                // Decode 4 character
                if (item.charAt(0) === '*') {
                    if (item.charAt(1) === '*') {
                        if (item.charAt(2) === '*') {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'H';
                            } else if (item.charAt(3) === '-') {
                                decodedCode += 'V';
                            }
                        } else {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'F';
                            } else if (item.charAt(3) === '-') {
                                decodedCode += 'Ü';
                            }
                        }
                    } else {
                        if (item.charAt(2) === '*') {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'L';
                            } else if (item.charAt(3) === '-') {
                                decodedCode += 'Ä';
                            }
                        } else {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'P';
                            } else if (item.charAt(3) === '-') {
                                decodedCode += 'J';
                            }
                        }
                    }
                } else {
                    if (item.charAt(1) === '*') {
                        if (item.charAt(2) === '*') {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'B';
                            } else if (item.charAt(3) === '-') {
                                decodedCode += 'X';
                            }
                        } else {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'C';
                            } else if (item.charAt(3) === '-') {
                                decodedCode += 'Y';
                            }
                        }
                    } else {
                        if (item.charAt(2) === '*') {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'Z';
                            } else if (item.charAt(3) === '-') {
                                decodedCode += 'Q';
                            }
                        } else {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'Ö';
                            } else if (item.charAt(3) === '-') {
                                decodedCode += 'Š';
                            }
                        }
                    }
                }
            }
        });

        this.setState({morseCode: decodedCode});
    }

  render() {
    return(
      <div className='App'>
          <h1>Morsecode decoder</h1>
          <MorseInput onClick={this.handleSubmit} onChange={this.handleChange} />
          <p data-testid='code'>{this.state.morseCode}</p>
      </div>
    );
  }
}

export default App;
