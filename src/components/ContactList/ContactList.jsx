import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";
export default function ContactList({ onDelete }) {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
