import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const loadContacts = async () => {
            const res = await axios.get("https://contact-management-system-mmgc.onrender.com/api/contacts");
            setContacts(res.data);
        };

        loadContacts();
    }, []);

    const refreshContacts = async () => {
        const res = await axios.get("https://contact-management-system-mmgc.onrender.com/api/contacts");
        setContacts(res.data);
    };

    return (
        <div style={{
            padding: "20px",
            maxWidth: "800px",
            margin: "40px auto"
        }}>

            <h2>Contact Management</h2>
            <ContactForm onAdd={refreshContacts} />
            <ContactList contacts={contacts} onDelete={refreshContacts} />
        </div>
    );
}

export default App;
