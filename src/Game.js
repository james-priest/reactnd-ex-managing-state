import React from 'react';

class Game extends React.PureComponent {
  constructor (props) {
    super(props);
    const gameNumArr = this.generateNums();
    this.state = {
      value1: gameNumArr[0],
      value2: gameNumArr[1],
      value3: gameNumArr[2],
      proposedAnswer: gameNumArr[3]
    }
  }
  
  generateNums = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  }
  
  onButtonClick = e => {
     this.props.onButtonClick(e);
  }
  render() {
    // const { onButtonClick } = this.props;
    console.log(`Game component rendered`);
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={(e) => this.onButtonClick(e)}>True</button>
        <button onClick={this.onButtonClick}>False</button>
      </div>
    )
  }
}

export default Game;