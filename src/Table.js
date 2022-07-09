import React, { Component } from "react";

const TableBody = (props) => {
  const rows = props.rows;
  const removeCharacter = props.removeCharacter;
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => {removeCharacter(index)}}> Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const Table = (props) => {
  const {characterData, handleDelete} = props;
  // ES6 property shorthand to create a variable that contains this.props.characterData.
    return (
      <table>
        <TableHeader/>
        <TableBody rows={characterData} removeCharacter={handleDelete}/>
      </table>
    )
  }
export default Table;
