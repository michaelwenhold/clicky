import React, { Component } from 'react';
import TeamCard from "./components/TeamCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import teams from "./teams.json";

class App extends Component {
// Setting this.state.teams to the teams json array
state = {
  teams,
  clickedTeamIds: [],
  score: 0,
  status: ""
};

shuffle = id => {
  let clickedTeamIds = this.state.clickedTeamIds;

  if(clickedTeamIds.includes(id)){
    this.setState({ clickedTeamIds: [], score: 0, status: "Game Over! Click to play again!"});
    return;
  }else{
    clickedTeamIds.push(id)

  if(clickedTeamIds.length === 32){
    this.setState({score: 32, status: "You won! You sure do know your football teams! Click to play again", clickedTeamIds: []});
  return;
  }

  this.setState({ teams, clickedTeamIds, score: clickedTeamIds.length, status: " "});

  for (let i = teams.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [teams[i], teams[j]] = [teams[j], teams[i]];
  }
  }
};

// Map over this.state.teams and render a TeamCard component for each team object
  render() {
    return (
      <Wrapper>

      <Title>
        NFL Clicky Game
        <div>
          <h3>Try not to click the same team logo twice!</h3>
          </div>
          <score total={this.state.score}
        status={this.state.status}
        />
        </Title>  

        

        {this.state.teams.map(team => (
          <TeamCard
          shuffle={this.shuffle}
          id={team.id}
          key={team.id}
          image={team.image}
          name={team.name}
          established={team.established}
          superBowls={team.superBowls}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
