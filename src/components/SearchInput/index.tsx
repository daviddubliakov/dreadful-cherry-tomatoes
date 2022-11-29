import React from "react";
import SearchIcon from "../../icons/Search";

import styles from "./SearchInput.module.scss";

const SearchInput: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <div className={styles.searchContainer}>
      <SearchIcon className={styles.searchIcon} />
      <input className={styles.searchInput} {...props} />
    </div>
  );
};

export default SearchInput;
