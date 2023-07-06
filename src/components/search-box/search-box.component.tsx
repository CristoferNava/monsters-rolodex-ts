import { ChangeEventHandler } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <input
      type="search"
      className="search-box"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBox;
