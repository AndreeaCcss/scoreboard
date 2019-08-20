import React, { Component } from "react";
import Player from "./Player";
import './scoreboard.css';
import AddPlayer from './AddPlayer';


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

  delete = id => {
    const updatedPlayers = this.state.players.filter(player => {
        return player.id !== id
      })
    this.setState({ players: updatedPlayers });
  }

  addPlayer = (name) => {
    const player = {
      id: Math.round(Math.random()*100000),
      name,
      score: 0
    }
    this.setState({
      players: this.state.players.concat(player)
    })
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
               incrementScore={this.incrementScoreOfPlayer}
               delete={this.delete}
               />
            ))}
        </ul>
        <AddPlayer addPlayer={this.addPlayer} />
      </div>
    );
  }
}
