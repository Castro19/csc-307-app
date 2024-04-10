import React, { useState } from "react";

const Form = ({ updateList }) => {
  // Individual Character updated by user input thru form
  const [person, setPerson] = useState({
    name: "",
    job: "",
  });
  //   Handle each typed character or change in the input field
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "name")
      setPerson({
        name: value,
        job: person["job"],
      });
    else {
      setPerson({
        name: person["name"],
        job: value,
      });
    }
  }
  //  Handler function when the user Submit the form
  function submitForm() {
    updateList(person);
    setPerson({
      name: "",
      job: "",
    });
  }
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange}
      />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={person.job}
        onChange={handleChange}
      />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
};

export default Form;
