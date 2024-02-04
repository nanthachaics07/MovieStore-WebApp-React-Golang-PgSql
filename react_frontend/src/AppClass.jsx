import React, { Component, Fragment } from "react";
import "./AppClass.css";
import Input from "./Input.jsx";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.lastNameRef = React.createRef();
    this.firstNameRef = React.createRef();
    this.dobRef = React.createRef();

    this.state = {
      isTrue: false,
      crowd: [],
    };
  }

  setFirstName = (newName) => {
    this.setState({ firstName: newName });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.crowd);
    if (this.state.lastName !== "") {
      this.addPerson(this.state.lastName, this.state.firstName, this.state.dob);
    }
  }

  addPerson = (newFirstName, newLastName, newDOB) => {
    // Create the OBJECT
    let newPerson = {
      id: this.state.crowd.length + 1,
      firstName: newFirstName,
      lastName: newLastName,
      dob: newDOB,
    };
    const newList = this.state.crowd.concat(newPerson);
    const sorted = newList.slice((a, b) => {
      if (a.id < b.id) {
        console.log("a is less than b");
        return -1;
      } else if (a.id > b.id) {
        console.log("a is greater than b");
        return 1;
      }
      console.log("a is equal to b");
      return 0;
    })
    this.setState({ crowd: sorted });
    this.setState({ firstName: "", lastName: "", dob: "" });

    this.firstNameRef.current.value = "";
    this.lastNameRef.current.value = "";
    this.dobRef.current.value = "";
    console.log(this.state.crowd);
  }

  componentDidMount() {
    this.setState({
      firstNameRef: "",
      lastNameRef: "",
      crowd: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          dob: "01/01/2000",
        },
        {
          id: 2,
          firstName: "Mohamed",
          lastName: "Ibrahim",
          dob: "24/11/1999",
        },
      ],
    })
  };

  toggleTrue = () => {
    this.setState({ isTrue: !this.state.isTrue });
  };

  render() {
    return (
      <>
        <hr />
        <h1 className="h1-color">{this.props.msg}</h1>
        <hr />
        {this.state.isTrue && (
          <>
            <h1>Current value's True</h1>
            <hr />
          </>
        )}
        <hr />
        {this.state.isTrue ? (
          <p>Current value's True</p>
        ) : (
          <p>Current value's False</p>
        )}
        <hr />
        <a
          href="#!"
          className="btn btn-outline-secondary"
          onClick={this.toggleTrue}
        >
          Toggle isTrue
        </a>
        
        <hr />

        <form autoComplete="off" onSubmit={this.handleSubmit}>

          <div className="mb3">
            <label htmlFor="firstName" className="first-name">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Your's first name"
              ref={this.firstNameRef}
              autoComplete="first-name-new"
              className="form-control"
              onChange={(event) => this.setFirstName(event.target.value)}
            />
          </div>

          {/* <Input
              title="First Name"
              type="text"
              name="first-name"
              className="form-control"
              autoComplete="first-name-new"

              placeholder="Your's first name"
              onChange={(event) => setFirstName(event.target.value)}
          ></Input> */}

          <Input
            title="Last Name"
            type="text"
            name="last-Name"
            autoComplete="last-name-new"
            ref={this.lastNameRef}
            className="form-control"
            placeholder="Your's last name"
            onChange={(event) => this.setState({ lastName: event.target.value })}
          ></Input>

          <Input
            title="Date of Birth"
            type="date"
            name="dob"
            autoComplete="dob-new"
            ref={this.dobRef}
            className="form-control"
            onChange={(event) => this.setState({ dob: event.target.value })}
          ></Input>

          <input type="submit" value="Submit" className="btn btn-primary"></input>

        </form>

        <div>
          <h4>First Name: {this.state.firstName}</h4><br />
          <h4>Last Name: {this.state.lastName}</h4><br />
          <h4>Date of Birth: {this.state.dob}</h4><br />
        </div>

        <h3>People</h3>
        <ul className="list-group">
        {this.state.crowd.map((person) => (
          <li className="list-group-item" key={person.id}>
            {person.id} {person.firstName} {person.lastName}
          </li>
        ))}
        </ul>

      </>
    );
  }
}
