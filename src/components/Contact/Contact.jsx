import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
export default function Contact({ data }) {
  const dispatch = useDispatch();
  return (
    <div className={css.contact}>
      <div>
        <p>
          <IoIosContact className={css.icon} />
          {data.name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {data.number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(data.id))}>Delete</button>
    </div>
  );
}
