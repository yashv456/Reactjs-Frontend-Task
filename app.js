const { useState } = React;

function EditableTable() {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Sam Wilson', age: 35 },
  ]);

  const handleEdit = (id, field, value) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setData(updatedData);
  };

  return (
    <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>
              <input
                type="text"
                value={row.name}
                onChange={(e) => handleEdit(row.id, 'name', e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                value={row.age}
                onChange={(e) => handleEdit(row.id, 'age', e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ReactDOM.render(<EditableTable />, document.getElementById('root'));
