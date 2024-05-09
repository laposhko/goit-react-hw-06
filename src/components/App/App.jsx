import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectLoading, selectError } from "../../redux/selectors";
export default function App() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
}
