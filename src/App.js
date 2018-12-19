import React, { Component } from 'react';
import TeamCard from "./components/TeamCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import teams from "./teams.json";

class App extends Component {
// Setting this.state.teams to the teams json array
state = {
  teams
};

removeTeam = id => {
  // Filter this.state.teams for teams with an id not equal to the id being removed
  const teams = this.state.teams.filter(team => team.id !== id);
  // Set this.state.friends equal to the new friends array
  this.setState({ teams });
};

// Map over this.state.teams and render a TeamCard component for each team object
  render() {
    return (
      <Wrapper>
        <Title>Football Teams</Title>
        {this.state.teams.map(team => (
          <TeamCard
          removeTeam={this.removeTeam}
          id={team.id}
          key={team.id}
          name={team.name}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
