import React, { Component } from 'react';
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: []
  }

  handleDelete = (index) => {
    this.setState({
      characters: this.state.characters.filter((character, i) => {
        return i !== index
      }),
    })
    console.log(this.state);
  }

  handleSubmit = (input) => {
    // will update the state by taking the existing this.state.characters and adding the new character parameter
    this.setState({
      characters: [...this.state.characters, input]
    })
    console.log(this.state);
  }

  render() {
    const characters = this.state.characters;

    return (
      <div className="container">
        <Table characterData={this.state.characters} handleDelete={this.handleDelete}/>
        <Form addCharacters={this.handleSubmit}/>
      </div>
    )
  }
}

export default App;
