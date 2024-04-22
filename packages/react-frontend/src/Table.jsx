import React from "react";

// React Helper Component for the columns
function TableHeader() {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Job</th>
        <th>Removal</th>
      </tr>
    </thead>
  );
}
// React Helper Component for the Data in the table
// Use map and key to create an element in array to HTML
function TableBody({ characterData, removeOneCharacter }) {
  const rows = characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row._id}</td>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => removeOneCharacter(index)}>Remove</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}
// Table component that has columns and table data
function Table({ characterData, removeOneCharacter }) {
  return (
    <table>
      {/* Columns*/}
      <TableHeader />
      {/* Data */}
      <TableBody
        characterData={characterData}
        removeOneCharacter={removeOneCharacter}
      />
    </table>
  );
}

export default Table;
