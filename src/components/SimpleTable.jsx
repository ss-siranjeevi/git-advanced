import React from 'react';

function SimpleTable() {
  // Sample data for the table
  const tableData = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 28 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Alice', age: 25 },
  ];

  return (
    <div>
      <h2>Simple Table Example</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SimpleTable;
