import { Component } from "react";

class Form extends Component {
  // We're going to set the initial state of the Form to be an object with some empty properties, and assign that initial state to this.state.
  // Previously, it was necessary to include a constructor() on React class components, but it's not required anymore.
  initialState = {
    name: "",
    job: ""
  }
  state = this.initialState;

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value
    this.setState({
      [key]: value,
    })
  }

  submitForm = () => {
    const addCharacters = this.props.addCharacters;
    addCharacters(this.state);
    console.log(this.state);
    console.log(addCharacters);
    this.setState(this.initialState);
  }

  render() {

    const name = this.state.name;
    const job = this.state.job;

    return(
      <form>
        <label htmlFor="name"> Name : </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}/>
        <label htmlFor="job"> Job : </label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}/>
        <input type="button" value="Submit" onClick={this.submitForm}/>
        {/* Finally, we'll add a submit button to submit the form. We're using an onClick instead of an onSubmit since we're not using the standard submit functionality. The click will call the submitForm we just made. */}
      </form>
    )
  }
}

export default Form;
