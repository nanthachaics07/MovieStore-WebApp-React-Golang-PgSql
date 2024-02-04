import React, { Fragment, useEffect, useRef, useState } from "react";
import "./App.css";
import Input from "./Input.jsx";

function HellowWorld(props) {
  const [isTrue, setIsTrue] = useState(true);
  const toggleTrue = () => setIsTrue(!isTrue);
  const [crowd, setCrowd] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setdob] = useState("");

  // references
  const firstNameRef = useRef();
  const lastNameRef = useRef(null);
  const dobRef = useRef(null);

  useEffect(() => {
    console.log("usedEffect fired!");
    let people = [
      {
        id:1,
        firstName: "John",
        lastName: "Doe",
        dob: "01/01/2000",
      },
      {
        id:2,
        firstName: "Mohamed",
        lastName: "Ibrahim",
        dob: "24/11/1999",
      }
    ]
    setCrowd(people);
  }, [isTrue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, dob);

    if (lastName !== "") {
      addPerson(lastName, firstName, dob);
    }
  }

  const addPerson = (newFirstName, newLastName, newDOB) => {
    // Create the OBJECT
    let newPerson = {
      id: crowd.length + 1,
      firstName: newFirstName,
      lastName: newLastName,
      dob: newDOB,
    };

    const newList = crowd.concat(newPerson);

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

    setCrowd(sorted);
    setFirstName("");
    setLastName("");
    setdob("");

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    dobRef.current.value = "";
  }

  return (
    <>
      <hr />
      <h1 className="h1-color">{props.msg}</h1>
      <hr />
      {isTrue && (
        <>
          <h1>Current value's True</h1>
          <hr />
        </>
      )}
      <hr />
      {isTrue ? <p>Current value's True</p> : <p>Current value's False</p>}
      <hr />
      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>
        Toggle isTrue
      </a>
      <hr />

        <form autoComplete="off" onSubmit={handleSubmit}>

          <div className="mb3">
            <label htmlFor="firstName" className="first-name">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Your's first name"
              ref={firstNameRef}
              autoComplete="first-name-new"
              className="form-control"
              onChange={(event) => setFirstName(event.target.value)}
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
            ref={lastNameRef}
            className="form-control"
            placeholder="Your's last name"
            onChange={(event) => setLastName(event.target.value)}
          ></Input>

          <Input
            title="Date of Birth"
            type="date"
            name="dob"
            autoComplete="dob-new"
            ref={dobRef}
            className="form-control"
            onChange={(event) => setdob(event.target.value)}
          ></Input>

          <input type="submit" value="Submit" className="btn btn-primary"></input>

        </form>

        <div>
          <h4>First Name: {firstName}</h4><br />
          <h4>Last Name: {lastName}</h4><br />
          <h4>Date of Birth: {dob}</h4><br />
        </div>

      <h3>People</h3>
      <ul className="list-group">
        {crowd.map((person) => (
          <li className="list-group-item" key={person.id}>
            {person.id} {person.firstName} {person.lastName}
          </li>
        ))}
      </ul>

    </>
  );
}

export default HellowWorld;
