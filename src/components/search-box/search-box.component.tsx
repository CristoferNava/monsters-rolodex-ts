import "./search-box.styles.css";

type SearchBoxProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
