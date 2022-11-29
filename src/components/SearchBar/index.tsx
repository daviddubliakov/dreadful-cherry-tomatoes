import React from "react";
import SearchInput from "../SearchInput";

import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  return (
    <div className={styles.searchBarContainer}>
      <SearchInput type="text" placeholder="Title" onChange={onChange} />
    </div>
  );
};

export default SearchBar;
