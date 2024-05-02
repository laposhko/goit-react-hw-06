import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();

  return (
    <div className={css.search}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        id={searchId}
        onChange={(event) => {
          dispatch(changeFilter(event.target.value));
        }}
        // value={filter}
        // onChange={(event) => {
        //   onFilter(event.target.value);
        // }}
      />
    </div>
  );
}
