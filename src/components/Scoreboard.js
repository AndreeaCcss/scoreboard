import React, { Component } from "react";
import Player from "./Player";
import './scoreboard.css';


export default class Scoreboard extends Component {
  state = {
    players: [
      { name: "Arien", score: 1, id: 1 },
      { name: "David", score: 2, id: 2 },
      { name: "Mimi", score: 3, id: 3 }
    ]
  };

  incrementScoreOfPlayer = id => {
    const updatedPlayers = this.state.players.map(player => {
      if (player.id === id) {
          return { ...player, score: player.score + 1 };
      } else {
          return player
      }
    })
    this.setState({ players: updatedPlayers });
  }
  render() {
    return (
      <div className="scoreboard">
        <ul>
          {[...this.state.players]
            .sort((a, b) => b.score - a.score)
            .map(player => (
              <Player 
               {...player} 
               key={player.id} 
               incrementScore={this.incrementScoreOfPlayer}/>
            ))}
        </ul>
      </div>
    );
  }
}
