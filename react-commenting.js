// ASSESSMENT 4: REACT ASSESSMENT
// As a developer, you are tasked with commenting this code.
// There are 13 sections that need comments.
// Each section is marked with // Here: for JavaScript code and {/* Here: */} for JSX code.
// Comments will describe the code on the line below the comment marks.

import React, { Component } from 'react'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        {/* 1) Here: this is parent calling on a child class  */}
        <Board />
      </div>
    )
  }
}

class Board extends Component{
  constructor(){
    super()
    // 2) Here: the state of the Class: Board; the state of Board has three attributes which have the keys(gameboard, currentplayer, and winner)
    //instances of Board will inherit these attributes with the automatic values listed in Board
    this.state = {
      gameBoard: Array(9).fill(null),
      currentPlayer: "🦄",
      winner: null,
    }
  }

  gamePlay = (index) => {
    // 3) Here: desctructured this.state for gameBoard, currentPlayer, winner, and clickCount to allow for writing code more simply 
    const { gameBoard, currentPlayer, winner, clickCount } = this.state
    // 4) Here:  this is a conditional statement that uses a ternary to change the state of currentPlayer (will be an emoji). The current state of currentPlayer is used as the comparision for the conditional and functions as a toggle. This conditional causes a toggling of which symbol populates the gameboard[i] that is selected. 
    if(gameBoard[index] === null && winner === null){
      gameBoard[index] = currentPlayer
      this.setState({
        gameBoard: gameBoard,
        currentPlayer: currentPlayer === "🦄" ? "🦆" : "🦄",
        clickCount: clickCount+1
      })
    }
    if(winner === null){
      // 5) Here: this is a conditional statement that calls the function, winning, if winner is null. The function winning lists the winning conditions and will evaluate the board to determine if winning is met
      this.winning()
    }
  }

  winning = () => {
    const { currentPlayer, gameBoard } = this.state
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winningConditions.map(value => {
      // I don't inderstand the code below.. maybe we could go over this in class if we have time
      const [a, b, c] = value
      if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        // 6) Here: this is setting the state of winner to equal the variable currentPlayer
        this.setState({
          winner: currentPlayer
        })
      }
    })
  }

  render(){
    const { gameBoard, currentPlayer, winner } = this.state
    // 7) Here: map function that iterates through gameBoard; and returns an insance of Square with the listed props passed into each
    let mappedGameBoard = gameBoard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          {/* 8) Here: this is passing this instance of the prop game play to be assigned to the key "gameplay. " */}
          gamePlay={ this.gamePlay }
        />
      )
    })
    return(
      <div>
        <h1>Tic Tac Toe</h1>

          <div className="statusDiv">
            {/* 9) Here: This is rendering The current player in a string */}
            The Current Player is: { currentPlayer }
          </div>

          <div className="statusDiv">
            {/* 10) Here: This is presenting the player assigned to the variable winner, in a string*/}
            The Winner is: { winner }
          </div>

          <div id="outcomeBoard">
            {/* 11) Here: this is the div where the game board created via map function, lives  */}
            { mappedGameBoard }
          </div>

      </div>
    )
  }
}

class Square extends Component{

  handleSquareClick = () => {
    // 12) Here: this is an even handler function; it takes props passed down to handle click event on a square
    this.props.gamePlay(this.props.index)
  }

  render(){
    return(
      <div id="square" onClick={ this.handleSquareClick }>
        {/* 13) Here: this is where the clickable square is rendered on the page; it calls the handleSquareClick event giving it clickability */}
        { this.props.value }
      </div>
    )
  }
}

export default App
