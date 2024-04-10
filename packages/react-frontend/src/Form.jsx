import React, { useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    job: "",
  });

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
    </form>
  );
};

export default Form;
