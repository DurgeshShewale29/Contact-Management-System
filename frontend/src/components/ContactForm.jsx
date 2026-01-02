import { useState } from "react";
import axios from "axios";

export default function ContactForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const isValid =
    form.name.trim() &&
    form.phone.trim() &&
    (!form.email || /\S+@\S+\.\S+/.test(form.email));

  const submit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    await axios.post("https://contact-management-system-mmgc.onrender.com/api/contacts", form);
    setForm({ name: "", email: "", phone: "", message: "" });
    onAdd();
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: "500px" }}>

      <input
        placeholder="Name *"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Phone *"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
      />

      <textarea
        placeholder="Message"
        value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })}
      />

      <br />
      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
