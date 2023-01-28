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
                } else {
                    decodedCode += 'T';
                }
            } else if (length === 2) {
                // Decode 2 characters
                if (item.charAt(0) === '*') {
                    if (item.charAt(1) === '*') {
                        decodedCode += 'I';
                    } else {
                        decodedCode += 'A';
                    }
                } else {
                    if (item.charAt(1) === '*') {
                        decodedCode += 'N';
                    } else {
                        decodedCode += 'M';
                    }
                }
            } else if (length === 3) {
                // Decode 3 character
                if (item.charAt(0) === '*') {
                    if (item.charAt(1) === '*') {
                        if (item.charAt(2) === '*') {
                            decodedCode += 'S';
                        } else {
                            decodedCode += 'U';
                        }
                    } else {
                        if (item.charAt(2) === '*') {
                            decodedCode += 'R';
                        } else {
                            decodedCode += 'W';
                        }
                    }
                } else {
                    if (item.charAt(1) === '*') {
                        if (item.charAt(2) === '*') {
                            decodedCode += 'D';
                        } else {
                            decodedCode += 'K';
                        }
                    } else {
                        if (item.charAt(2) === '*') {
                            decodedCode += 'G';
                        } else {
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
                            } else {
                                decodedCode += 'V';
                            }
                        } else {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'F';
                            } else {
                                decodedCode += 'Ü';
                            }
                        }
                    } else {
                        if (item.charAt(2) === '*') {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'L';
                            } else {
                                decodedCode += 'Ä';
                            }
                        } else {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'P';
                            } else {
                                decodedCode += 'J';
                            }
                        }
                    }
                } else {
                    if (item.charAt(1) === '*') {
                        if (item.charAt(2) === '*') {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'B';
                            } else {
                                decodedCode += 'X';
                            }
                        } else {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'C';
                            } else {
                                decodedCode += 'Y';
                            }
                        }
                    } else {
                        if (item.charAt(2) === '*') {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'Z';
                            } else {
                                decodedCode += 'Q';
                            }
                        } else {
                            if (item.charAt(3) === '*') {
                                decodedCode += 'Ö';
                            } else {
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
