import React, { Component } from 'react';
/**
 * Class that holds data about a MTGA set of cards.
 */
export default class MTGASet extends Component {
    constructor(props, name) {
      super(props)
      this.name = name
      this.user = {
        common: 0,
        uncommon: 0,
        rare: 0,
        mythic: 0
      }
      this.total = {
        common: 0,
        uncommon: 0,
        rare: 0,
        mythic: 0
      }
    }
  
    addRarity(rarity, amount) {
      this.user[rarity] += amount;
      this.total[rarity] += 4;
    }
  
    getTotalCompletion() {
      let userTotal = 0;
      let totalTotal = 0;
      Object.keys(this.user).map(key => {
        userTotal += this.user[key];
        totalTotal += this.total[key];
      });
      //Return percent complete
      return (userTotal/totalTotal*100).toFixed(2)
    }
  
    render() {
      return (
      <li key={this.name}>
        <h3>{this.name} - {this.getTotalCompletion()}%</h3>
        <ol>
        {this.outputRarity('common')}
        {this.outputRarity('uncommon')}
        {this.outputRarity('rare')}
        {this.outputRarity('mythic')}
        </ol>
      </li>
      )
    }
  
    outputRarity(rarity) {
      return (
        (this.total[rarity] != 0) ? (
          <li>{rarity[0].toUpperCase()+rarity.slice(1)}: {this.user[rarity]}/{this.total[rarity]} - {(this.user[rarity]/this.total[rarity]*100).toFixed(2)}%</li>
        ) : (
          ''
        )
      )
    }
  }