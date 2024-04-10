import React from "react";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Removal</th>
      </tr>
    </thead>
  );
}
function TableBody({ characterData, removeOneCharacter }) {
  const rows = characterData.map((row, index) => {
    return (
      <tr key={index}>
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
function Table({ characterData, removeOneCharacter }) {
  return (
    <table>
      {/* Columns*/}
      <TableHeader />
      {/* Value */}
      <TableBody
        characterData={characterData}
        removeOneCharacter={removeOneCharacter}
      />
    </table>
  );
}

export default Table;
