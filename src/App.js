import React, { Component } from 'react';
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  }

  handleDelete = (index) => {
    this.setState({
      characters: this.state.characters.filter((character, i) => {
        return i !== index
      }),
    })
  }


  render() {
    const characters = this.state.characters;

    return (
      <div className="container">
        <Table characterData={characters} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default App;
