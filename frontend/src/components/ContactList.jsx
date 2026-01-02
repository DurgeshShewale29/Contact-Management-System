import axios from "axios";

export default function ContactList({ contacts, onDelete }) {
  const remove = async (id) => {
    await axios.delete(`https://contact-management-system-mmgc.onrender.com/api/contacts/${id}`);
    onDelete();
  };

  if (contacts.length === 0) {
    return <p>No contacts yet.</p>;
  }

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(c => (
          <tr key={c._id}>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
            <td>
              <button onClick={() => remove(c._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
